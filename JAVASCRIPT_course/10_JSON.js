//Convert Javascript object to JSON String--------------------------------------------------------

obj = {
  name: 'Sagar',
  age: 25,
  profession: 'Software Engineer',
}
jso = JSON.stringify(obj)
console.log(jso) // {"name":"Sagar","age":25,"profession":"Software Engineer"} //Output
console.log(typeof jso)

//Convert JSON String to Javascript object---------------------------------------------------------

parsed = JSON.parse(`{"name":"Sagar","age":25,"profession":"Software Engineer"}`)
console.log(parsed) // {name: "Sagar", age: 25, profession: "Software Engineer"}  //Output
console.log(typeof parsed)

/* Deep & Shallow Copy - In JavaScript, standard built-in object-copy operations (spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), Object.assign(), and Object.create()) do not create deep copies (instead, they create shallow copies).

One way to make a deep copy of a JavaScript object, if it can be serialized, is to use JSON.stringify() to convert the object to a JSON string, and then JSON.parse() to convert the string back into a (completely new) JavaScript object:
*/

var myfriends = new Array('Sagar', 49, 'Male', 'Alok', 29, [5, 7, 9])
var myfriends2 = [...myfriends] //shallow copy

myfriends[5].push(10)
myfriends.push(10)
console.log(myfriends) //[ 'Sagar', 30, 'Male', 'Pratik', 29, [ 5, 7, 9, 10 ], 10 ]
console.log(myfriends2) //[ 'Sagar', 30, 'Male', 'Pratik', 29, [ 5, 7, 9, 10 ] ]
console.log('\n')

var myFriends3 = JSON.parse(JSON.stringify(myfriends)) //deep copy, this will add 10
myfriends[5].push(11)
myfriends.push(11)
console.log(myfriends) //['Sagar', 49, 'Male', 'Alok', 29, [5, 7, 9, 10, 11], 10, 11]
console.log(myFriends3) //[ 'Sagar', 49, 'Male', 'Alok', 29, [ 5, 7, 9, 10 ], 10 ]

//A small Vscode Tip: If you came across consoling some data with nested objects, you'll see something like the below structure in vs-code terminal which you can make it readable with these two tricks:

const unreadebleData = {
  choices: [
    {
      message: {
        role: 'assistant',
      },
    },
  ],
} //you get { choices: [ { message: [Object] } ] } when consoling

console.dir(unreadebleData, { depth: null, colors: true }) //OR
console.log(JSON.stringify(unreadebleData, null, 2)) //specify an indentation level as a third argument, making the results more readable.  It is also useful when you want to print deep inside an object
