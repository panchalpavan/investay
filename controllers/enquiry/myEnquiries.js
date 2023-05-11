// Controller for fetching the user's enquiries to others' property

const Enquiry = require("../../models/Enquiry");
const Property = require("../../models/Property");
const User = require("../../models/User");

const myEnquiries = async (req, res) => {
  if (req.method === "GET") {
    let success = false;
    try {
      const userId = req.user.id;
      const user = await User.findById(userId);
      const enquiries = await Enquiry.find({ email: user.email })
        .populate("property");
      success = true;
      return res.status(200).json({ success, enquiries });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = myEnquiries;
