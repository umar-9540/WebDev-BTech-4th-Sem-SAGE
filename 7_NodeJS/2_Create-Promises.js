const fs = require("fs/promises");
const path = require("path");

let filePath = path.join(__dirname, "song.txt");
let content = "HIIIIIIIIIIIIIII";

fs.writeFile(filePath, content, {
  flag: "a", // append data to previous file
})
  .then(() => {
    console.log("File Created through Promise");
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Synchronous code");
console.log("Synchronous code");
console.log("Synchronous code");
console.log("Synchronous code");
console.log("Synchronous code");
console.log("Synchronous code");
console.log("Synchronous code");
console.log("Synchronous code");
