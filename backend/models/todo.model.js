import mongoose, { Schema } from "mongoose";

const todoSchema = mongoose.Schema({
  title: String,
  discription: String,

  completed: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Todo = mongoose.model("Todo", todoSchema);
