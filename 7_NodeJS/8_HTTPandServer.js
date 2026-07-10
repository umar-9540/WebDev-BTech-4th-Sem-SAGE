const http = require("http"); // 1. Import the built-in HTTP module

// 2. Create the server using http.createServer()
// The callback function runs every single time a request hits the server
// const server = http.createServer((req, res) => {
//   // req (request): contains info about what the user is asking for (URL, method)
//   // res (response): is the object we use to send data back to the user

//   // 3. Set the response header (Status 200 means OK, content is plain text)
//   res.writeHead(200, { "Content-Type": "text/plain" });

//   // 4. Send the actual content and end the response
//   res.end("Hello from the Node.js Server!");
// });

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the Home Page!");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to About page</h1>");
  } else if (req.url === "/api/users") {
    // 1. Set header for JSON
    res.writeHead(200, { "Content-Type": "application/json" });

    // 2. Convert JS Array/Object to JSON String and send it
    res.end(JSON.stringify(users));
  } else {
    // 404 Not Found for any other URL
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Error 404: Page Not Found");
  }
});

// 5. Start the server and tell it to listen on Port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}...`);
});
