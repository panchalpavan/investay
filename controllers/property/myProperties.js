// Controller for fetching the logged-in user's properties

const Property = require("../../models/Property");

const myProperties = async (req, res) => {
  if (req.method === "GET") {
    let success = false;
    try {
      const userId = req.user.id;

      // Fetching the logged-in user's properties
      const properties = await Property.find({ owner: userId, postedBy: {$ne: userId} });
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

module.exports = myProperties;
