const fs = require("fs/promises");
const path = require("path");

let filePath = path.join(__dirname, "song.txt");

fs.readFile(filePath, "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
