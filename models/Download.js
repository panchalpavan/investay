const mongoose = require("mongoose");
const { Schema } = mongoose;

const DownloadSchema = new Schema(
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
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true
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

const Download =
  mongoose.models.Download || mongoose.model("Download", DownloadSchema);
module.exports = Download;
