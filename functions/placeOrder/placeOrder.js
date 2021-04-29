const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  const requiredFields = ["name", "email", "orders"];

  // inputs validator
  for (const field of requiredFields) {
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! You are missing the ${field} field.`,
        }),
      };
    }
  }

  const info = await transporter.sendMail({
    from: "Slice Masters <slice@example.com>",
    to: "orders@example.com",
    subject: "New Order",
    html: `<p>Your new pizza order is here!</p>`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(info),
  };
};
