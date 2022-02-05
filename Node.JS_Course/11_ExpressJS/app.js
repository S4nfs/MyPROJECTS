const express = require('express');
const app  = express();

/* app.get(route, callback) API = GET, POST, PUT, DELETE------------------------------

app.get("/", (req, res) => {
    express API has in-built HTTP 
    req represent HTTP request and has the query string, parameters, body, HTTP headers(400), etc
    res represent HTTP response || like res.send("Hello World")
})

*/

app.get("/", (req, res) => {
res.send("This is express JS");
})

app.listen(8001, () => {
    console.log("listening to port 8001");
})