const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.send("this is Home page ");
});

app.get("/user", (req, res) => {
  res.send(`${req.query.name}`);
});

app.get("/users/:name ", (req, res) => {
  res.send(`${req.params.name}`);
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
  // res.send("About Page");
});
app.listen(3000, () => {
  console.log("app is running on port: 3000");
});
