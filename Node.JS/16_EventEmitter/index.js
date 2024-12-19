const express = require('express');
const EventEmitter = require('events'); //EventEmitter is a class
const app = express();

const event = new EventEmitter(); //creating an instance

let count = 0
event.on('calledAPI', () => {
    count++;
    console.log("someone called search api " + count + " times");
});

app.get('/', (req, res) => {
    res.send("Yo");
});

app.get('/search', (req, res) => {
    res.send("wanna search");
    event.emit("calledAPI");       //api event listner
});

app.listen(8004);