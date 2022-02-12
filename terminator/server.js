var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');

var pty = require('node-pty');


// Setup the express app
var app = express();
// HTTPS key and certificate files
var options = {
  key: fs.readFileSync('keys/key.pem'),
  cert: fs.readFileSync('keys/cert.pem')
};

// Create Server using the app and bind it to a port
//https.createServer(options, app).listen(4000)
var server = http.createServer(app).listen(8080);

// Static file serving
app.use("/",express.static("./"));

// Bind socket.io to the server
var io = require('socket.io')(server);


// When a new socket connects
io.on('connection', function(socket){
  // Create terminal
  var term = pty.spawn('sh', [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env
  });
  // Listen on the terminal for output and send it to the client
  term.on('data', function(data){
    socket.emit('output', data);
  });

  // Listen on the client and send any input to the terminal
  socket.on('input', function(data){
    term.write(data);
  });

  // Listen for a resize request and update the terminal size
  socket.on('resize', function(data){
    term.resize(data[0], data[1]);
  });

  // When socket disconnects, destroy the terminal
  socket.on("disconnect", function(){
    term.destroy();
    console.log("bye");
  });
});