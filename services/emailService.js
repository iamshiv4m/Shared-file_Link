const nodeMailer = require("nodemailer");

module.exports = async ({ from, to, subject, text, html }) => {
  let transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  let info = await transporter.sendMail({
    //   key or value same hai toh ek baar likh sakte hai
    from: `FileShare<${from}>`,
    to,
    subject,
    text,
    html,
  });
};
