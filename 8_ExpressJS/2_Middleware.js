const express = require("express");
const path = require("path");

const app = express();

app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});
//  /about , /about/page
// /about-page => Error
app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.get("/", (req, res) => {
  console.log("Get request");
  res.send("HII");
});

app.get("/about", (req, res) => {
  console.log("Get request about");
  res.send("HII ABOUT");
});

const checkAuth = (req, res, next) => {
  const isAuth = true; // Pretend we checked a token
  if (isAuth) {
    next(); // User is valid, proceed to the route
  } else {
    res.status(401).send("Unauthorized!");
  }
};

// Pass the middleware BEFORE the final (req, res) callback
app.get("/dashboard", checkAuth, (req, res) => {
  res.send("Welcome to your secret dashboard.");
});

app.listen(4000);
