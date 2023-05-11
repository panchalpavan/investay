// Controller for fetching all visits. ONLY for ADMIN.

const Enquiry = require("../../models/Enquiry");

const allEnquiries = async (req, res) => {
  if (req.method === "GET") {
    let success = false;
    try {
      const enquiries = await Enquiry.find().populate('property').sort("-createdAt");

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

module.exports = allEnquiries;
