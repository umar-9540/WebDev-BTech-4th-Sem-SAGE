const express = require("express");
const router = express.Router();
// Import the controller functions
const {
  getStudents,
  createStudent,
} = require("../controllers/studentControllers");

// Connect the route to the controller
router.get("/", getStudents);
router.post("/", createStudent);

module.exports = router;
