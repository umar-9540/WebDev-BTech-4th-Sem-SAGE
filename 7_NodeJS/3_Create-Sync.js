const fs = require("fs");
const path = require("path");

let filePath = path.join(__dirname, "song.txt");
let content = "Hello from Sync";

fs.writeFileSync(filePath, content);

console.log("Synchronous code");
console.log("Synchronous code");
console.log("Synchronous code");
console.log("Synchronous code");
console.log("Synchronous code");
console.log("Synchronous code");
console.log("Synchronous code");
console.log("Synchronous code");
