// Controller for getting property details, fetching properties of a particular category.

const connectToMongo = require("../../db");
const Property = require("../../models/Property");

const myListings = async (req, res) => {
  if (req.method === "GET") {

    let success = false;
    try {
      const userId = req.user.id;

      let properties = await Property.find({postedBy: userId, owner: userId});
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

module.exports = myListings;
