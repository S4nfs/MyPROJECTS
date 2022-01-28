/*1. Convert onject to JSON and store in a File
2. Read JSON file and convert to object again
3. Print object to console
*/
const fs = require("fs");
const bioData = {
    name :  "Sagar Verma",
    profession : "Entrepreneur",
    salary : 700000,
};

const jsonData = JSON.stringify(bioData);
fs.writeFile("./Node.JS_Course/08_JSON/json1.json", jsonData, (err) => {
console.log("Done");
});

fs.readFile("./Node.JS_Course/08_JSON/json1.json", "utf-8", (err, data) => {
// console.log(data);
const objData = JSON.parse(data);
console.log(objData);
});

