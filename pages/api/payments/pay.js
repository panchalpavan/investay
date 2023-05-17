const pay = require("../../../controllers/payments/pay");
const { default: fetchUser } = require("../../../middlewares/fetchUser");
const { default: grantAccess } = require("../../../middlewares/grantAccess");

const handler = pay;

export default fetchUser(grantAccess("createOwn", "payment", handler));
