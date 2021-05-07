const nodemailer = require("nodemailer");
const querystring = require("querystring");

// const headers = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Headers": "Content-Type",
// };

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
  "Content-Type": "application/json",
  "Access-Control-Allow-Methods": "*",
};

const generateOrderEmail = ({ orders, total }) => {
  return `
  <div>
    <h2>Your recent Order for ${total}</h2>
    <p>Please start walking over, we will have your order ready in the next 20 mins.</p>
    <ul>
      ${orders
        .map(
          ({ name, thumbnail, size, price }) => `
          <li>
            <img src="${thumbnail}" alt="${name}"/>
             ${name} - ${price} (${size})
          </li>
          `
        )
        .join("")}
    </ul>
    <p>Your total is <strong>${total}</strong> due at pickup</p>
    <style>
        ul {
          list-style: none;
        }
        img{
          height: 100px;
          width: 100px;
          object-fit: cover;
        }
    </style>
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

exports.handler = async event => {
  try {
    const origin = new URL(event.headers.origin);
    if (!origin.hostname === "kingslices.elboudali.com") {
      throw new Error("Unacceptable request");
    }

    const body = querystring.parse(event.body).payload;
    // Check if they have filled out the honeypot
    if (body.pancakeSyrup) {
      throw new Error("Cya.");
    }

    // inputs validator
    const requiredFields = ["name", "email", "orders"];
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new Error(`Oops! You are missing the ${field} field.`);
      }
    }

    if (!body.orders.length) {
      throw new Error("Why would you order nothing?");
    }

    await transporter.sendMail({
      from: "Slice Masters <slice@example.com>",
      to: `${body.name} <${body.email}>, orders@example.com`,
      subject: "New order!",
      html: generateOrderEmail({ orders: body.orders, total: body.total }),
    });

    return {
      headers,
      statusCode: 200,
      body: JSON.stringify({
        message: "Success! Come on down for your pizzas.",
      }),
    };
  } catch (error) {
    return {
      headers,
      statusCode: 400,
      body: JSON.stringify({
        message: `Mail is not sent - Error: ${error.message}`,
      }),
    };
  }
};
