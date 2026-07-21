const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static("public"));

// 1. MONGODB Connection
mongoose
  .connect("mongodb://localhost:27017/Todo_app")
  .then(() => console.log("MongoDB connection Successful"))
  .catch(() => console.log("Error connecting MongoDB"));

//   2. Schema And Model
const todoSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    priority: { type: Number, default: 0 },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Todo = mongoose.model("Todo", todoSchema);

// 3. API Endpoints

// Add Todo
app.post("/todos", async (req, res) => {
  console.log(req.body);

  try {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();

    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(404).send(error);
  }
});

// Fetch Todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ priority: -1, createdAt: -1 });
    res.status(200).json(todos);
  } catch (err) {
    res.status(404).send(err);
  }
});

// Delete Todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

    if (!deletedTodo) {
      res.status(404).send("Todo not Found");
    }

    res.status(200).json(deletedTodo);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch("/todos/:id/priority", async (req, res) => {
  const { action } = req.body; // {"action" : "increase"} OR {"action" : "decrease"

  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) res.status(404).send("Todo Not Found");

    if (action === "increase") todo.priority += 1;
    else if (action === "decrease") todo.priority -= 1;
    else res.status(404).send("Action must be Increase or Decrease");

    const savedTodo = await todo.save();
    res.status(200).json(savedTodo);
  } catch (err) {
    res.status(500).send(err);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
