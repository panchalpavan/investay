import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

const getAllFeedbacks = require("../../../controllers/feedback");

const handler = getAllFeedbacks;

export default fetchUser(grantAccess("readAny", "feedback", handler));
