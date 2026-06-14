import { NextResponse } from 'next/server';
import { createChallenge } from '@/lib/captcha';

// Altijd een verse vraag — nooit cachen.
export const dynamic = 'force-dynamic';

export async function GET() {
  const { question, token } = createChallenge();
  return NextResponse.json(
    { question, token },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } },
  );
}
