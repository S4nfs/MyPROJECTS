//👨‍💻 Want to add Dynamic content to the page? You can use EJS, pug, handlebars, mustache ,etc template engines. HERE we are using Handlebars which uses a view engine hbs. (npm install hbs)
const express = require("express");
const app = express();
const path = require("path");
const requests = require("requests");

const my_static_website_Path = path.join(__dirname, "../public"); //join the directory with the path above this file
const mytemplate = path.join(__dirname, "../template");

//set the view engine to hbs
app.set("view engine", "hbs");
app.set("views", mytemplate);

//Built-in middleware for serving static websites
app.use(express.static(my_static_website_Path));

/* app.get(route, callback) API = GET, POST, PUT, DELETE------------------------------

app.get("/", (req, res) => {
    express API has in-built HTTP 
    req represent HTTP request and has the query string, parameters, body, HTTP headers(400), etc
    res represent HTTP response || like res.send("Hello World")
})
*/

app.get("/", (req, res) => {
    res.render("index", {
        title: "Home Page",
        name: "Sagar"
    });
});

// EXPRESSJS + API = get temperature using http://localhost:8001/about?name=pune with any name
app.get("/temp", (req, res) => {
  requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=c631f7bd93f21b7bcb88127e4a9d8cc2`)
  .on('data', (chunk) => {
    const objdata = JSON.parse(chunk);
    const arrData = [objdata];
    console.log(`City is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);
      res.write(arrData[0].name);           
  })
  .on('end', (err) => {
    if (err) return console.log('connection closed due to errors', err);
    res.end();
  });
});


app.get("/api", (req, res) => {
  res.json([
    {
      //both res.send & res.JSON are identical but .json has some advantage while using objects
      id: 1,
      name: "Sagar Verma",
    },
    {
      id: 2,
      name: "SV",
    },
    {
      id: 3,
      name: "PR",
    },
    {
      id: 4,
      name: "AS",
    },
  ]); //express will auto-stringify this object when shown
});

app.listen(8001, () => {
  console.log("listening to port 8001");
});
