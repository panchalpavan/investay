import myEnquiries from "../../../controllers/enquiry/myEnquiries";
import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

const handler = myEnquiries;

export default fetchUser(grantAccess("readOwn", "enquiries", handler));
