const mongoose = require("mongoose");
const { Schema } = mongoose;

const PaymentSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved"],
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: Number,
    updatedAt: Number,
  },
  { timestamps: true, versionKey: false }
);

const Payment =
  mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);
module.exports = Payment;
