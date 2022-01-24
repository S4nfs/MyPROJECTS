const fs = require("fs");
/*async is nothing but a callback function
We pass them a function as an argument - a callback - that gets called when the task completes.
the callback has an argument that tell you whenther the task was successful or not.
Now we need to say what to do when fs.wwriteFile has completed and start checking errors. */
fs.writeFile("Node.jS_Course/FileSystemAsync.txt", "This file is created using async fs", (err) => {
    console.log("File created");
    console.log(err);
});
    