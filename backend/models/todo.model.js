import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title: String,
  discription: String,
  completed: {
    type: Boolean,
    default: "false",
    enum: ["true", "false"],
  },
});

export const Todo = mongoose.model("Todo", todoSchema);
