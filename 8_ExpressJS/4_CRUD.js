const express = require("express");

const app = express();

const { createUser, deleteUser } = require("./contollers/studentControllers");
// const createUser = require("./contollers/studentControllers");

app.use(express.urlencoded());

let students = [
  { id: 1, name: "Ankit", age: 21 },
  { id: 2, name: "Kunesh", age: 20 },
];

// GET => Read all students
app.get("/", (req, res) => {
  res.status(200).json(students);
});

// GET => Read single students
app.get("/:id", (req, res) => {
  const studentID = parseInt(req.params.id);

  const student = students.find((u) => u.id === studentID);

  if (!student) {
    res.status(404).send("Stdent no Found");
  }
  res.status(200).json({
    message: "Student Found",
    student: student,
  });
});

// POST => Creating new student
app.post("/", createUser);

// PUT => Update full data
app.put("/:id", (req, res) => {
  const studentId = parseInt(req.params.id);

  const userIndex = students.findIndex((u) => u.id === studentId);

  if (userIndex == -1) res.status(404).send("Student not found");

  students[userIndex] = {
    id: studentId,
    name: req.body.name,
    age: req.body.age,
  };

  res.status(200).json({
    message: "User Updated",
    student: students[userIndex],
  });
});

// PATCH => Updates some or one field/s
app.patch("/:id", (req, res) => {
  const studentId = parseInt(req.params.id);

  const userIndex = students.findIndex((u) => u.id === studentId);

  if (userIndex == -1) res.status(404).send("Student not found");

  if (req.body.name) students[userIndex].name = req.body.name;
  if (req.body.age) students[userIndex].age = req.body.age;

  res.status(200).json({
    message: "User Updated",
    student: students[userIndex],
  });
});

app.delete("/:id", deleteUser);

app.listen(3000, () => {
  console.log("Server is runnng on PORT: 3000");
});
