// Controller to fetch all the reviews associated to a property

const connectToMongo = require("../../db");
const Property = require("../../models/Property");
const Review = require("../../models/Review");

const getReviews = async (req, res) => {
  if (req.method === "GET") {
    // Connecting to mongodb
    await connectToMongo();

    let success = false;
    try {
      const propertyId = req.query.id;

      // Checking if a property exists with the id received
      const property = await Property.findById(propertyId);
      if (!property) {
        success = false;
        return res
          .status(404)
          .json({ success, error: "Property does not exist!" });
      }

      // Fetching all the reviews associated to the property
      const reviews = await Review.find({ property: propertyId, avg: {$gte: 4} });
      success = true;
      return res.status(200).json({ success, reviews });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = getReviews;
