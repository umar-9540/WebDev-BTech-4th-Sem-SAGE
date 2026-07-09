const fs = require("fs");
const path = require("path");

let filePath = path.join(__dirname, "song.txt");

fs.unlink(filePath, (err) => {
  if (err) throw err;
  console.log("File Deleted through callback");
});
