import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Set up your email transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // or another email provider
    auth: {
        user: process.env.EMAIL_USER, // your Gmail address or SMTP server email
        pass: process.env.EMAIL_PASS, // your email password or app-specific password
    },
})

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json()

        // Send an email to yourself
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECEIVER, // your email address to receive the messages
            subject: `New Contact Form Submission: ${name}`,
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #AD8B73;">New Contact Form Submission</h2>
                <p>You have received a new message from your website's contact form.</p>
                <hr style="border: 1px solid #E3CAA5;" />
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #CEAB93;">${email}</a></p>
                <p><strong>Message:</strong></p>
                <blockquote style="border-left: 4px solid #AD8B73; padding-left: 10px; color: #555;">${message}</blockquote>
                <p>Please follow up with them as soon as possible!</p>
            </div>
            `,
        })


        // Send a response email to the user
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email, // Send to the user's email
            subject: 'Thank You for Reaching Out!',
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #AD8B73;">Thank You for Your Message!</h2>
                <p>Hi <strong>${name}</strong>,</p>
                <p>Thank you for reaching out! I’ve received your message and will get back to you as soon as possible.</p>
                <p>In the meantime, feel free to explore my <a href="https://adityabhatt707.in" style="color: #CEAB93; text-decoration: none;">portfolio</a> or follow me on social media:</p>
                <ul style="list-style: none; padding: 0;">
                <li><a href="https://linkedin.com/in/adityabhatt707" style="color: #E3CAA5;">LinkedIn</a></li>
                </ul>
                <p>Best regards,<br>Aditya Bhatt<br>Full-Stack Developer</p>
                <hr style="border: 1px solid #E3CAA5;" />
                <p style="font-size: 12px; color: #666;">This is an automated response to confirm that I have received your inquiry.</p>
            </div>
            `,
        })


        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
