import { NextResponse } from 'next/server';

/**
 * Ontvangt het contactformulier.
 *
 * Standaard valideert deze route alleen en logt de aanvraag (zichtbaar in je
 * serverlogs). Koppel je eigen e-maildienst om aanvragen echt te ontvangen —
 * bijvoorbeeld Resend, Postmark of Nodemailer. Zie de README ("Contactformulier
 * koppelen") voor een voorbeeld.
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { naam, email, bericht, website } = data ?? {};

    // Honeypot: bots vullen dit verborgen veld in.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!naam || !email || !bericht) {
      return NextResponse.json(
        { ok: false, error: 'Vul je naam, e-mail en bericht in.' },
        { status: 400 },
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
    if (!emailOk) {
      return NextResponse.json(
        { ok: false, error: 'Vul een geldig e-mailadres in.' },
        { status: 400 },
      );
    }

    // TODO: verstuur hier een e-mail of sla op in je systeem.
    console.log('Nieuwe aanvraag via contactformulier:', data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Er ging iets mis bij het versturen.' },
      { status: 500 },
    );
  }
}
