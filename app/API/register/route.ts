// app/api/register/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export const dynamic = "force-dynamic";


// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  return NextResponse.json({ message: '✅ GET route works!' });
}


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, program, age } = body;

    console.log('Received data:', body);

    if (!name || !email || !program || !age) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Insert into Supabase
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
      console.error('Database error:', error);
      throw error;
    }

    // Send confirmation email
    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: email,
      subject: 'Registration Confirmed',
      html: `<p>Hi ${name},</p><p>Thanks for registering for the <strong>${program}</strong> program! 🎉</p><p>We’ll be in touch soon with more details.</p>`,
    });

    return NextResponse.json({ message: '✅ Registration successful!' });
  } catch (err: any) {
    console.error('Unhandled error:', err);
    return NextResponse.json(
      { error: 'Could not save registration', details: err.message },
      { status: 500 }
    );
  }
}
