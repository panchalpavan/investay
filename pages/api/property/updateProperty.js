import updateProperty from "../../../controllers/property/updateProperty";
import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

// export const config = {
//     api: {
//       bodyParser: false,
//     },
//   };
  
// API route for editing the logged-in user details
const handler = updateProperty;

export default fetchUser(grantAccess("updateOwn", "profile", handler));
