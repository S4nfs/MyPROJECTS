var http = require('http');
var fs = require('fs');

var spawn = require('child_process').spawn;

var filename = process.argv[2];
if (!filename) 
{
  console.log("Usage: node server.js filename_to_tail");
  return;
}


// -- Node.js Server ----------------------------------------------------------

server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'})
  fs.readFile(__dirname + '/index.html', function(err, data){
    res.write(data, 'utf8');
    res.end();
  });
})
server.listen(3000);

// -- Setup Socket.IO ---------------------------------------------------------

const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  });

io.on('connection', function(client){
  console.log('Client connected');
  var tail = spawn("tail", ["-f", filename]);
  client.send( { filename : filename } );

  tail.stdout.on("data", function (data) {
    console.log(data.toString('utf-8'))
    client.send( { tail : data.toString('utf-8') } )
  }); 

});
