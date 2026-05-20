import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, phone, position, experience, industry, linkedin, coverNote } = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Urban Werkz Careers" <${process.env.GMAIL_USER}>`,
      to: 'urbanwerkz@gmail.com',
      replyTo: email,
      subject: `[Application] ${name} — ${position}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Years of Experience:</strong> ${experience}</p>
        <p><strong>Industry Background:</strong> ${industry || 'Not provided'}</p>
        <p><strong>LinkedIn:</strong> ${linkedin ? `<a href="${linkedin}">${linkedin}</a>` : 'Not provided'}</p>
        <hr />
        <p><strong>Cover Note:</strong></p>
        <p>${coverNote ? coverNote.replace(/\n/g, '<br/>') : 'Not provided'}</p>
      `,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email error:', err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
