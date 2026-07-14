let students = [
  { id: 1, name: "Ankit", age: 21 },
  { id: 2, name: "Kunesh", age: 20 },
];

const createUser = (req, res) => {
  console.log(req.body.name);
  const user = {
    id: students.length + 1,
    name: req.body.name,
    age: req.body.age,
  };

  students.push(user);

  res.status(201).json({
    message: "User Created",
    student: user,
  });
};

const deleteUser = (req, res) => {
  const studentId = parseInt(req.params.id);
  let prevLen = students.length;

  students = students.filter((u) => u.id !== studentId);

  if (prevLen == students.length) res.status(404).send("User not exist");

  res.status(200).json({
    message: "User Deleted",
    student: students.length,
  });
};

module.exports = { createUser, deleteUser };
