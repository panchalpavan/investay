const { setCookie } = require("cookies-next");
const joi = require("joi");
const connectToMongo = require("../../../db");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const bcrypt = require("bcryptjs");
const User = require("../../../models/User");

const schema = joi.object({
  prefix: joi.string().optional().valid("", "mr", "mrs", "miss"),
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
  userId: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  countryCode: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  mobile: joi.number().max(9999999999).required().messages({
    "number.required": "{#label} cannot be empty!",
  }),
  age: joi.number().min(18).required().messages({
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
  password: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  designation: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  companyName: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  gender: joi.string().required().valid("male", "female", "others"),
  maritalStatus: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
});

const register = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(403).json({ error: "Method not allowed!" });
  }

  // Connection to mongodb
  await connectToMongo();

  const { error } = schema.validate({
    ...req.body,
  });
  if (error) {
    success = false;
    return res.status(422).json({ success, error: error.details[0].message });
  }
  let { email, mobile, countryCode, pincode,password ,userId} = req.body;

  // Checking if admin exists with the same email
  let user = await User.findOne({ email });
  if (user) {
    if (user) {
      success = false;
      return res.status(403).json({
        success,
        error: "This email is associated to another account!",
      });
    }
  }
  // Checking if admin exists with the username
   user = await User.findOne({ userId });
  if (user) {
    if (user) {
      success = false;
      return res.status(403).json({
        success,
        error: "This username is associated to another account!",
      });
    }
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
  if (!/((^[1-9][0-9]{5}$)|(^[0-9]{5}$)|(^\d{5}-\d{4}$))/.test(pincode)) {
    success = false;

    return res.status(403).json({
      success,
      error: "Please enter a valid pincode!",
    });
  }
  let bodyData = {
    ...req.body,
    role: "admin",
  };

  try {
    
    const salt = await bcrypt.genSalt(12);
    bodyData.password = await bcrypt.hash(password, salt);

    user = await User.create(bodyData);
    
    const data = {
      user: {
        id: user.id,
        role: user.role,
      },
    };
    // Generating jwt token
    const jwtToken = jwt.sign(data, secret);

    // setting the token in the cookies
    setCookie("authorization", `Bearer ${jwtToken}`, {
      req,
      res,
      maxAge: 60 * 60 * 24,
    });

    success = true;
    return res.status(201).json({ success, user });
  } catch (error) {
    success = false;
    return res.status(500).json({ success, error: error });
  }
};

module.exports = register;
