import { setCookie } from "cookies-next";
import jwt from "jsonwebtoken";
const connectToMongo = require("../../db");

const Token = require("../../models/Token");
const User = require("../../models/User");

const secret = process.env.JWT_SECRET;

const verifyOtp = async (req, res) => {
  if (req.method === "POST") {
    await connectToMongo();
    let success = false;
    try {
      const id = req.query.id;
      const { otp } = req.body;

      const token = await Token.findById(id);
      if (!token) {
        success = false;
        return res.status(404).json({ success, error: "Token not found!" });
      }

      if (token.otp !== parseInt(otp)) {
        success = false;
        return res
          .status(403)
          .json({ success, error: "OTP entered is wrong." });
      }

      const user = await User.findOne({ email: token.email });
      if (!user) {
        success = false;
        return res.status(404).json({ success, error: "User does not exist!" });
      }

      await Token.findByIdAndDelete(id,{new: true});

      const data = {
        user: {
          id: user.id,
          role: user.role,
        },
      };

      // Generating jwt token
      const jwtToken = jwt.sign(data, secret);

      // setting the token in the cookies
      if (process.env.NEXT_PUBLIC_NODE_ENV !== "test") {
        setCookie("authorization", `Bearer ${jwtToken}`, {
          req,
          res,
          maxAge: 60 * 60 * 24,
        });
      }
      success = true;
      return res.status(201).json({ success, user });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = verifyOtp;
