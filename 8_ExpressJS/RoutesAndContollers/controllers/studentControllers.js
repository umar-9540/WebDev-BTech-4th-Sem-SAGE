const getStudents = (req, res) => {
  res.status(200).json({ message: "Getting all students" });
};

const createStudent = (req, res) => {
  res.status(201).json({ message: "Student created", data: req.body });
};

module.exports = { getStudents, createStudent };
