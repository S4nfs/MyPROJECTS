//🔮Simple http Server---------------------------------------------------------
// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end("Hello this is my personal server");
// });
// server.listen(3000, "127.0.0.1", () => {
//     console.log("Server is running on port 3000");
// });  //http://localhost:3000/

//🔮Routing with http Server---------------------------------------------------------
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("This is my website Home Page");
  } else if (req.url == "/about") {
    res.end("This is my website About Page");
  }else if (req.url == "/contact") {
    res.end("This is my website Contact Page");
  }else{
    res.writeHead(404, {"content-type": "text/html"});
    res.end("<h1>Page not found </h1>");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on port 3000");
}); //http://localhost:3000/
