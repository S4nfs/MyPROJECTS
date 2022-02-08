const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8002;
const hbs = require('hbs');

// public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path);   
// Note: In order to reflect changes in any other files LIVE run=> nodemon .\src\app.js -e js,hbs

//routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.rrender("weather");
});

app.get("*", (req, res) => {
  res.render("404error", {
    errormsg: "OOPS!! PAGE NOT FOUND !!"
  });
});

app.listen(port, () => {
  console.log(`listeneing to port ${port}`);
});
