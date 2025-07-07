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

  if (error) {
    console.error('❌ Supabase insert error:', error);
    throw error;
  }


await resend.emails.send({
  from: process.env.FROM_EMAIL!,
  to: email,
  subject: `Welcome to the ${program} Program, ${name}!`,
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto;">
      <h2>Hi ${name},</h2>
      <p>We're thrilled to have you join the <strong>${program}</strong> program at On The Ball! 🎉</p>
      <p>Your program is scheduled to begin on <strong>August 1st</strong>.</p>
      <p>To get familiar with what’s ahead, you can read more about your program here:</p>
      <p><a href="https://on-the-ball.vercel.app/program" style="color: #0070f3;">View Program Details</a></p>
      <p>If you have any questions, feel free to reply to this email—we’re here to help every step of the way.</p>
      <br/>
      <p>Warm regards,</p>
      <p><strong>The OTB Team</strong></p>
      <p style="font-size: 0.9em; color: #777;">On The Ball · Toronto, ON · Canada</p>
    </div>
  `,
});


    return NextResponse.json({ message: '✅ Registration successful!' });
  } catch (err: any) {
    console.error('❌ Caught error:', err);
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
