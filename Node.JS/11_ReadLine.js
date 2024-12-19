/*ReadLine: Open a file and return the content line by line. Here is a small example of readline where i am using it to stream logs from my files line by line in order to send limited logs to the apollo subscriptions. See https://notepad.link/IycEM

some readline methods:
rl.close(): readline.InterfaceClose the instance. this is 'close'Raises an event and does not receive any further input.
rl.pause(): Pauses the input stream. this is 'pause'Raises an event.
rl.resume(): Resumes a paused input stream.
rl.question(query, callback): Ask the user a question, receive input, and pass it to the callback function.
rl.write(data[, key]): Write data to the terminal or simulate virtual keystrokes.

some readline event:

'line': Occurs whenever a new line enters the input stream. This event is mainly used when processing input data line by line.
'pause': Occurs when the input stream is paused.
'resume': Occurs when the input stream is restarted.
'close': rl.close()the method is called readline.InterfaceOccurs when the instance is closed.

*/
var readline = require('readline')
var fs = require('fs')

var rl = readline.createInterface({
  input: fs.createReadStream('Node.jS_Course/ReadLineByLine.txt'),
})

let lineno = 0
rl.on('line', function (line) {
  lineno++
  console.log('Line number ' + lineno + ': ' + line)
})

// let readLine = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// readLine.question('What is your name?', (answer) => {
//   console.log(`Hello, ${answer}!`)

//   readLine.close()
// })
