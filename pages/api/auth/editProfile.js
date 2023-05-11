import editProfile from "../../../controllers/auth/editProfile";
import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

// API route for editing the logged-in user details
const handler = editProfile;

export default fetchUser(grantAccess("updateOwn", "profile", handler));
