// Controller for approving property. ONLY for ADMIN.

import joi from "joi";
import Property from "../../models/Property";
import User from "../../models/User";
import { sendEmail } from "../../services/email";

const schema = joi.object({
  id: joi.string().length(24).required().messages({
    "string.length": "{#label} must be 24 characters long!",
    "string.required": "{#label} cannot be empty!",
  }),
  property_type: joi
    .string()
    .required()
    .valid(
      "appartment",
      "bungalow",
      "independent-house",
      "villa",
      "gated-community",
      "plot"
    )
    .messages({
      "string.valid": "Invalid {#label}!",
      "string.required": "{#label} cannot be empty!",
    }),
  category: joi.string().valid("resale", "rental").required().messages({
    "string.valid": "{#label} can either be resale or rental",
    "string.required": "{#label} cannot be empty!",
  }),
  configuration: joi
    .string()
    .valid(
      "1RK",
      "1BHK",
      "2BHK",
      "3BHK",
      "3.5BHK",
      "4BHK",
      "4+BHK",
      "penthouse",
      "villa",
      "plot"
    )
    .required()
    .messages({
      "string.valid": "Invalid {#label}!",
      "string.required": "{#label} cannot be empty!",
    }),
  direction_facing: joi
    .string()
    .valid(
      "north",
      "south",
      "east",
      "west",
      "north-west",
      "north-east",
      "south-west",
      "south-east"
    )
    .required()
    .messages({
      "string.valid": "Invalid {#label}!",
      "string.required": "{#label} cannot be empty!",
    }),
  amenities: joi.array().min(1).required().messages({
    "array.min": "There must be minimum 1 {#label}!",
    "array.required": "{#label} cannot be empty!",
  }),
  furnishing_status: joi
    .string()
    .valid("full", "semi", "no")
    .required()
    .messages({
      "string.valid": "{#label} can be either full, semi, or no!",
      "string.required": "{#label} cannot be empty!",
    }),
  tenancy_status: joi
    .string()
    .valid("vaccant", "immediate", "unavailable")
    .required()
    .messages({
      "string.valid": "{#label} can be either full, semi, or no!",
      "string.required": "{#label} cannot be empty!",
    }),
  available_from: joi.number().required().messages({
    "number.required": "{#label} cannot be empty!",
  }),
  gated_security: joi.boolean().required().messages({
    "boolean.required": "{#label} cannot be empty!",
  }),
  parking: joi.string().valid("car", "bike", "both").required().messages({
    "string.valid": "Invalid {#label}!",
    "string.required": "{#label} cannot be empty!",
  }),
  non_veg_allowed: joi.boolean().required().messages({
    "boolean.required": "{#label} cannot be empty!",
  }),
  water_supply: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  age_of_building: joi.boolean().required().messages({
    "boolean.required": "{#label} cannot be empty!",
  }),
  carpet_area: joi.number().required().messages({
    "number.required": "{#label} cannot be empty!",
  }),
  tower_wing: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  pets: joi.boolean().required().messages({
    "boolean.required": "{#label} cannot be empty!",
  }),
  launch_date: joi.number().required().messages({
    "number.required": "{#label} cannot be empty!",
  }),
  floor_plan: joi
    .object()
    .keys({
      total_area: joi.number().required().messages({
        "number.required": "{#label} cannot be empty!",
      }),
      floor: joi.number().required().messages({
        "number.required": "{#label} cannot be empty!",
      }),
      rooms: joi.number().required().messages({
        "number.required": "{#label} cannot be empty!",
      }),
      bathrooms: joi.number().required().messages({
        "number.required": "{#label} cannot be empty!",
      }),
      balcony: joi.number().required().messages({
        "number.required": "{#label} cannot be empty!",
      }),
    })
    .required()
    .messages({ "object.required": "{#label} cannot be empty!" }),
});

const approveProperty = async (req, res) => {
  if (req.method === "PUT") {
    let success = false;
    try {
      const {
        id,
        property_type,
        category,
        configuration,
        direction_facing,
        amenities,
        furnishing_status,
        tenancy_status,
        available_from,
        gated_security,
        parking,
        non_veg_allowed,
        water_supply,
        age_of_building,
        carpet_area,
        tower_wing,
        pets,
        launch_date,
        floor_plan,
      } = req.body;

      // Validating req.body
      const { error } = schema.validate(req.body);
      if (error) {
        success = false;
        return res
          .status(422)
          .json({ success, error: error.details[0].message });
      }

      // Checking if a property exists with the id received
      let property = await Property.findById(id);
      if (!property) {
        success = false;
        return res
          .status(404)
          .json({ success, error: "Property does not exist!" });
      }

      // Updating the property and its status to APPROVED
      property = await Property.findByIdAndUpdate(
        id,
        {
          property_type,
          category,
          configuration,
          amenities,
          details: {
            direction_facing,
            furnishing_status,
            tenancy_status,
            available_from,
            gated_security,
            parking,
            non_veg_allowed,
            water_supply,
            age_of_building,
            carpet_area,
            tower_wing,
            pets,
            launch_date,
          },
          floor_plan_details: floor_plan,
          status: "approved",
        },
        { new: true }
      );

      const user = await User.findById(property.owner.toString());

      // Sending mail to the property's owner that the property has been approved
      sendEmail({
        subject: `UPDATE on your property`,
        text: `Your property has been approved!`,
        email: user.email,
      });

      const properties = await Property.find();

      success = true;
      return res.status(200).json({ success, properties });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = approveProperty;
