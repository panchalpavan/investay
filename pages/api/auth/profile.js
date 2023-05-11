import profile from "../../../controllers/auth/profile";
import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

// API route for getting the logged-in user details
const handler = async (req, res) => profile(req, res);

export default fetchUser(grantAccess("readOwn", "profile", handler));
