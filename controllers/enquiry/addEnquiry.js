// Controller to create a new visit to a property

import joi from "joi";
import connectToMongo from "../../db";

import Property from "../../models/Property";
import User from "../../models/User";
import Enquiry from "../../models/Enquiry";
import { sendEmail } from "../../services/email";
import Token from "../../models/Token";

const schema = joi.object({
  name: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  email: joi.string().email().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  mobile: joi
    .string()
    .regex(/^[0-9]{10,}$/)
    .required()
    .messages({
      "string.required": "{#label} cannot be empty!",
    }),
  countryCode: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  role: joi
    .string()
    .valid("seller", "buyer", "channel-partner")
    .required()
    .messages({
      "string.valid": "Invalid {#label}!",
      "string.required": "{#label} cannot be empty!",
    }),
  channelPartnerName: joi.string().optional().allow(null),
  serviceNeeded: joi.string().valid("resale", "rental").required().messages({
    "string.valid": "Invalid {#label}!",
    "string.required": "{#label} cannot be empty!",
  }),
  source: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  query: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  otp: joi.number().max(9999).required().messages({
    "number.max": "Invalid {#label}!",
    "number.required": "{#label} cannot be empty!",
  }),
});

const adminEmail = "enquiry@investayrealty.com";

const addEnquiry = async (req, res) => {
  if (req.method === "POST") {
    // Conneting to mongodb
    await connectToMongo();

    let success = false;
    try {
      const {
        name,
        email,
        countryCode,
        mobile,
        role,
        channelPartnerName,
        serviceNeeded,
        source,
        query,
        otp,
      } = req.body;

      // Validating req.body
      const { error } = schema.validate(req.body);
      if (error) {
        success = false;
        return res
          .status(422)
          .json({ success, error: error.details[0].message });
      }

      const propertyId = req.query.id;

      if (propertyId === "undefined") {
        const token = await Token.findOne({ email });
        if (!token) {
          success = false;
          return res.status(404).json({ success, error: "Token not found!" });
        }

        if (token.otp !== parseInt(otp)) {
          success = false;
          return res
            .status(403)
            .json({ success, error: "OTP entered is wrong!" });
        }
        if (token.otp !== parseInt(otp)) {
          success = false;
          return res
            .status(403)
            .json({ success, error: "OTP entered is wrong!" });
        }

        await Enquiry.create({
          name,
          email,
          mobile,
          role,
          channelPartnerName,
          serviceNeeded,
          source,
          query,
        });

        // Sending mail to the user
        await sendEmail({
          subject: `ENQUIRY SUBMITTED`,
          html: `<div>
          <p>Hi ${name},</p>
          <p style="margin: 1rem 0;">Thank you for submitting your inquiry. To assist you with your query, we have assigned a Relationship Manager exclusively for you who shall be in touch with you soon. We look forward to helping you with a memorable home buying/renting experience!</p>
          <p>Regards,</p>
          <p>Team Investay</p>
          </div>`,
          email: email,
        });

        // Sending mail to the admin that a enquiry has been created
        await sendEmail({
          subject: `ENQUIRY SUBMITTED`,
          html: `    <div>
          <p>Hi,</p>
          <p style="margin: 1rem 0;">A new enquiry has been submitted in the Investay website with the following details</p>
  
          <div style="border: 1px solid black; width: 400px; padding: 0;">
              <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Name</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%; text-transform: capitalize;">${name}</p>
              </div>
              <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Mobile</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%;">${countryCode} ${mobile}</p>
              </div>
              <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Email</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%;">${email}</p>
              </div>
              <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Submitted By</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%; text-transform: capitalize;">${role}</p>
              </div>
              <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Service needed</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%; text-transform: capitalize;">${serviceNeeded}</p>
              </div>
              <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Enquiry Source</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%; text-transform: capitalize;">${source}</p>
              </div>
              <div style="display: flex; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Enquiry Remarks</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%; text-transform: capitalize;">${query}</p>
              </div>
          </div>
      </div>`,
          email: adminEmail,
        });
      } else {
        const property = await Property.findById(propertyId);
        if (!property) {
          success = false;
          returnres
            .status(404)
            .json({ success, error: "Property does not exist!" });
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
            .json({ success, error: "OTP entered is wrong!" });
        }

        await Enquiry.create({
          name,
          email,
          mobile,
          role,
          channelPartnerName,
          serviceNeeded,
          source,
          query,
          property: propertyId,
        });

        await Token.findByIdAndDelete(token._id.toSTring(), {new: true});

        // Sending mail to the user
        await sendEmail({
          subject: `ENQUIRY SUBMITTED`,
          html: `<div>
          <p>Hi ${name},</p>
          <p style="margin: 1rem 0;">Thank you for submitting your inquiry. To assist you with your query, we have assigned a Relationship Manager exclusively for you who shall be in touch with you soon. We look forward to helping you with a memorable home buying/renting experience!</p>
          <p>Regards,</p>
          <p>Team Investay</p>
          </div>`,
          email: email,
        });

        // Sending mail to the admin that a enquiry has been created
        await sendEmail({
          subject: `ENQUIRY SUBMITTED`,
          html: `    <div>
          <p>Hi,</p>
          <p style="margin: 1rem 0;">A new enquiry has been submitted in the Investay website with the following details</p>
  
          <div style="border: 1px solid black; width: 400px; padding: 0;">
              <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Name</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%; text-transform: capitalize;">${name}</p>
              </div>
              <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Mobile</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%;">${countryCode} ${mobile}</p>
              </div>
              <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Email</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%;">${email}</p>
              </div>
              <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Submitted By</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%; text-transform: capitalize;">${role}</p>
              </div>
              <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Service needed</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%; text-transform: capitalize;">${serviceNeeded}</p>
              </div>
              <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Enquiry Source</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%; text-transform: capitalize;">${source}</p>
              </div>
              <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Enquiry Remarks</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%; text-transform: capitalize;">${query}</p>
              </div>
              <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Property Link</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%; text-transform: capitalize;">https://www.investayrealty.com/property/${property._id.toString()}</p>
              </div>
              <div style="display: flex; padding: 0;">
                  <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Property Name</p>
                  <p style="padding: 1px 0.5rem; margin: 0; width: 60%; text-transform: capitalize;">${
                    property.projectName
                  }</p>
              </div>
          </div>
      </div>`,
          email: adminEmail,
        });
      }

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

module.exports = addEnquiry;
