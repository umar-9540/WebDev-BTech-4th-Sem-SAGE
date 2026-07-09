const fs = require("fs");
const path = require("path");

let filePath = path.join(__dirname, "song.txt");

const data = fs.readFileSync(filePath, "utf8");

console.log(data);

console.log("Synchronous Task");
console.log("Synchronous Task");
console.log("Synchronous Task");
console.log("Synchronous Task");
console.log("Synchronous Task");
