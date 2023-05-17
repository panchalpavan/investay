import joi from "joi";
import Property from "../../models/Property";
const Razorpay = require("razorpay");

const schema = joi.object({
  id: joi.string().length(24).required().messages({
    "string.length": "Invalid {#label}!",
    "string.required": "{#label} cannot be empty!",
  }),
});

const pay = async (req, res) => {
  if (req.method === "POST") {
    let success = false;
    try {
      const userId = req.user.id;
      const { id } = req.body;
      const { error } = schema.validate(req.body);
      if (error) {
        success = false;
        return res
          .status(422)
          .json({ success, error: error.details[0].message });
      }

      const property = await Property.findById(id);

      const instance = new Razorpay({
        key_id: process.env.RAZORPAY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
      });

      var options = {
        amount: property.booking_pricing.deposit * 100,
        currency: "INR",
        receipt: "order_rcptid_11",
      };

      instance.orders.create(options, function (err, order) {
        // console.log(order);
      });

      success = true;
      return res.status(200).json({ success });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = pay;
