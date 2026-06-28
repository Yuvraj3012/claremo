import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));

  if (!process.env.ADMIN_PASSWORD || body.password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const { data, error } = await getSupabase()
    .from('waitlist')
    .select('id, email, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Admin fetch error:', error);
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }

  return NextResponse.json({ data });
}
