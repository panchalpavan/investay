const bcrypt = require("bcryptjs");
const connectToMongo = require("../../db");

const Token = require("../../models/Token");
const User = require("../../models/User");
const { sendEmail } = require("../../services/email");

// Controller for sending email to the logged-in user's email for resetting password
const generatePasswordResetEmail = async (req, res) => {
  if (req.method === "POST") {
    let success = false;
    try {
      const userId = req.user.id;
      const user = await User.findById(userId);

      let token = await Token.findOne({ email: user.email });

      // Checking if a token exists for the same email
      if (token) {
        success = false;
        return res.status(401).json({
          success,
          error:
            "Wait for 3 minutes before requesting for the reset password mail again!",
        });
      }

      const salt = await bcrypt.genSalt(10);

      // Generating the unique code
      let code = await bcrypt.hash(user.email, salt);
      code = code.replace(/\//g, "");

      // Creating the token
      token = await Token.create({
        email: user.email,
        code,
      });

      // Sending email, containing the link for resetting the password to the user's email
      sendEmail({
        subject: "Reset Password Email!",
        html: `<a href="https://localhost:3000/reset-password/${token.code}">Reset Password</a>`,
        email: user.email,
      });

      success = true;
      return res.status(200).json({ success });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(403).json({ error: "Method not allowed!" });
  }
};

module.exports = generatePasswordResetEmail;
