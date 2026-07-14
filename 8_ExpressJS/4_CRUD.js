const express = require("express");

const app = express();

const students = [
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

  const student = students.find((u1) => u.id === studentID);

  if (!student) {
    res.status(404).send("Stdent no Found");
  }
  res.status(200).json({
    message: "Student Found",
    student: student,
  });
});

app.listen(3000, () => {
  console.log("Server is runnng on PORT: 3000");
});
