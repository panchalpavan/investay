import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

const addReview = require("../../../controllers/review/addReview");

const handler = addReview;

export default handler;
// export default fetchUser(grantAccess("createOwn","review",handler));
