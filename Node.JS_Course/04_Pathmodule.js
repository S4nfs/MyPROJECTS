const path  = require('path');

console.log(path.dirname("C:/xampp/htdocs/Phpcourse/Node.JS_Course/04_Pathmodule.js"));
console.log(path.extname("C:/xampp/htdocs/Phpcourse/Node.JS_Course/04_Pathmodule.js"));
console.log(path.basename("C:/xampp/htdocs/Phpcourse/Node.JS_Course/04_Pathmodule.js"));

console.log(path.parse("C:/xampp/htdocs/Phpcourse/Node.JS_Course/04_Pathmodule.js"));       //result object

const mypath = path.parse("C:/xampp/htdocs/Phpcourse/Node.JS_Course/04_Pathmodule.js");
console.log(mypath.name);
