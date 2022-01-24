/*async is nothing but a callback function
We pass them a function as an argument (here) - a callback - that gets called when the task completes.
the callback has an argument that tell you whenther the task was successful or not.
Now we need to say what to do when fs.wwriteFile has completed and start checking errors. */

// create a file 
const fs = require("fs");
// fs.writeFile("Node.jS_Course/FileSystemAsync.txt", "This file is created using async", (err) => {
//     console.log("File created");
//     console.log(err);
// });
    
//append content
// fs.appendFile("Node.jS_Course/FileSystemAsync.txt", " I am learning Node.js", (err) => {         
//     console.log("File appended");
//     console.log(err);
// });

//read a file
// fs.readFile("Node.jS_Course/FileSystemAsync.txt", "utf-8", (err, readmydata) => {
//     console.log("File read");
//     console.log(err);
//     console.log(readmydata);
// });


/*✔️CRUD Challenge Time
1. Create a folder
2. Create a file in that folder with some data
3. Add more data
4. Read the contents
5. Rename that file
6. Delete both file and folder
*/

// fs.mkdir("sagar verma", (err) => {
//     console.log("Folder created");
// });

// fs.writeFile("./sagar verma/bio.txt", "This file,folder and content is created using async challenge time", (err) => {
//     console.log("file created");
// });

// fs.appendFile("./sagar verma/bio.txt", "This is the appended data", (err) => {
// console.log("data appended");
// });

// fs.readFile("./sagar verma/bio.txt", 'utf-8',  (err, readmypreciousdata) => {
//     console.log(readmypreciousdata);
// })

// fs.rename("./sagar verma/bio.txt", "./sagar verma/.txt", (err) => {
//     console.log("file renamed");
// });

// fs.unlink("./sagar verma/actualbio.txt", (err) => {
//     console.log("trashed data goes into trash");
// })
// fs.rmdir("./sagar verma", (err) => {
//     console.log("folder deleted");
// })