const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/CollegeDB")
  .then(() => console.log("Mongoose connected!"))
  .catch((err) => console.log("Connection failed:", err));

// 2. Define Schema & Model
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  grade: String,
});

const Student = mongoose.model("Teacher", studentSchema);

// 3. CRUD Functions
async function performCRUD() {
  try {
    // CREATE
    const newStudent = await Student.create({ name: "Umar", grade: "A" });
    console.log("Created:", newStudent);

    // READ (Find all)
    const allStudents = await Student.find();
    console.log("All Students:", allStudents);

    // READ (Find one specific)
    const singleStudent = await Student.findOne({ name: "Umar" });

    // UPDATE
    // { new: true } returns the updated document rather than the old one
    const updatedStudent = await Student.findByIdAndUpdate(
      singleStudent._id,
      { grade: "A+" },
      { new: true },
    );
    console.log("Updated:", updatedStudent);

    // DELETE
    const deletedStudent = await Student.findByIdAndDelete(singleStudent._id);
    console.log("Deleted:", deletedStudent);
  } catch (error) {
    console.error("Error during CRUD:", error);
  }
}

performCRUD();
