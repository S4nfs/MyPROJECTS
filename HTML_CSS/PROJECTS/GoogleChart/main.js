var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var os = require('os-utils');

app.use(express.static("public"));

var cpuHistogram = [];
var histogramLength = 61;
var interval = 1000;

http.listen(3001, function () {
    for (i = 0; i < histogramLength; i++) {
        cpuHistogram[i] = [i, 0];

    }
    setInterval(function () {
        os.cpuUsage(function (value) {
            updateCpuHistogram(Math.round(value * 100)); //get cpu usage b/w 0-100 %
            io.emit('cpu histogram', cpuHistogram);
        });
    }, interval);


});

function updateCpuHistogram(cpuLoad){
    if(cpuHistogram.length >= histogramLength)
        cpuHistogram.shift();
    cpuHistogram.push([0, cpuLoad]);

    for(var i=0; i < histogramLength; i++){
        cpuHistogram[i][0] = i;
    }
    
}