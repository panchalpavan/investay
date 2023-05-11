import getMyShortlists from "../../../controllers/shortlist";
import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

const handler = getMyShortlists;

export default fetchUser(grantAccess("readOwn", "shortlist", handler));
