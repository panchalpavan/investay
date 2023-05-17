import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";
const interestedClients = require("../../../controllers/enquiry/interestedClients");

const handler = interestedClients;

export default fetchUser(grantAccess("readOwn", "enquiries", handler));
