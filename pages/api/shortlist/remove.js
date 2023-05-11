import removeFromShortlist from "../../../controllers/shortlist/remove";
import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

const handler = removeFromShortlist;

export default fetchUser(grantAccess("updateOwn", "shortlist", handler));
