const Todo = require("../models/Todo");

// Fetch Todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ priority: -1, createdAt: -1 });
    res.status(200).json(todos);
  } catch (err) {
    res.status(404).send(err);
  }
};

// Add Todo
const addTodo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Edit Todo
const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTodo) return res.status(404).send("Todo Not Found");
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete Todo
const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) return res.status(404).send("Todo not Found");
    res.status(200).json(deletedTodo);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Change Priority
const changePriority = async (req, res) => {
  const { action } = req.body;

  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).send("Todo Not Found");

    if (action === "increase") todo.priority += 1;
    else if (action === "decrease") todo.priority -= 1;
    else return res.status(400).send("Action must be Increase or Decrease");

    const savedTodo = await todo.save();
    res.status(200).json(savedTodo);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo, changePriority };
