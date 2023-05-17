const mongoose = require("mongoose");
const { Schema } = mongoose;

const FeedbackSchema = new Schema(
  {
    processAndDocumentation: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    courteousness: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    knowledgable: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    overall: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    comment: {
      type: String,
      default: null,
    },
    recommendation: {
      type: Number,
      min: 1,
      max: 10,
      required: true,
    },
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

const Feedback =
  mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);
module.exports = Feedback;
