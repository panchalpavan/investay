const mongoose = require("mongoose");
const { Schema } = mongoose;

const LocationSchema = new Schema(
  {
    name: {
      type: String,
      default: null,
    },
    createdAt: Number,
    updatedAt: Number,
  },
  { timestamps: true, versionKey: false }
);

const Location =
  mongoose.models.Location || mongoose.model("Location", LocationSchema);
module.exports = Location;
