import addEnquiry from "../../../controllers/enquiry/addEnquiry";
import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

const handler = addEnquiry;

export default handler;
// export default fetchUser(grantAccess("createOwn", "visit", handler));
