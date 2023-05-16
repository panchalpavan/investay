const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.NEXT_PUBLIC_JWT_SECRET;
const connectToMongo = require("../../../db");
import { setCookie } from "cookies-next";

const User = require("../../../models/User");

// Controller for logging in an existing user
const login = async (req, res) => {
  if (req.method === "POST") {
    // Connection to mongodb
    await connectToMongo();
    let success = false;
    try {
      const { userId, password } = req.body;

      // Checking if user exists with the userId received from req.body
      let user = null;
      user = await User.findOne({ userId: userId });
      console.log('USER', user)
      if (!user) {
        success = false;
        return res.status(404).json({ success, error: "User not registered!" });
      }
      const samePassword = await bcrypt.compare(password, user.password);
      if (samePassword) {
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
      } else {
        success = false;
        return res.status(404).json({ success, error: "Invalid credentials" });
      }
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
