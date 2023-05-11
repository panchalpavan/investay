const Payment = require("../../models/Payment");

const payments = async (req, res) => {
  if (req.method === "GET") {
    let success = false;
    try {
      const userId = req.user.id;
      const slug = req.query.slug;
      if (!slug) {
        success = false;
        return res.status(403).json({ success, error: "Invalid slug!" });
      }

      let payments = [];
      if (slug === "received") {
        payments = await Payment.find({ receiver: userId });
      } else if (slug === "sent") {
        payments = await Payment.find({ sender: userId });
      } else {
        success = false;
        return res.status(403).json({ success, error: "Invalid slug!" });
      }

      success = true;
      return res.status(200).json({ success, payments });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = payments;
