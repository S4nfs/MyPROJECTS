const fs = require("fs"); //file system

//✔️ create a file 
// fs.writeFileSync("Node.jS_Course/readmeFromNodeJS.txt", "Hello World!");     //overwrites the content      

//✔️ append content to a file without overwriting the previous content
// fs.appendFileSync("Node.jS_Course/readmeFromNodeJS.txt", " I am learning Node.js");

//✔️read a file
// const buf_data = fs.readFileSync("Node.jS_Course/readmeFromNodeJS.txt");
// orig_data = buf_data.toString();
// console.log(orig_data);

//✔️rename a file
// fs.renameSync("Node.jS_Course/readmeFromNodeJS.txt", "Node.jS_Course/readmeFromNodeJS_new.txt");


/* ✔️Challenge Time Create CRUD operations on a file system
1.Create a folder called "NodeJSFileSystemCRUD"
2.Create a file called "Data.txt" inside it and write "Hello World"
3.Add more data into the file at the end of the existing data
4.Read the data withour getting the buffer data
5.Rename the file to "Data_new.txt"
6.Delete both file and folder
*/

// fs.mkdirSync("Node.JS_Course/NodeJSFileSystemCRUD");                       

// fs.writeFileSync("Node.JS_Course/NodeJSFileSystemCRUD/Data.txt", "Hello World");

// fs.appendFileSync("Node.JS_Course/NodeJSFileSystemCRUD/Data.txt", " I am learning Node.js");

// const mybufferdata = fs.readFileSync("Node.JS_Course/NodeJSFileSystemCRUD/Data.txt" , "utf8");
// console.log(mybufferdata);

// fs.renameSync("Node.JS_Course/NodeJSFileSystemCRUD/Data.txt", "Node.JS_Course/NodeJSFileSystemCRUD/Data_new.txt");

// fs.unlinkSync("Node.JS_Course/NodeJSFileSystemCRUD/Data_new.txt");
// fs.rmdirSync("Node.JS_Course/NodeJSFileSystemCRUD");