const mongoose = require("mongoose");
const { Schema } = mongoose;

const PaymentDetailsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    ifscCode: {
      type: String,
      min: 11,
      max: 11,
      required: true,
    },
    upi: {
      type: String,
      required: true,
    },
    aadhar: {
      type: String,
      min: 12,
      max: 12,
      required: true,
    },
    pan: {
      type: String,
      min: 10,
      max: 10,
      required: true,
    },
    property: {
      type: Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    createdAt: Number,
    updatedAt: Number,
  },
  { timestamps: true, versionKey: false }
);

const PaymentDetails =
  mongoose.models.PaymentDetails ||
  mongoose.model("PaymentDetails", PaymentDetailsSchema);
module.exports = PaymentDetails;
