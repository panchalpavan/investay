import joi from "joi";

const User = require("../../models/User");

const schema = joi.object({
  dp: joi.string().allow(null).required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
});

const addDp = async (req, res) => {
  if (req.method === "PUT") {
    let success = false;
    try {
      const userId = req.user.id;
      const { dp } = req.body;

      // Validating req.body
      const { error } = schema.validate(req.body);
      if (error) {
        success = false;
        return res
          .status(422)
          .json({ success, error: error.details[0].message });
      }

      let user = await User.findById(userId);
      if (dp === user.dp) {
        success = true;
        return res.status(200).json({ success, user });
      }

      // Updating the user's dp
      user = await User.findByIdAndUpdate(userId, { dp }, { new: true });
      success = true;
      return res.status(200).json({ success, user });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = addDp;
