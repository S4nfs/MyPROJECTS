NodeJS Intro
Node.js is an open-source and cross-platform runtime environment built on Chrome’s V8 JavaScript engine for executing JavaScript code outside of a browser. It provides an event-driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript

==============================

Assembler, Compiler and Interpreter
The Assembler is used to translate the program written in Assembly language into machine code. Examples: NASM, MASM, TASM, GAS, FASM, ARM etc.

Compiler convert a program written in a high-level language into machine code understood by computers all at one go. Examples: MSVC(C++), javac(Java), tsc(Typescript), rustc(Rust), go build(Go)

Interpreter convert a program written in a high-level language into machine code understood by computers line-by-line. Examples: Python, Perl, JavaScript, Ruby

==============================

Why use NodeJs?
-Writing javascript on the server-side
-Access to HTTP stack
-File I/O entities
-TCP and other protocols
-Direct database access

==============================

What is npm?
NPM stands for Node Package Manager its a command line utility to install packages, do version management and dependency management of NodeJs packages

==============================

Node.js Module Types?
Core Modules : like http, fs, path, util
Local Modules : modules created by local user
Third Party Modules : mongoose, express, slugify

==============================

Why Single-Threaded?
NodeJs works on the single-threaded model to ensure that there is support for asynchronous processing. With this it makes it scalable and efficient for applications to provide high performance and efficiency under high amounts of load.

==============================

Two Types of API functions :
Synchronous APIs: Used for blocking functions
Asynchronous APIs: Used for non-blocking functions

==============================

Synchronous Functions V/S Asynchronous Functions :

Synchronous functions -> They are called blocking functions as it waits for each operation to complete, only after that, it executes the next operation, hence blocking the next command from execution. Examples: fs.readFileSync(), fs.appendFileSync(), fs.writeFileSync() etc.

Asynchronous functions -> They are called non-blocking functions as it never waits for each operation to complete, rather it executes all operations in the first go itself. Examples: fs.readFile(), fs.appendFile(), fs.writeFile(), fs.stat() etc.

==============================

Control Flow Functions: They are used to give the order in which the functions can be executed and to control what has to be executed and when.
Order of control flow statements

1. Handling execution and queue
2. Data collection and storage
3. Concurrency handling and limiting
4. Execution of the next piece of code

==============================

What are buffers in Node.js?
A buffer is a temporary memory mainly used by the stream to hold on to some data until it is consumed.

==============================

Asserts?
The Node.js Assert is a way to write tests. It provides no feedback when running your test unless one fails. The assert module provides a simple set of assertion tests that can be used to test invariants.

==============================

Streams?
Streams are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way. For example, a file size can be larger than your free memory space, making it impossible to read the whole file into the memory in order to process it. That’s where streams come to the rescue! Using streams to process smaller chunks of data, makes it possible to read larger files.

There are four types of streams in Node.js:
-Readable: This stream is used for reading operations. For example: fs.createReadStream() lets us read the contents of a file.
-Writable: This stream is used for write operations. For example, fs.createWriteStream() lets us write data to a file using streams.
-Duplex: This stream can be used for both reading and write operations. For example, net.Socket
-Transform: It is a type of duplex stream where the output computes according to input. For example, in the instance of file-compression, you can write compressed data and read decompressed data to and from a file.
