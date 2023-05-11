const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
// const MONGO_URI = process.env.MONGO_URI;
const MONGO_URI = process.env.NEXT_PUBLIC_NODE_ENV === "production" ? process.env.MONGO_URI : "mongodb://127.0.0.1:27017/investay";

// This function is used to establish connection to mongodb
const connectToMongo = async () => {
  try {
    console.log(MONGO_URI)
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB sucessfully!");
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`);
  }
};

module.exports = connectToMongo;
