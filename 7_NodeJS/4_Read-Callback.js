const fs = require("fs");
const path = require("path");

let filePath = path.join(__dirname, "song.txt");

// fs.readFile(
//   filePath,
//   {
//     encoding: "utf-8",
//   },
//   (err, data) => {
//     if (err) throw err;
//     //   console.log(data.toString());
//     console.log(data);
//   },
// );

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) throw err;
  //   console.log(data.toString());
  console.log(data);
});

console.log("Synchronous code");
