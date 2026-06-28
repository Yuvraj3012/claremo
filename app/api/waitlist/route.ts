import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  }

  const { error } = await getSupabase().from('waitlist').insert({ email });

  if (error) {
    // Postgres unique violation
    if (error.code === '23505') {
      return NextResponse.json({ error: 'already_registered' }, { status: 409 });
    }
    console.error('Waitlist insert error:', error);
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
