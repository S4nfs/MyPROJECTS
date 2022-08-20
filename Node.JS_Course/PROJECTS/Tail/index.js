const express = require("express");
const Tail = require("tail").Tail;
const app = express();

const server = app.listen(5000, () => console.log(`Listening on port 5000`))

const io = require("socket.io")(server);

    //read all files in an array and send their content to the client using socket.io and tail
    const fs = require("fs");
    const path = require("path");
    const files = fs.readdirSync(path.join(__dirname, "."));
    const tail = new Tail("./test.log");
    tail.on("line", (data) => {
        io.emit("tailed", data);
    }
    );
    tail.on("error", (error) => {
        io.emit("error", error);
    } 
    );
    tail.on("end", () => {
        io.emit("end");
    }
    );
    tail.watch();
    //send the data inside ./test.log to the client using socket.io
    io.on("connection", (socket) => {
        console.log(`client connected ${socket.client.id}`);
        socket.on("tail", (data) => {
            console.log(`client ${socket.client.id} wants to tail ${data.filename}`);
            if (!tails[data.filename]) {
                tails[data.filename] = spawn("tail", ['-f', data.filename]);
                tails[data.filename].stdout.on("data", (data) => {
                    socket.emit("tailed", data.toString());
                }).on("error", (error) => {
                    socket.emit("error", error);
                }).on("end", () => {
                    socket.emit("end");
                }).watch();
            }
        }
        );
    }
    );


   
