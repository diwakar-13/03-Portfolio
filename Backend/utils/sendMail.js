import nodemailer from "nodemailer";

const sendEmail = async ({ fullname, email, phone, subject, message }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,          // 🔥 NOT 465
      secure: false,      // 🔥 TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      family: 4,          // 🔥 force IPv4
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Message: ${subject}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${fullname}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p>${message}</p>
      `,
    });

    console.log("✅ Email sent");
  } catch (err) {
    console.error("❌ Email error:", err.message);
    // email fail ho sakta hai, but app rukni nahi chahiye
  }
};

export default sendEmail;
