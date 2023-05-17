const Property = require("../../models/Property");


const updateProperty = async (req, res) => {
  // Controller for editing the logged-in user details
  if (req.method === "PUT") {
    let success = false;
    try {
      const { propertyId } = req.body;
        const property = await Property.findByIdAndUpdate(
        propertyId,
        { ...req.body },
        { new: true }
      );
      success = true;
      return res.status(200).json({ success, property });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else if (req.method === "DELETE") {
    let success = false;
    try {
      const { propertyId } = req.body;
      console.log(propertyId)

      // Checking if a property exists with the id received
      let property = await Property.findById(propertyId);
      if (!property) {
        success = false;
        return res
          .status(404)
          .json({ success, error: "Property does not exist!" });
      }

      // Updating the property and its status to APPROVED
      property = await Property.findByIdAndDelete(propertyId);

      const properties = await Property.find();

      success = true;
      return res.status(200).json({ success, properties });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method Not allowed!" });
  }
};

module.exports = updateProperty;
