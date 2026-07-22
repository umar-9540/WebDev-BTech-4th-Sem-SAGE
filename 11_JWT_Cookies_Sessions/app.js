const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const SECRET_KEY = "my_super_secret_key"; // In real apps, store this in .env

// API 1: Create Token (Login)
app.post("/api/login", (req, res) => {
  // Normally, you check DB for username & password here
  const user = { id: 101, username: "umar_dev", role: "admin" };

  // Create the JWT
  // jwt.sign(payload, secret_key, options)
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });

  res.status(200).json({
    message: "Login successful",
    token: token,
  });
});

// API 2: Check Token (Protected Route)
app.get("/api/profile", (req, res) => {
  // The client sends the token in the headers (Authorization: Bearer <token>)
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided." });
  }

  // Extract token from "Bearer <token>"
  const token = authHeader.split(" ")[1];

  // Verify the token
  jwt.verify(token, SECRET_KEY, (err, decodedData) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or Expired Token" });
    }
    // Token is valid! decodedData contains the payload (id, username, role)
    res.status(200).json({
      message: "Welcome to your profile!",
      userData: decodedData,
    });
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
