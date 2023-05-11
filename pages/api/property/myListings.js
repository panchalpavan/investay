import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

const myListings = require("../../../controllers/property/myListings");

const handler = myListings;

export default fetchUser(grantAccess("readOwn","listings",handler));