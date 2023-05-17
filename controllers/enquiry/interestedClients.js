// Controller for fetching the others visits to user's property

const Property = require("../../models/Property");
const Enquiry = require("../../models/Enquiry");

const interestedClients = async (req, res) => {
  if (req.method === "GET") {
    let success = false;
    try {
      const userId = req.user.id;
      const properties = await Property.find({owner: userId});
      let interestedClients = [];
      for (let i = 0; i < properties.length; i++) {
        const propertyId = properties[i]._id.toString();
        const enquiries = await Enquiry.find({property: propertyId}).populate("property");
        if(enquiries.length > 0) {
          interestedClients.push(...enquiries);
        }
      }

      success = true;
      return res.status(200).json({ success, interestedClients });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = interestedClients;
