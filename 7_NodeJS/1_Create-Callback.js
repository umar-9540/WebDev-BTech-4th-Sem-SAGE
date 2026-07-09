const fs = require("fs");
const path = require("path");

// let filePath = __dirname + "/" + "song.txt";
let filePath = path.join(__dirname, "song.txt");
let content = "Hello World";

// To know the path upto your parent folder
console.log(__dirname);

fs.writeFile(filePath, content, (err) => {
  if (err) throw err;
  console.log("File created!");
});
