import { NextResponse } from 'next/server';

// TODO: implement contact form handling (validation, email/webhook dispatch).
export async function POST() {
  return NextResponse.json({ ok: false, error: 'Not implemented' }, { status: 501 });
}
