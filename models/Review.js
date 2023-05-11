const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReviewSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["buyer", "seller", "channel-partner"],
      required: true,
    },
    likes: {
      type: String,
      required: true,
    },
    dislikes: {
      type: String,
      required: true,
    },
    overall: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    amenitiesAndFacilities: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    constructionQuality: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    greenSpaces: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    connectivity: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    rwa: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    avg: {
      type: Number,
      min: 1,
      max: 5,
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

const Review = mongoose.models.Review || mongoose.model("Review", ReviewSchema);
module.exports = Review;
