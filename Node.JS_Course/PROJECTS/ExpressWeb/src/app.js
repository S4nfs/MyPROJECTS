const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8002;

// public static path
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

//routing
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/weather", (req, res) => {
  res.send("Weather Page");
});

app.get("*", (req, res) => {
  res.send("404 Error Pge");
});

app.listen(port, () => {
  console.log(`listeneing to port ${port}`);
});
