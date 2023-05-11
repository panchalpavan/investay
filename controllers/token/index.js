// Controller for fetching the token

const connectToMongo = require("../../db");
const Token = require("../../models/Token");

const getToken = async (req, res) => {
  if (req.method === "GET") {
    // COnnecting to mongodb
    connectToMongo();

    let success = false;
    try {
      const tokenId = req.query.id;

      if(tokenId.length !== 24) {
        success = false;
        return res
          .status(404)
          .json({ success, error: "Invalid Token!" });
      }

      // Checking if a token exists with the id received
      const token = await Token.findById(tokenId);
      if (!token) {
        success = false;
        return res
          .status(404)
          .json({ success, error: "Invalid Token!" });
      }

      success = true;
      return res.status(200).json({ success, token });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = getToken;
