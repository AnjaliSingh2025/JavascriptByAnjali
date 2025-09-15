// http is a built-in Node.js module used to create web servers.
// http = tool (module).

// createServer = builds a web server.

// req = request from client.

// res = response we send back.

// listen = starts the server at a port.
// Import built-in http module
const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { "Content-Type": "text/html" });

  // Routing example
  if (req.url === "/") {
    res.write("<h1>Welcome to Home Page</h1>");
  } else if (req.url === "/about") {
    res.write("<h1>About Page</h1><p>This is a Node.js HTTP module example.</p>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 - Page Not Found</h1>");
  }

  res.end();
});

// Start server on port 3000
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
