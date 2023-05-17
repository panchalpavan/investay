import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

const approveProperty = require("../../../controllers/property/approveProperty");

const handler = approveProperty;

export default fetchUser(grantAccess("updateAny", "property", handler));
