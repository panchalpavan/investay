import addProperty from "../../../controllers/property/addProperty";
import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

export const config = {
    api: {
      bodyParser: false,
    },
  };
  
const handler = addProperty;

export default fetchUser(grantAccess("createOwn", "property", handler));
