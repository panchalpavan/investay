const Feedback = require("../../models/Feedback");

const getAllFeedbacks = async (req, res) => {
  if (req.method === "GET") {
    let success = false;
    try {
      // Fetching all the feedbacks
      const feedbacks = await Feedback.find().populate(
        "user",
        "_id first_name middle_name last_name email mobile"
      );

      success = true;
      return res.status(200).json({ success, feedbacks });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = getAllFeedbacks;
