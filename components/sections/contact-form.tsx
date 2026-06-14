'use client';

import { useCallback, useEffect, useState } from 'react';
import { trajecten } from '@/lib/data';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'success' | 'error';
type CaptchaState = 'loading' | 'ready' | 'error';

const fieldBase =
  'w-full border border-inkt/20 bg-papier px-4 py-3.5 font-body text-lg text-inkt placeholder:text-inkt/35 transition-colors duration-200 focus:border-signaal';

const labelBase = 'mb-2 block font-display text-xs font-semibold uppercase tracking-label text-steen';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');
  const [captcha, setCaptcha] = useState<{ question: string; token: string } | null>(null);
  const [captchaState, setCaptchaState] = useState<CaptchaState>('loading');

  const loadCaptcha = useCallback(async () => {
    setCaptchaState('loading');
    try {
      const res = await fetch('/api/captcha', { cache: 'no-store' });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setCaptcha({ question: data.question, token: data.token });
      setCaptchaState('ready');
    } catch {
      setCaptcha(null);
      setCaptchaState('error');
    }
  }, []);

  useEffect(() => {
    loadCaptcha();
  }, [loadCaptcha]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    data.captchaToken = captcha?.token ?? '';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Versturen mislukt.');
      }
      setStatus('success');
      form.reset();
      loadCaptcha();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Er ging iets mis.');
      // Token is verbruikt/verlopen — haal een nieuwe beveiligingsvraag op.
      loadCaptcha();
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-inkt/15 bg-wolk p-10 text-center sm:p-14">
        <p className="font-display text-sm font-bold uppercase tracking-label text-signaal">
          Verzonden
        </p>
        <h3 className="mt-4 font-display text-3xl font-black">Goede keuze. Tot snel.</h3>
        <p className="mx-auto mt-4 max-w-md font-body text-lg leading-relaxed text-inkt/75">
          Je aanvraag is binnen. Ik neem binnen 24 uur contact met je op met een eerste, helder plan.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 font-display text-sm font-semibold uppercase tracking-wider text-inkt link-underline"
        >
          Nog een bericht sturen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="naam" className={labelBase}>
            Naam *
          </label>
          <input id="naam" name="naam" type="text" required autoComplete="name" className={fieldBase} />
        </div>
        <div>
          <label htmlFor="email" className={labelBase}>
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="bedrijf" className={labelBase}>
          Bedrijf
        </label>
        <input
          id="bedrijf"
          name="bedrijf"
          type="text"
          autoComplete="organization"
          className={fieldBase}
        />
      </div>

      <div>
        <label htmlFor="traject" className={labelBase}>
          Welk traject heeft je interesse?
        </label>
        <select id="traject" name="traject" defaultValue="" className={cn(fieldBase, 'appearance-none')}>
          <option value="" disabled>
            Kies een traject…
          </option>
          {trajecten.map((t) => (
            <option key={t.id} value={t.name}>
              {t.name} — {t.tagline}
            </option>
          ))}
          <option value="Weet ik nog niet">Weet ik nog niet — laten we sparren</option>
        </select>
      </div>

      <div>
        <label htmlFor="bericht" className={labelBase}>
          Vertel kort over je bedrijf en wat je wilt bereiken *
        </label>
        <textarea
          id="bericht"
          name="bericht"
          required
          rows={5}
          className={cn(fieldBase, 'resize-y')}
        />
      </div>

      {/* Ingebouwde captcha */}
      <div>
        <label htmlFor="captchaAnswer" className={labelBase}>
          Beveiliging — los de som op *
        </label>
        <div className="flex flex-wrap items-center gap-3">
          {captchaState === 'ready' && captcha ? (
            <span
              aria-hidden="true"
              className="select-none border border-inkt/20 bg-wolk px-4 py-3 font-display text-lg font-bold tracking-wide"
            >
              {captcha.question} =
            </span>
          ) : (
            <span className="border border-inkt/15 bg-wolk px-4 py-3 font-display text-sm text-inkt/50">
              {captchaState === 'error' ? 'Beveiliging niet geladen' : 'Beveiliging laden…'}
            </span>
          )}

          <input
            key={captcha?.token ?? 'pending'}
            id="captchaAnswer"
            name="captchaAnswer"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={3}
            required
            autoComplete="off"
            aria-label={
              captcha ? `Beveiliging: hoeveel is ${captcha.question}?` : 'Beveiliging: antwoord'
            }
            disabled={captchaState !== 'ready'}
            className={cn(fieldBase, 'max-w-[110px] disabled:opacity-50')}
          />

          <button
            type="button"
            onClick={loadCaptcha}
            className="font-display text-sm font-semibold uppercase tracking-wider text-inkt/60 transition-colors hover:text-signaal"
          >
            {captchaState === 'error' ? 'Opnieuw laden' : 'Nieuwe som'}
          </button>
        </div>
        <p className="mt-2 font-body text-sm text-inkt/55">Even checken dat je geen robot bent.</p>
      </div>

      {/* Honeypot tegen spam (verborgen voor gebruikers) */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'submitting' || captchaState !== 'ready'}
          className="group/btn inline-flex items-center justify-center gap-2.5 bg-signaal px-8 py-4 font-display text-[0.95rem] font-semibold uppercase tracking-wider text-white transition-all duration-300 ease-editorial hover:bg-inkt disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Versturen…' : 'Ja, ik wil zichtbaar worden'}
          {status !== 'submitting' && (
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            >
              &rarr;
            </span>
          )}
        </button>
        <p className="font-body text-sm text-inkt/55">Reactie binnen 24 uur.</p>
      </div>

      <div aria-live="polite" className="min-h-[1.5rem]">
        {status === 'error' && (
          <p className="font-body text-sm text-signaal">
            {error} Lukt het niet? Mail dan direct naar{' '}
            <a href="mailto:hello@rinsebommerson.nl" className="link-underline font-semibold">
              hello@rinsebommerson.nl
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
