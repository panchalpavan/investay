const { setCookie } = require("cookies-next");
const joi = require("joi");
const connectToMongo = require("../../db");
const Token = require("../../models/Token");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const secret = process.env.NEXT_PUBLIC_JWT_SECRET;

const schema = joi.object({
  otp: joi.string().length(4).required().messages({
    "string.min": "{#label} must be 4 digits long!",
    "string.required": "{#label} cannot be empty!",
  }),
  prefix: joi.string().optional().valid("", "mr", "mrs", "miss", "dr.", "prof", "master"),
  firstName: joi.string().min(3).required().messages({
    "string.min": "{#label} must be minimum 3 characters long!",
    "string.required": "{#label} cannot be empty!",
  }),
  lastName: joi.string().min(3).required().messages({
    "string.min": "{#label} must be minimum 3 characters long!",
    "string.required": "{#label} cannot be empty!",
  }),
  email: joi.string().email().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  countryCode: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  mobile: joi.number().max(9999999999).required().messages({
    "number.required": "{#label} cannot be empty!",
  }),
  dob: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  nationality: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  city: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  address: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  state: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  pincode: joi.number().required().messages({
    "number.required": "{#label} cannot be empty!",
  }),
  country: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
});

const validateAge = (date) => {
  const res = new Date().getTime() - new Date(date).getTime();
  return moment.duration(res)._data.years;
};

const User = require("../../models/User");

// Controller for registering a new user
const register = async (req, res) => {
  if (req.method === "POST") {
    // Connection to mongodb
    await connectToMongo();

    let success = false;
    try {
      let {
        otp,
        prefix,
        firstName,
        lastName,
        email,
        countryCode,
        mobile,
        dob,
        nationality,
        city,
        state,
        address,
        pincode,
        country,
      } = req.body;

      // Validating req.body
      const { error } = schema.validate({
        otp,
        prefix,
        firstName,
        lastName,
        email,
        countryCode,
        mobile,
        dob,
        nationality,
        city,
        state,
        address,
        pincode,
        country,
      });
      if (error) {
        success = false;
        console.log(error, res)
        return res
          .status(422)
          .json({ success, error: error.details[0].message });
      }

      const token = await Token.findOne({ email });
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

      // Checking if user exists with the same email
      let user = await User.findOne({ email });
      if (user) {
        success = false;
        return res.status(403).json({
          success,
          error: "This email is associated to another account!",
        });
      }

      // Checking if user exists with the same mobile number
      user = await User.findOne({ mobile, countryCode });
      if (user) {
        success = false;
        return res.status(403).json({
          success,
          error: "This mobile number is associated to another account!",
        });
      }

      const userId = email.substring(0, email.lastIndexOf("@"));
      const age = validateAge(new Date(dob).getTime());

      user = await User.create({
        prefix,
        firstName,
        lastName,
        email,
        countryCode,
        mobile,
        dob,
        nationality,
        city,
        state,
        address,
        pincode,
        country,
        userId,
        age,
      });

      await Token.findByIdAndDelete(token._id.toString(), { new: true });

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
    return res.status(403).json({ error: "Method not allowed!" });
  }
};

module.exports = register;
