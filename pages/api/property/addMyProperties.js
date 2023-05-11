import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";
import Location from "../../../models/Location";
import Property from "../../../models/Property";
import { properties } from "../../../utils";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const userId = req.user.id;
    for (let property of properties) {
      await Location.create({
        name: property.propertyLocation,
      });
      await Property.create({ ...property, postedBy: userId, owner: userId, status: "published" });
    }
    return res.status(200).json({ success: true });
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

export default fetchUser(grantAccess("createOwn", "property", handler));
