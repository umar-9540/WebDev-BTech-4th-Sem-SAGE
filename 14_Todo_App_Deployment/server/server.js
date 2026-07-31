// Include dotenv for Render deployment (npm install dotenv)
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

// Middleware
app.use(cors()); // (Allows all origins)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
connectDB();

// API Routes (Prefixed with /api for Vite Proxy)
app.use("/api/todos", todoRoutes);

// Port setup for Render (process.env.PORT) and Vite proxy (5000)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
