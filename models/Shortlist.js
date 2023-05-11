const mongoose = require("mongoose");
const { Schema } = mongoose;

const ShortlistSchema = new Schema(
  {
    properties: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
        required: true,
      },
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: Number,
    updatedAt: Number,
  },
  { timestamps: true, versionKey: false }
);

const Shortlist =
  mongoose.models.Shortlist || mongoose.model("Shortlist", ShortlistSchema);
module.exports = Shortlist;
