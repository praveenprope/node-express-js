const Todo = require("../models/Todo");

// Get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch todos", error });
  }
};

// Create a new todo
const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const newTodo = new Todo({ title });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Failed to create todo", error });
  }
};

// Update a todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: "Failed to update todo", error });
  }
};

// Delete a todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete todo", error });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
