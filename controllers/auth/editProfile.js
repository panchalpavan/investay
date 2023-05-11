const joi = require("joi");

const User = require("../../models/User");

const schema = joi.object({
  prefix: joi
    .string()
    .valid("", "mr", "mrs", "miss", "dr.", "prof", "master")
    .required()
    .messages({
      "string.valid": "Invalid {#label}!",
      "string.required": "{#label} cannot be empty!",
    }),
  firstName: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  lastName: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  email: joi.string().email().required().messages({
    "string.email": "Enter a valid email!",
    "string.required": "{#label} cannot be empty!",
  }),
  countryCode: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  mobile: joi.number().required().messages({
    "number.required": "{#label} cannot be empty!",
  }),
  dob: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  age: joi.number().required().messages({
    "number.required": "{#label} cannot be empty!",
  }),
  nationality: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  address: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  city: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  state: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  country: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  pincode: joi.number().required().messages({
    "number.required": "{#label} cannot be empty!",
  }),
});

const editProfile = async (req, res) => {
  // Controller for editing the logged-in user details
  if (req.method === "PUT") {
    let success = false;
    try {
      const userId = req.user.id;
      const {
        prefix,
        firstName,
        middleName,
        lastName,
        age,
        dob,
        email,
        alternateEmail,
        countryCode,
        mobile,
        alternateMobile,
        companyName,
        designation,
        gender,
        maritalStatus,
        nationality,
        address,
        city,
        state,
        pincode,
        country,
        nameInPan,
        nameInAadhar,
        pan,
        aadhar,
        nriIdName,
        nriIdDetails,
        nameinBank,
        bankName,
        branchName,
        accountNumber,
        ifsc,
        accountType,
      } = req.body;

      // Validating req.body
      const { error } = schema.validate({
        prefix,
        firstName,
        lastName,
        email,
        countryCode,
        mobile,
        dob,
        age,
        nationality,
        address,
        city,
        state,
        country,
        pincode,
      });
      if (error) {
        success = false;
        return res
          .status(422)
          .json({ success, error: error.details[0].message });
      }

      let user ;
      if (alternateEmail) {
         user = await User.findOne({
          $or: [{ email: alternateEmail }, { alternateEmail: alternateEmail }],
        });
        if (user) {
          if (user._id.toString() === userId) {
            if (user.email === alternateEmail) {
              success = false;
              return res.status(403).json({
                success,
                error: "This email is already linked to your account!",
              });
            }
          } else {
            success = false;
            return res.status(403).json({
              success,
              error: "This email already linked to another account!",
            });
          }
        }
      }
      if (alternateMobile.length>5) {
        user = await User.findOne({
          $or: [
            {
              $and: [
                {
                  mobile: parseInt(
                    alternateMobile.substring(alternateMobile.length - 10)
                  ),
                },
                {
                  countryCode: alternateMobile.substring(
                    0,
                    alternateMobile.length - 10
                  ),
                },
              ],
            },
            { alternateMobile },
          ],
        });
        if (user) {
          if (user._id.toString() === userId) {
            if (
              user.mobile ===
              parseInt(alternateMobile.substring(alternateMobile.length - 10))
            ) {
              success = false;
              return res.status(403).json({
                success,
                error: "This mobile is already linked to your account!",
              });
            }
          } else {
            success = false;
            return res.status(403).json({
              success,
              error: "This mobile already linked to another account!",
            });
          }
        }
      }
        user = await User.findOne({ email });

      if (user.role === "user") {
        user = await User.findOne({ pan });
        if (user) {
          if (user._id.toString() !== userId) {
            success = false;
            return res.status(403).json({
              success,
              error: "This PAN is linked to another account!",
            });
          }
        }
        user = await User.findOne({ aadhar });
        if (user) {
          if (user._id.toString() !== userId) {
            success = false;
            return res.status(403).json({
              success,
              error: "This AADHAR is linked to another account!",
            });
          }
        }

        user = await User.findOne({ accountNumber });
        if (user) {
          if (user._id.toString() !== userId) {
            success = false;
            return res.status(403).json({
              success,
              error: "This Bank Account Number is linked to another account!",
            });
          }
        }
        if (nameInPan.toLowerCase() !== nameInAadhar.toLowerCase()) {
          success = false;
          return res.status(403).json({
            success,
            error: "Name in AADHAR must be same as the name in PAN!",
          });
        }

        if (nameInPan.toLowerCase() !== nameinBank.toLowerCase()) {
          success = false;
          return res.status(403).json({
            success,
            error: "Name in bank must be same as name in AADHAR and PAN!",
          });
        }
      }

      user = await User.findByIdAndUpdate(
        userId,
        { ...req.body },
        { new: true }
      );

      success = true;
      return res.status(200).json({ success, user });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method Not allowed!" });
  }
};

module.exports = editProfile;
