import Contact from "../models/contact.model.js";
import sendEmail from "../utils/sendMail.js";

// send message
export const sendMessage = async (req, res) => {
  try {
    const data = req.body;

    // 1️⃣ save to DB (backup)
    await Contact.create(data);

    // 2️⃣ send email to YOU
    await sendEmail(data);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get message (NO CHANGE)
export const getMessage = async (req, res) => {
  try {
    const result = await Contact.find();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
