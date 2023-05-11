import payments from "../../../controllers/payments";
import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

const handler = payments;

export default fetchUser(grantAccess("readOwn", "payment", handler));
