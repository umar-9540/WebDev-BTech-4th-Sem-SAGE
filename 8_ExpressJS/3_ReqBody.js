/*
fetch("http://localhost:4444/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: "umar",
        age: 100
    })
})
.then((res) => {
    return res.json();
})
      .then((data) => {
          console.log(data);
      })
.catch((err) => {
    console.log(err);
}); 
*/

const express = require("express");
const app = express();

// --- MIDDLEWARE ---
// 1. Built-in middleware to parse incoming JSON data
// Without this, req.body will be undefined!
app.use(express.json());

// 2. Global Custom Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

// --- ROUTES ---
// A basic GET route
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// A POST route to create a new user
// The client sends data like { "name": "Umar", "age": 100 }
app.post("/users", (req, res) => {
  // Extract data from the parsed body
  const userName = req.body.name;
  const userAge = req.body.age;
  //   console.log(userName);

  //   Check if the user provided the data
  if (!userName || !userAge) {
    return res.status(400).send("Error: Name and Age are required.");
  }

  // Normally, we would save this to a database here.
  console.log(`Creating user: ${userName}, Age: ${userAge}`);

  // Send a 201 Created status and a JSON response
  res.status(201).json({
    message: "User created successfully",
    // user: { name: userName, age: userAge },
  });
});

// --- START SERVER ---
app.listen(4444, () => {
  console.log("Server listening on port 4444");
});
