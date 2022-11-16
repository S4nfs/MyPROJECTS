NodeJS Intro
Node.js is an open-source and cross-platform runtime environment built on Chrome’s V8 JavaScript engine for executing JavaScript code outside of a browser. It provides an event-driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript

==============================

Why use NodeJs?
-Writing javascript on the server-side
-Access to HTTP stack
-File I/O entities
-TCP and other protocols
-Direct database access

==============================

Why Single-Threaded?
NodeJs works on the single-threaded model to nsure that there is support for asynchronous processing. With this it makes it scalable and efficient for applications to provide high performance and efficiency under high amounts of load.

==============================

Two Types of API functions :
Synchronous APIs: Used for blocking functions
Asynchronous APIs: Used for non-blocking functions

==============================

Synchronous Functions V/S Asynchronous Functions :

Synchronous functions block the execution of the program until the file operation is performed. These functions are also called blocking functions. Examples: fs.readFileSync(), fs.appendFileSync(), fs.writeFileSync() etc.

Asynchronous functions do not block the execution of the program and each command is executed after the previous command even if the previous command has not computed the result. Examples: fs.readFile(), fs.appendFile(), fs.writeFile(), fs.stat() etc.

==============================

Control Flow Functions: They are used to give the order in which the functins can be executed and to control what has to be executed when.
Order of control flow statements

1. Handling execution and queue
2. Data collection and storage
3. Concurrency handling and limiting
4. Execution of the next piece of code
