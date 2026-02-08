import nodemailer from "nodemailer";

const sendEmail = async ({ fullname, email, phone, subject, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"${fullname}" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
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
};

export default sendEmail;
