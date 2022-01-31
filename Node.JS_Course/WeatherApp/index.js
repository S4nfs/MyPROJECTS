const http = require("http");
const fs = require("fs");
var requests = require("requests");
const homeFile = fs.readFileSync("home.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests('http://api.openweathermap.org/data/2.5/weather?q=kanpur&appid=c631f7bd93f21b7bcb88127e4a9d8cc2')
    .on('data', (chunk) => {
      console.log(chunk)
    })
    .on('end', (err) => {
      if (err) 
      return console.log('connection closed due to errors', err);
      console.log('end');
    });
  }
});
server.listen(8000, "127.0.0.1");