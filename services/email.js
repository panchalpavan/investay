// const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.NEXT_PUBLIC_SEND_GRID_KEY);

// This dynamic function receives subject,text,html,email of the user and
// is used to send emails to the user on different occasions.
export const sendEmail = async ({ subject, text, html, email }) => {
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_SEND_GRID_EMAIL,
    to: email,
    subject,
    text,
    html,
  };

  try {
    console.log("mailOptions-------------",mailOptions);
    const msgSent = await sgMail.send(mailOptions);
    console.log("Email sent!");
  } catch (error) {
    console.log(`SendGrid error: ${error}`);
  }

  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   secure: true,
  //   auth: {
  //     user: process.env.NEXT_PUBLIC_NODE_MAILER_EMAIL,
  //     pass: process.env.NEXT_PUBLIC_MAILER_PASSWORD,
  //   },
  //   tls: {rejectUnauthorized: false}
  // });

  // await new Promise((resolve, reject) => {
  //   transporter.verify(function (error, success) {
  //     if (error) {
  //       reject(error);
  //     } else {
  //       console.log("Server is ready to take our messages");
  //       resolve(success);
  //     }
  //   });
  // });

  // await new Promise((resolve, reject) => {
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       reject(error);
  //     } else {
  //       resolve(info);
  //     }
  //   });
  // });


};
