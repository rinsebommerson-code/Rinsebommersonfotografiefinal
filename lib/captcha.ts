import crypto from 'node:crypto';

/**
 * Ingebouwde, stateless captcha (geen externe dienst nodig).
 *
 * De server genereert een rekensom met een vervaltijd en ondertekent die met
 * HMAC. Het formulier stuurt de som-token + het antwoord terug; de server
 * controleert handtekening, vervaltijd én antwoord. Zo hoeft er niets te worden
 * opgeslagen en kan een bot de vraag niet vervalsen of oneindig hergebruiken.
 *
 * Zet in productie CAPTCHA_SECRET (zie README). Zonder env-var wordt een
 * willekeurige sleutel per serverstart gebruikt.
 */
const SECRET =
  process.env.CAPTCHA_SECRET || crypto.randomBytes(32).toString('hex');

if (!process.env.CAPTCHA_SECRET) {
  console.warn(
    '[captcha] CAPTCHA_SECRET is niet gezet — er wordt een tijdelijke sleutel gebruikt. ' +
      'Zet CAPTCHA_SECRET als environment-variabele in productie (zie README).',
  );
}

const TTL_MS = 5 * 60 * 1000; // 5 minuten geldig

type Payload = { a: number; b: number; op: '+' | '×'; exp: number };

function sign(data: string): string {
  return crypto.createHmac('sha256', SECRET).update(data).digest('base64url');
}

export function createChallenge(): { question: string; token: string } {
  const a = 1 + Math.floor(Math.random() * 9);
  const b = 1 + Math.floor(Math.random() * 9);
  const op: '+' | '×' = Math.random() < 0.5 ? '+' : '×';
  const payload: Payload = { a, b, op, exp: Date.now() + TTL_MS };

  const data = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const token = `${data}.${sign(data)}`;

  return { question: `${a} ${op} ${b}`, token };
}

export function verifyChallenge(token: unknown, answer: unknown): boolean {
  if (typeof token !== 'string' || token.length === 0 || token.length > 512) return false;

  const [data, sig] = token.split('.');
  if (!data || !sig) return false;

  // Handtekening controleren (constant-time).
  const expected = sign(data);
  const sigBuf = Buffer.from(sig);
  const expBuf = Buffer.from(expected);
  if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
    return false;
  }

  let payload: Payload;
  try {
    payload = JSON.parse(Buffer.from(data, 'base64url').toString('utf8'));
  } catch {
    return false;
  }

  if (!payload || typeof payload.exp !== 'number' || Date.now() > payload.exp) return false;

  const result = payload.op === '+' ? payload.a + payload.b : payload.a * payload.b;
  const given = Number(String(answer ?? '').trim());

  return Number.isFinite(given) && given === result;
}
