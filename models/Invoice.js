const mongoose = require("mongoose");
const { Schema } = mongoose;

const InvoiceSchema = new Schema(
  {
    saleValue: {
      type: Number,
      required: true,
    },
    saleFees: {
      type: Number,
      required: true,
    },
    cgst: {
      type: Number,
      required: true,
    },
    sgst: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
       enum: ["paid", "pending"],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: Number,
    updatedAt: Number,
  },
  { timestamps: true, versionKey: false }
);

const Invoice =
  mongoose.models.Invoice || mongoose.model("Invoice", InvoiceSchema);
module.exports = Invoice;
