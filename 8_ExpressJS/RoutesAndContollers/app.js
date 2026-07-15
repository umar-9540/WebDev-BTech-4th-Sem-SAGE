const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import our student router
const studentRoutes = require("./routes/studentsRoutes");

// Use the router!
// Any request starting with '/api/students' will be sent to studentRoutes.js
app.use("/students", studentRoutes);

app.listen(3000, () => {
  console.log("MVC Server running on port 3000");
});
