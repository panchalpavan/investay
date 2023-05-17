const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    prefix: {
      type: String,
      default: "",
    },
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
    },
    alternateEmail: {
      type: String,
      default: null,
    },
    countryCode: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    alternateMobile: {
      type: String,
      default: null,
    },
    dob: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      default: null,
    },
    designation: {
      type: String,
      default: null,
    },
    gender: {
      type: String,
      default: "male",
    },
    maritalStatus: {
      type: String,
      default: "single",
    },
    nameInPan: {
      type: String,
      default: null,
    },
    nameInAadhar: {
      type: String,
      default: null,
    },
    pan: {
      type: String,
      default: null,
    },
    aadhar: {
      type: String,
      default: null,
    },
    nriIdName: {
      type: String,
      default: null,
    },
    nriIdDetails: {
      type: String,
      default: null,
    },
    nameinBank: {
      type: String,
      default: null,
    },
    bankName: {
      type: String,
      default: null,
    },
    branchName: {
      type: String,
      default: null,
    },
    accountNumber: {
      type: String,
      default: null,
    },
    ifsc: {
      type: String,
      default: null,
    },
    accountType: {
      type: String,
      default: null,
    },
    userId: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "channel-partner"],
      default: "user",
    },
    password: {
      type: String,
      default: null
    },
    invoice: {
      type: Schema.Types.ObjectId,
      ref: "Invoice",
      required: false,
    },
  
    createdAt: Number,
    updatedAt: Number,
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
module.exports = User;
