import { Todo } from "../models/todo.model.js";

// --------------------------------------------------Create a todo
const createTodo = (req, res) => {
  const { title, discription } = req.body;
  const todo = Todo.create({
    title,
    discription,
    user: req.id,
  });
  res.json({
    msg: "todo created sucessfully",
  });
};

// --------------------------------------------------Fetch all todo
const getTodo = async (req, res) => {
  const todos = await Todo.find({ user: req.id });
  res.send(todos);
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
