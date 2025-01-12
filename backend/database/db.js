import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/lms");
    console.log("Database connected.");
  } catch (error) {
    console.log("Connection failed", error);
  }
};

export default connectDB;
