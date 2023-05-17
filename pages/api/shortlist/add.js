import addToShortlist from "../../../controllers/shortlist/add";
import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

const handler = addToShortlist;

export default fetchUser(grantAccess("updateOwn", "shortlist", handler));
