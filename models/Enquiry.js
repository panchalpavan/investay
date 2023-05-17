const mongoose = require("mongoose");
const { Schema } = mongoose;

const EnquirySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    channelPartnerName: {
      type: String,
      default: null,
    },
    serviceNeeded: {
      type: String,
      enum: ["resale", "rental"],
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    query: {
      type: String,
      required: true,
    },
    property: {
      type: Schema.Types.ObjectId,
      ref: "Property",
      default: null,
    },
    createdAt: Number,
    updatedAt: Number,
  },
  { timestamps: true, versionKey: false }
);

const Enquiry =
  mongoose.models.Enquiry || mongoose.model("Enquiry", EnquirySchema);
module.exports = Enquiry;
