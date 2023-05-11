// Controller for fetching all visits. ONLY for ADMIN.

const Property = require("../../models/Property");

const allProperties = async (req, res) => {
  if (req.method === "GET") {
    let success = false;
    try {
      const properties = await Property.find().sort("createdAt");
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

module.exports = allProperties;
