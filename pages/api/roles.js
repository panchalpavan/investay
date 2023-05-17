const AccessControl = require("accesscontrol");
const ac = new AccessControl();

const roles = (function () {
  ac.grant("user")
    .readOwn("profile")
    .updateOwn("profile")
    .updateOwn("password")
    .readAny("property")
    .createOwn("property")
    .updateOwn("property")
    .readOwn("listings")
    .createOwn("gallery")
    .updateOwn("gallery")
    .createOwn("review")
    .readAny("review")
    .updateOwn("review")
    .deleteOwn("review")
    .readOwn("shortlist")
    .updateOwn("shortlist")
    .createOwn("enquiries")
    .readOwn("enquiries")
    .createOwn("payment")
    .readOwn("payment")
    .createOwn("feedback");

  ac.grant("admin")
    .extend("user")
    .readAny("profile")
    .updateAny("profile")
    .updateAny("property")
    .readAny("listings")
    .updateAny("review")
    .deleteAny("review")
    .readAny("enquiries")
    .readAny("payment")
    .readAny("feedback");

  return ac;
})();

export default roles;
