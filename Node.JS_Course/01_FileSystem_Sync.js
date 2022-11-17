/*
fs.readFile(fileName [,options], callback) 	        - read the physical file asynchronously options- default encoding is utf8 flag -"r"
fs.writeFile(filename, data[, options], callback)   - Writes to the file. If file exists then overwrite the content otherwise creates new file.
fs.open(path, flags[, mode], callback) 	            - Opens file for reading or writing.
fs.rename(oldPath, newPath, callback) 	            - Renames an existing file.
fs.chown(path, uid, gid, callback) 	                - Asynchronous chown.
fs.stat(path, callback) 	                        - Returns fs.stat object which includes important file statistics.
fs.link(srcpath, dstpath, callback) 	            - Links file asynchronously.
fs.symlink(destination, path[, type], callback) 	- Symlink asynchronously.
fs.rmdir(path, callback) 	                        - Renames an existing directory.
fs.mkdir(path[, mode], callback) 	                - Creates a new directory.
fs.readdir(path, callback) 	                        - Reads the content of the specified directory.
fs.utimes(path, atime, mtime, callback) 	        - Changes the timestamp of the file.
fs.exists(path, callback) 	                        - Determines whether the specified file exists or not.
fs.access(path[, mode], callback) 	                - Tests a user's permissions for the specified file.
fs.appendFile(file, data[, options], callback) 	    - Appends new content to the existing file. 
*/


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

// fs.writeFile("Node.JS_Course/NodeJSFileSystemCRUD/Data.txt", "Hello World");

// fs.appendFileSync("Node.JS_Course/NodeJSFileSystemCRUD/Data.txt", " I am learning Node.js");

// const mybufferdata = fs.readFileSync("Data.txt", "utf8");
// console.log(mybufferdata);

// fs.renameSync("Node.JS_Course/NodeJSFileSystemCRUD/Data.txt", "Node.JS_Course/NodeJSFileSystemCRUD/Data_new.txt");

// fs.unlinkSync("Node.JS_Course/NodeJSFileSystemCRUD/Data_new.txt");
// fs.rmdirSync("Node.JS_Course/NodeJSFileSystemCRUD");