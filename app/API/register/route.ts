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

// 🛠️ Helper function to clean phone number for storage
const cleanPhoneNumber = (phone: string): string => {
  return phone.replace(/[^\d]/g, '');
};

// 🛠️ Helper function to validate phone number
const validatePhoneNumber = (phone: string): boolean => {
  const digitsOnly = cleanPhoneNumber(phone);
  return digitsOnly.length === 10;
};

// 🛠️ Helper function to validate email
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 🛠️ POST route to handle form submissions
export async function POST(req: Request) {
  console.log('✅ /api/register POST route hit');

  try {
    const body = await req.json();
    const { childname, parentname, parentphone, email, program, age } = body;

    // 🔍 Validation
    if (!childname || !parentname || !parentphone || !email || !program || !age) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
    }

    // Validate phone number
    if (!validatePhoneNumber(parentphone)) {
      return NextResponse.json({ error: 'Please enter a valid 10-digit phone number' }, { status: 400 });
    }

    // Validate age
    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 6 || ageNum > 12) {
      return NextResponse.json({ error: 'Child must be between 6 and 12 years old' }, { status: 400 });
    }

    // Clean phone number for storage (remove formatting)
    const cleanedPhone = cleanPhoneNumber(parentphone);

    // 📊 Insert into Supabase
    const { error } = await supabase.from('registrations').insert([
      {
        child_name: childname,        // Updated field name
        parent_name: parentname,      // Updated field name  
        parent_phone: cleanedPhone,   // Updated field name (store digits only)
        email: email,
        program: program,
        age: ageNum,
        submitted_at: new Date().toISOString(),
        is_active: true
      },
    ]);

    if (error) {
      console.error('❌ Supabase insert error:', error);
      throw error;
    }

    // 📧 Send welcome email
    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: email,
      subject: `Welcome to the ${program} Program, ${childname}!`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto;">
          <h2>Hi ${parentname},</h2>
          <p>We're thrilled to have <strong>${childname}</strong> join the <strong>${program}</strong> program at On The Ball! 🎉</p>
          <p>Your program is scheduled to begin on <strong>August 1st</strong>.</p>
          
          <h3>Registration Details:</h3>
          <ul>
            <li><strong>Child's Name:</strong> ${childname}</li>
            <li><strong>Age:</strong> ${age} years old</li>
            <li><strong>Program:</strong> ${program}</li>
            <li><strong>Contact Phone:</strong> ${parentphone}</li>
          </ul>
          
          <p>To get familiar with what's ahead, you can read more about your program here:</p>
          <p><a href="https://on-the-ball.vercel.app/program" style="color: #0070f3;">View Program Details</a></p>
          <p>If you have any questions, feel free to reply to this email—we're here to help every step of the way.</p>
          <br/>
          <p>Warm regards,</p>
          <p><strong>The OTB Team</strong></p>
          <p style="font-size: 0.9em; color: #777;">On The Ball · Toronto, ON · Canada</p>
        </div>
      `,
    });

    console.log('✅ Registration successful for:', childname);
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