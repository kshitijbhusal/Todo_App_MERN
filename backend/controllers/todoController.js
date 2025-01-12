import { Todo } from "../models/todo.model.js";

// --------------------------------------------------Create a todo
const createTodo = (req, res) => {
  const { title, discription } = req.body;
  const todo = Todo.create({
    title,
    discription,
  });
  res.json({
    msg: "todo created sucessfully",
  });
};

// --------------------------------------------------Fetch all todo
const getTodo = async (req, res) => {
  const allTodo = await Todo.find();
  res.json({
    allTodo,
  });
};

// --------------------------------------------------Update a todo as done
const updateTodo = async (req, res) => {
  const id = "6783ed391b16e8bfe3577c71";
  const todo = await Todo.findByIdAndUpdate({ _id: id }, { completed: true });
  res.json({
    msg: "todo updated!",
    updated: todo,
  });
};

// --------------------------------------------------Delete a todo

const deleteTodo = async (req, res) => {
  let id = "6783a674fceaab59cc0dfcc6";
  const todo = await Todo.findOne({
    id,
  });
  const deleted = await Todo.deleteOne({
    _id: id,
  });

  res.json({
    deleted,
  });
};

export { createTodo, getTodo, updateTodo, deleteTodo };
