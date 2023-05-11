// Controller for adding review of a property. Login required.

import joi from "joi";
import Review from "../../models/Review";
const connectToMongo = require("../../db");

const Property = require("../../models/Property");

const schema = joi.object({
  name: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  role: joi.string().valid("buyer", "seller", "channel-partner").required().messages({
    "string.valid": "Invalid {#label}!",
    "string.required": "{#label} cannot be empty!",
  }),
  likes: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  dislikes: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  overall: joi.number().min(1).max(5).required().messages({
    "number.min": "{#label} must be minimum 1!",
    "number.max": "{#label} must be maximum 5!",
    "number.required": "{#label} cannot be empty!",
  }),
  amenitiesAndFacilities: joi.number().min(1).max(5).required().messages({
    "number.min": "{#label} must be minimum 1!",
    "number.max": "{#label} must be maximum 5!",
    "number.required": "{#label} cannot be empty!",
  }),
  constructionQuality: joi.number().min(1).max(5).required().messages({
    "number.min": "{#label} must be minimum 1!",
    "number.max": "{#label} must be maximum 5!",
    "number.required": "{#label} cannot be empty!",
  }),
  greenSpaces: joi.number().min(1).max(5).required().messages({
    "number.min": "{#label} must be minimum 1!",
    "number.max": "{#label} must be maximum 5!",
    "number.required": "{#label} cannot be empty!",
  }),
  connectivity: joi.number().min(1).max(5).required().messages({
    "number.min": "{#label} must be minimum 1!",
    "number.max": "{#label} must be maximum 5!",
    "number.required": "{#label} cannot be empty!",
  }),
  rwa: joi.number().min(1).max(5).required().messages({
    "number.min": "{#label} must be minimum 1!",
    "number.max": "{#label} must be maximum 5!",
    "number.required": "{#label} cannot be empty!",
  }),
});

const addReview = async (req, res) => {
  if (req.method === "POST") {
    // Connecting to mongodb
    await connectToMongo();
    
    let success = false;
    try {
      const propertyId = req.query.id;

      // Checking if a property exist with the id received
      const property = await Property.findById(propertyId);
      if (!property) {
        success = false;
        return res
          .status(404)
          .json({ success, error: "Property does not exist!" });
      }

      const {
        name,
        role,
        likes,
        dislikes,
        overall,
        amenitiesAndFacilities,
        constructionQuality,
        greenSpaces,
        connectivity,
        rwa,
      } = req.body;

      // Validating req.body
      const { error } = schema.validate(req.body);
      if (error) {
        success = false;
        return res
          .status(422)
          .json({ success, error: error.details[0].message });
      }

      const avg = (overall + amenitiesAndFacilities + constructionQuality + greenSpaces + connectivity + rwa)/6;

      // Creating a new Review
      await Review.create({
        name,
        role,
        likes,
        dislikes,
        overall,
        amenitiesAndFacilities,
        constructionQuality,
        greenSpaces,
        connectivity,
        rwa,
        avg,
        property: propertyId,
      });

      const reviews = await Review.find({ property: propertyId, avg: {$gt: 4} });

      success = true;
      return res.status(201).json({ success, reviews });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = addReview;
