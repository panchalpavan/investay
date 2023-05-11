const joi = require("joi");
const bcrypt = require("bcryptjs");
const connectToMongo = require("../../db");

const Token = require("../../models/Token");
const User = require("../../models/User");
const { sendEmail } = require("../../services/email");

const schema = joi.object({
  email: joi.string().email().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
});

// Controller for sending email to the requested email if a user exists with that email
// For un-authenticated users
const forgotPassword = async (req, res) => {
  if (req.method === "POST") {
    // Connection to mongodb
    connectToMongo();

    let success = false;
    try {
      const { email } = req.body;

      // Validating req.body
      const { error } = schema.validate(req.body);
      if (error) {
        success = false;
        return res
          .status(422)
          .json({ success, error: error.details[0].message });
      }

      // Checking whether a user exists with the email provided or not
      const user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res.status(404).json({ success, error: "User does not exist!" });
      }

      let token = await Token.findOne({ email });

      // Checking if a token already exists for the email provided
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

module.exports = forgotPassword;
