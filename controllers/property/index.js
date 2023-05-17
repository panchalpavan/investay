// Controller for getting property details, fetching properties of a particular category.

const connectToMongo = require("../../db");
const Location = require("../../models/Location");
const Property = require("../../models/Property");

const getProperties = async (req, res) => {
  if (req.method === "GET") {
    // Connection to mongodb
    await connectToMongo();

    let success = false;
    try {
      const pid = req.query.id;
      const id = req.query.property;
      const category = req.query.category;

      if(id) {
        const property = await Property.findById(id);
        if (!property) {
          success = false;
          return res
            .status(404)
            .json({ success, error: "Property does not exist!" });
        }
        const properties = await Property.find({category: property.category, configuration: property.configuration, _id: {$ne: id}});
        const locations = await Location.find(); 
        success = true;
        return res.status(200).json({success, properties, locations});
      }

      // Checking if the user wants the details of a particular property
      if (pid) {
        const property = await Property.findById(pid);
        if (!property) {
          success = false;
          return res
            .status(404)
            .json({ success, error: "Property does not exist!" });
        }
        success = true;
        return res.status(200).json({ success, property });
      }

      // Checking if the user wants the details of properties with valid categories
      if (category && ["resale", "rental"].indexOf(category) !== -1) {
        let properties = await Property.find({ category });
        const locations = await Location.find(); 
        success = true;
        return res.status(200).json({ success, properties, locations });
      }

      let properties = await Property.find();
      const locations = await Location.find();
      success = true;
      return res.status(200).json({ success, properties, locations });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = getProperties;
