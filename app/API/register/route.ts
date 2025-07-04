// app/api/register/route.ts
console.log('✅ /api/register POST route hit');

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, program, age } = body;

    if (!name || !email || !program || !age) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const { error } = await supabase.from('registrations').insert([
      {
        name,
        email,
        program,
        age: parseInt(age),
        submitted_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      throw error;
    }

    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: email,
      subject: 'Registration Confirmed',
      html: `<p>Hi ${name},</p><p>Thanks for registering for the <strong>${program}</strong> program! 🎉</p>`,
    });

    return NextResponse.json({ message: '✅ Registration successful!' });
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Could not save registration', details: err.message },
      { status: 500 }
    );
  }
}
