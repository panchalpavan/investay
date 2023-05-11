import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

const addFeedback = require("../../../controllers/feedback/add");

const handler = addFeedback;

export default fetchUser(grantAccess("createOwn", "feedback", handler));
