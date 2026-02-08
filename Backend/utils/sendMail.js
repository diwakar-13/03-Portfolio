import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ fullname, email, phone, subject, message }) => {
  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.RECEIVER_EMAIL],
      replyTo: email,
      subject: `New Message: ${subject}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${fullname}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    console.log("✅ Email sent successfully");
  } catch (error) {
    console.error("❌ Email failed:", error.message);
    // Email fail ho sakta hai, but backend crash nahi hona chahiye
  }
};

export default sendEmail;
