// app/api/register/route.ts

// ⏱️ Tell Next.js this route should run dynamically
export const dynamic = 'force-dynamic';

// ✅ Import dependencies
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// 🔑 Initialize Supabase and Resend clients
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);
const resend = new Resend(process.env.RESEND_API_KEY);

// 🛠️ POST route to handle form submissions
export async function POST(req: Request) {
  console.log('✅ /api/register POST route hit');

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

    if (error) throw error;

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

// 🌐 GET route to confirm the API is live
export async function GET() {
  return new Response('👋 Hello from GET!');
}
