const nodemailer = require('nodemailer');
const catchAsync = require('./catchAsync');

const sendEmail = catchAsync(async (options) => {
  // 1) Create Transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  // 2) Define Email Options
  const mailOptions = {
    from: 'Hazem Hisham',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  // 3) Send The Email
  await transporter.sendMail(mailOptions);
});

module.exports = sendEmail;
