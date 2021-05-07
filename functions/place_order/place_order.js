const nodemailer = require("nodemailer");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

const generateOrderEmail = ({ orders, total }) => {
  return `
  <div>
    <h2>Your recent Order for ${total ?? "$0"}</h2>
    <p>Please start walking over, we will have your order ready in the next 20 mins.</p>
   ${
     orders &&
     orders.length &&
     `<ul style="list-style: none;">
      ${orders
        .map(
          ({ name, thumbnail, size, price }) =>
            name &&
            thumbnail &&
            size &&
            price &&
            `<li>
            <img style="height: 100px; width: 100px; object-fit: cover;" src="${thumbnail}" alt="${name}"/>
             ${name} - ${price} (${size})
          </li>`
        )
        .join("")}
    </ul>`
   }
    <p>Your total is <strong>${total ?? "$0"}</strong> due at pickup</p>
    <br/>
    <h3><strong>NB: </strong>This email used only for testing purposes.</h3>
  </div>`;
};

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const responseFunction = (statusCode, message) => {
  return {
    headers,
    statusCode,
    body: JSON.stringify({
      message,
    }),
  };
};

exports.handler = async event => {
  const origin = new URL(event.headers.origin);
  if (!origin.hostname === "kingslices.elboudali.com") {
    return responseFunction(400, "Unacceptable request");
  }

  const body = JSON.parse(event.body);

  // Check if they have filled out the honeypot
  if (body.pancakeSyrup) {
    return responseFunction(400, "Cya.");
  }

  // inputs validator
  const requiredFields = ["name", "email", "orders"];
  for (const field of requiredFields) {
    if (!body[field]) {
      return responseFunction(400, `Oops! You are missing the ${field} field.`);
    }
  }

  if (!body.orders.length) {
    return responseFunction(400, "Why would you order nothing?");
  }

  try {
    await transporter.sendMail({
      from: "King Slices <contact@elboudali.com>",
      to: `${body.name} <${body.email}>`,
      subject: "Your new order!",
      html: generateOrderEmail({ orders: body.orders, total: body.total }),
    });
    return responseFunction(200, "Success! Come on down for your pizzas.");
  } catch (error) {
    return responseFunction(
      400,
      `Mail is not sent - Message: ${error.message}`
    );
  }
};
