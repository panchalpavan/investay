const connectToMongo = require("../../db");
const Token = require("../../models/Token");
const { sendEmail } = require("../../services/email");
const { sendSms } = require("../../services/mobile");

const sendOtp = async (req, res) => {
  if (req.method === "POST") {
    await connectToMongo();
    let success = false;
    try {
      const { email, mobile } = req.body;
      const otp = Math.floor(1000 + Math.random() * 9000);

      let token = await Token.findOne({ email });

      if (!token) {
        // Creating the token
        token = await Token.create({
          email,
          otp,
        });
      } else {
        token = await Token.findByIdAndUpdate(
          token._id.toString(),
          { otp },
          { new: true }
        );
      }

      // Sending OTP, to the user's email
      await sendEmail({
        subject: "OTP verification! This OTP is valid for 5 minutes only!",
        text: `OTP: ${token.otp}`,
        email: email,
      });

      // Sending OTP to the user's mobile number
      // await sendSms({
      //   body: `OTP for login! This OTP is valid for 5 minutes only! OTP: ${token.otp}`,
      //   mobile: mobile,
      // });

      success = true;
      return res.status(200).json({success,token: token._id.toString()});
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = sendOtp;
