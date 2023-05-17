import joi from "joi";
import connectToMongo from "../../db";
import Download from "../../models/Download";
import Token from "../../models/Token";
import { sendEmail } from "../../services/email";

const schema = joi.object({
  otp: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  name: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  email: joi.string().email().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  mobile: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  action: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  propertyId: joi.string().length(24).required().messages({
    "string.length": "Invalid {#label}!",
    "string.required": "{#label} cannot be empty!",
  }),
});

const adminEmail = "enquiry@investayrealty.com";

const downloadFile = async (req, res) => {
  if (req.method === "POST") {
    await connectToMongo();
    let success = false;
    try {
      const id = req.query.id;
      const { otp, name, email, mobile, action, propertyId } = req.body;

      // Validating req.body
      const { error } = schema.validate(req.body);
      if (error) {
        success = false;
        return res
          .status(422)
          .json({ success, error: error.details[0].message });
      }

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

      await Token.findByIdAndDelete(id, { new: true });

      await Download.create({
        name,
        email,
        mobile,
        action,
        property: propertyId,
      });

      // Sending mail to the admin that a enquiry has been created
      await sendEmail({
        subject: `ENQUIRY SUBMITTED`,
        html: `
        <div>
          <p>Hi,</p>
          <p style="margin: 1rem 0;">A new enquiry has been submitted in the Investay website with the following details</p>

          <div style="border: 1px solid black; width: 400px; padding: 0;">
              <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Full Name</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%; text-transform: capitalize;">${name}</p>
              </div>
              <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Mobile</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%;">${mobile}</p>
              </div>
              <div style="display: flex; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Email</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%;">${email}</p>
              </div>
          </div>

          <p style="text-transform: capitalize; margin: 1.2rem 0">Action: ${action} download.</p>
          <p style="margin: 0">Regards,</p>
          <p style="margin-top: 0.3rem">Team Investay</p>
        </div>`,
        email: adminEmail,
      });

      success = true;
      return res.status(200).json({ success });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = downloadFile;
