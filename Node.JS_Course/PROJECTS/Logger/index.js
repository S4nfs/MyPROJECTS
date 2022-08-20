const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const spawn = require('child_process').spawn;


// Fix body of requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Log the requests
app.use(logger('dev'));

// Serve static files
app.use(express.static(path.join(__dirname, '.')));

// Add a basic route – index page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

var tails = {};

//send the data inside ./test.log to the client using socket.io
io.on('connection', (socket) => {
    console.log(`client connected ${socket.client.id}`);
    socket.on('tail', (data) => {
        console.log(`client ${socket.client.id} wants to tail ${data.filename}`);
        if (!tails[data.filename]) {
            tails[data.filename] = spawn('tail', ['-f', data.filename]);
            
            tails[data.filename].stdout.on('data', (data) => {
                socket.emit('tailed', data.toString());
            }).on('error', (error) => {
                socket.emit('error', error);
            }).on('end', () => {
                socket.emit('end');
            }).watch();
        }
    });
});


                    


// Bind to a port
server.listen(3005, () => {
    console.log('running on localhost:' + 3005);
});