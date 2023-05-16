const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.NEXT_PUBLIC_JWT_SECRET;
const connectToMongo = require("../../db");
const { setCookie } = require("cookies-next");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const mobileRegex = /^[0-9]{10}$/;

const validate = ({identifier})=> {
  if(emailRegex.test(identifier) || /\d/.test(identifier)) {
    return true;
  }
  return false;
}

const User = require("../../models/User");
const Token = require("../../models/Token");
const { sendEmail } = require("../../services/email");
const { sendSms } = require("../../services/mobile");

// Controller for logging in an existing user
const login = async (req, res) => {
  if (req.method === "POST") {
    // Connection to mongodb
    await connectToMongo();
    let success = false;
    try {
      const { identifier } = req.body;

      // Validating req.body
      if(!validate({identifier})) {
        success = false;
        return res.status(422).json({success, error: "Invalid email or mobile!"});
      }

      // Checking if user exists with the userId received from req.body
      let user = null;
      if(emailRegex.test(identifier)) {
        user = await User.findOne({email: identifier});
        if (!user) {
          success = false;
          return res.status(404).json({ success, error: "User not registered!" });
        }
      }
      else {
        user = await User.findOne({mobile: identifier});
        if (!user) {
          success = false;
          return res.status(404).json({ success, error: "User not registered!" });
        }
      }

      const otp = Math.floor(1000+Math.random()* 9000);

      let token = await Token.findOne({email: user.email});

      if(!token) {
        // Creating the token
        token = await Token.create({
          email: user.email,
          otp,
        });
      }
      else {
        token = await Token.findByIdAndUpdate(token._id.toString(), {otp}, {new: true});
      }

      // Sending OTP, to the user's email
      await sendEmail({
        subject: "OTP for login! This OTP is valid for 5 minutes only!",
        text: `OTP: ${token.otp}`,
        email: user.email,
      });

      // Sending OTP to the user's mobile number
      // await sendSms({
      //   body: `OTP for login! This OTP is valid for 5 minutes only! OTP: ${token.otp}`,
      //   mobile: `${user.countryCode}${user.mobile}`,
      // });

      success = true;
      return res.status(201).json({ success, token: token._id.toString() });
    } catch (error) {
      success = false;
      return res
        .status(500)
        .json({ success, error: error.message, status: 500 });
    }
  } else {
    return res.status(403).send("Method not allowed!");
  }
};

module.exports = login;
