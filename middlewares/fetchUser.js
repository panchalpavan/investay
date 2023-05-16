const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
import { getCookie } from "cookies-next";
import connectToMongo from "../db";
import User from "../models/User";

// This is a middleware that checks if the user is logged in or not
// Used in protected api routes
const fetchUser = (handler) => {
  let success;
  return async (req, res) => {
    // Fetching token value from cookies or headers
    const token =
      getCookie("authorization", { req, res }) || req.headers.authorization;
    if (!token) {
      success = false;
      return res.status(403).json({
        success,
        error: "You need to be logged in to access this route!",
      });
    }
    try {
      // Fetching the jwt token value from the token
      const userToken = token.substring(7, token.length);

      // Verifying the jwt token
      const data = jwt.verify(userToken, secret);

      // Connection to mongodb
      await connectToMongo();

      // Checking if a user exists with the id received from the jwt
      const user = await User.findById(data.user.id);
      if (!user) {
        success = false;
        return res.status(404).json({ success, error: "User does not exist!" });
      }
      req.user = data.user;
      return handler(req, res);
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  };
};

export default fetchUser;
