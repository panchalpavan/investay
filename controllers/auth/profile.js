const connectToMongo = require("../../db");
const Property = require("../../models/Property");

const User = require("../../models/User");

const profile = async (req, res) => {
  // Controller for getting the logged-in user details
  if (req.method === "GET") {
    let success = false;
    try {
      const userId = req.user.id;

      // Fetching the user details from mongodb
      const user = await User.findById(userId).select("-password");
      const properties = await Property.find({ owner: userId });

      success = true;
      return res.status(200).json({ success, user, properties });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method Not allowed!" });
  }
};

module.exports = profile;
