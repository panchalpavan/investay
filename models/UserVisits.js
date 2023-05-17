const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserVisitSchema = new Schema(
  {
    counter: {
      type: Number,
      required:true,
    },
    createdAt: Number,
    updatedAt: Number,
  },
  { timestamps: true, versionKey: false }
);

const UserVisits = mongoose.models.UserVisits || mongoose.model("UserVisits", UserVisitSchema);
module.exports = UserVisits;
