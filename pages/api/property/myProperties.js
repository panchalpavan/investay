import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

const myProperties = require("../../../controllers/property/myProperties");

const handler = myProperties;

export default fetchUser(grantAccess("readAny", "property", handler));
