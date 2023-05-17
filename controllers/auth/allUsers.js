// Controller for fetching all visits. ONLY for ADMIN.

const User = require("../../models/User");

const allUsers = async (req, res) => {
  if (req.method === "GET") {
    let success = false;
    try {
      const users = await User.find({role:"user"}).sort("-createdAt");

      success = true;
      return res.status(200).json({ success, users });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = allUsers;
