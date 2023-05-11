import joi from "joi";
import Feedback from "../../models/Feedback";
import User from "../../models/User";
import { sendEmail } from "../../services/email";

const schema = joi.object({
  process_and_documentation: joi.number().min(1).max(5).required().messages({
    "number.min": "{#label} must be minimum 1!",
    "number.max": "{#label} must be maximum 5!",
    "number.required": "{#label} cannot be empty!",
  }),
  courteousness: joi.number().min(1).max(5).required().messages({
    "number.min": "{#label} must be minimum 1!",
    "number.max": "{#label} must be maximum 5!",
    "number.required": "{#label} cannot be empty!",
  }),
  knowledgable: joi.number().min(1).max(5).required().messages({
    "number.min": "{#label} must be minimum 1!",
    "number.max": "{#label} must be maximum 5!",
    "number.required": "{#label} cannot be empty!",
  }),
  overall: joi.number().min(1).max(5).required().messages({
    "number.min": "{#label} must be minimum 1!",
    "number.max": "{#label} must be maximum 5!",
    "number.required": "{#label} cannot be empty!",
  }),
  comment: joi.string().optional(),
  recommendation: joi.number().min(1).max(10).required().messages({
    "number.min": "{#label} must be minimum 1!",
    "number.max": "{#label} must be maximum 10!",
    "number.required": "{#label} cannot be empty!",
  }),
});

const addFeedback = async (req, res) => {
  if (req.method === "POST") {
    let success = false;
    try {
      const userId = req.user.id;
      const {
        process_and_documentation,
        courteousness,
        knowledgable,
        overall,
        comment,
        recommendation,
      } = req.body;

      // Validating req.body
      const { error } = schema.validate(req.body);
      if (error) {
        success = false;
        return res
          .status(422)
          .json({ success, error: error.details[0].message });
      }

      // Checking if the user has already submitted the feedback
      let feedback = await Feedback.findOne({ user: userId });
      if (feedback) {
        success = false;
        return res
          .status(403)
          .json({ success, error: "You already submited the feedback!" });
      }

      // Creating new feedback if the user have not submitted the feedback
      await Feedback.create({
        process_and_documentation,
        courteousness,
        knowledgable,
        overall,
        comment,
        recommendation,
        user: userId,
      });

      const user = await User.findById(userId).select("user_id");
      const admin = await User.findOne({ role: "admin" }).select("email");

      // Sending mail to admin that a feedback has been submitted
      sendEmail({
        subject: `Investay Feedback`,
        text: `${user.user_id} has submited the feedback for Investay.`,
        email: admin.email,
      });

      success = true;
      return res.status(201).json({ success });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = addFeedback;
