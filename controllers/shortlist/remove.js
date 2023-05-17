// Controller for removing properties from the shortlist

import joi from "joi";
import Property from "../../models/Property";

const Shortlist = require("../../models/Shortlist");

const schema = joi.object({
  id: joi.string().length(24).required().messages({
    "string.length": "Invalid {#label}!",
    "string.required": "{#label} cannot be empty!",
  }),
});

const removeFromShortlist = async (req, res) => {
  if (req.method === "PUT") {
    let success = false;
    try {
      const userId = req.user.id;
      const { id } = req.body;

      // Validating req.body
      const { error } = schema.validate(req.body);
      if (error) {
        success = false;
        return res
          .status(422)
          .json({ success, error: error.details[0].message });
      }

      // Checking if a shortlist already exists associated to the user,
      // if not, creating one for the user
      let shortlist = await Shortlist.findOne({ user: userId });
      if (!shortlist) {
        shortlist = await Shortlist.create({
          properties: [],
          user: userId,
        });
      }

      // Checking if the property is not shortlisted
      if (!shortlist.properties.includes(id)) {
        success = false;
        return res.status(403).json({
          success,
          error: "This property is not shortlisted by you!",
        });
      }

      const property = await Property.findById(id);
      if (!property) {
        success = false;
        return res
          .status(404)
          .json({ success, error: "Property does not exist!" });
      }

      // Removing the property from shortlist
      shortlist = await Shortlist.findByIdAndUpdate(
        shortlist._id.toString(),
        { $pull: { properties: id } },
        { new: true }
      ).populate("properties");

      success = true;
      res.status(200).json({ success, shortlist });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = removeFromShortlist;
