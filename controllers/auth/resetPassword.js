const bcrypt = require("bcryptjs");
const joi = require("joi");
const { joiPasswordExtendCore } = require("joi-password");
const connectToMongo = require("../../db");
const joiPassword = joi.extend(joiPasswordExtendCore);

const Token = require("../../models/Token");
const User = require("../../models/User");

const schema = joi.object({
  email: joi.string().email().required(),
  password: joiPassword
    .string()
    .min(8)
    .minOfUppercase(1)
    .minOfLowercase(1)
    .minOfSpecialCharacters(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .required()
    .messages({
      "string.min": "{#label} should contain at least {#min} characters!",
      "string.minOfUppercase":
        "{#label} should contain at least {#min} uppercase character!",
      "string.minOfSpecialCharacters":
        "{#label} should contain at least {#min} special character!",
      "string.minOfLowercase":
        "{#label} should contain at least {#min} lowercase character!",
      "string.minOfNumeric":
        "{#label} should contain at least {#min} numeric character!",
      "string.noWhiteSpaces": "{#label} should not contain white spaces!",
      "string.required": "{#label} cannot be empty!",
    }),
  confirmPassword: joiPassword
    .string()
    .min(8)
    .minOfUppercase(1)
    .minOfLowercase(1)
    .minOfSpecialCharacters(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .required()
    .messages({
      "string.min": "{#label} should contain at least {#min} characters!",
      "string.minOfUppercase":
        "{#label} should contain at least {#min} uppercase character!",
      "string.minOfSpecialCharacters":
        "{#label} should contain at least {#min} special character!",
      "string.minOfLowercase":
        "{#label} should contain at least {#min} lowercase character!",
      "string.minOfNumeric":
        "{#label} should contain at least {#min} numeric character!",
      "string.noWhiteSpaces": "{#label} should not contain white spaces!",
      "string.required": "{#label} cannot be empty!",
    }),
});

// Controller for resetting the password of the logged-in user
// after clicking the link received via email
const resetPassword = async (req, res) => {
  if (req.method === "PUT") {
    let success = false;
    try {
      
      
      const { password, confirmPassword, email } = req.body;

      // Validating the data obtained from req.body
      const { error } = schema.validate(req.body);
      if (error) {
        success = false;
        return res
          .status(422)
          .json({ success, error: error.details[0].message });
      }
      
      const token = await Token.findOne({ email });
      // Checking if the token for the email provides still exists
      if (!token) {
        success = false;
        return res
        .status(401)
        .json({ success, error: "Invalid token!" });
      }

      let user = await User.findOne({email});
      if (!user) {
        success = false;
        return res
        .status(401)
        .json({ success, error: "User does not exist!" });
      }

      // Checking whether the password and confirm_passwords match or not
      if (password !== confirmPassword) {
        success = false;
        return res
          .status(403)
          .json({ success, error: "Passwords not matching!" });
      }

      // Checking if the new password is same as the old password
      const samePassword = await bcrypt.compare(password, user.password);
      if (samePassword) {
        success = false;
        return res.status(403).json({
          success,
          error: "New password cannot be the same as the old one!",
        });
      }

      const salt = await bcrypt.genSalt(10);

      // Hashing the password
      const securedPassword = await bcrypt.hash(password, salt);

      // Updating the password
      user = await User.findByIdAndUpdate(
        user._id.toString(),
        { password: securedPassword },
        { new: true }
      ).select("-password");

      // Deleting the token associated to the user's email
      await Token.findByIdAndDelete(token._id.toString(), { new: true });
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

module.exports = resetPassword;
