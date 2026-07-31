const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Uses environment variable for Render deployment, falls back to localhost
    const conn = await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/Todo_app",
    );
    console.log(`MongoDB connection Successful: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
