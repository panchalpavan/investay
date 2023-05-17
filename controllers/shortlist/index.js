// Controller to view all your shortlisted properties

const Shortlist = require("../../models/Shortlist");

const getMyShortlists = async (req, res) => {
  if (req.method === "GET") {
    let success = false;
    try {
      const userId = req.user.id;

      // Checking if a shortlist already exists associated to the user,
      // if not, creating one for the user
      let shortlist = await Shortlist.findOne({ user: userId }).populate("properties");
      if (!shortlist) {
        shortlist = await Shortlist.create({
          properties: [],
          user: userId,
        });
      }

      success = true;
      return res.status(200).json({ success, shortlist });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = getMyShortlists;
