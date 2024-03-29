/*✔️All string methods return a new string they don't modify the original string. Strings are immutable and can only be replaced Because
once a String object is assigned to String reference the object value cannot be changed.

slice(start,end)                : Extract the part of string and return that part in a new string (0, -2)
substring(start,end)            : Same as slice but you can't specify nagative index at the end parameter (0, 4) or it will swap the values autmatically
substr()                        : DEPRECATED- second parameter specifies the length of the extracted part
indexOf(searchvalue)            : returns the index of the first occurrence in the string or -1 if not found
lastIndexOf()                   : returns the index of the last occurrence in the string or -1 if not found
search()                        : searches a string and returns the position of the match
match()                         : returns an array containing the results of matching a string against a string (or a regular expression)
replace()                       : Replaces a specified value with another value in a string
concat()                        : The concat() method can be used instead of the plus operator
includes()                      : Returns true if a string contains a specified value
toUpperCase()                   : convert to uppercase
toLowerCase()                   : convert to lowercase
trim()                          : removes whitespace from both ends
trimStart()                     : removes whitespace from the start of a string
trimEnd()                       : removes whitespace from the end of a string
padStart()                      : pads a string with another string at the beginning
padEnd()                        : pads a string with another string in the end
charAt()                        : returns the character at a specified index (position) in a string
startsWith()                    : returns true if a string begins with a specified value
endsWith()                      : returns true if a string ends with a specified value
repeat()                        : returns a string with a number of copies of a string
*/

//✔️slice() method - Extract the part of string and return that part in a new string (0, -2)
var str = "Apple, Banana, Orange";
let res = str.slice(0, 4);
console.log(res);                           //Output: Appl not 'e' as it does not include end | there is no splice method for strings

//✔️substring(start,end) - Same as slice but you can't specify nagative index at the end parameter (0, 4) or it will swap the values autmatically
var str = "Apple, Banana, Orange";
let res1 = str.substring(0, 4);
console.log(res1);                          //Appl

//❌substr() - second parameter specifies the length of the extracted part.
var str = "Apple, Banana, Kiwi";
let part = str.substr(7, 2);
console.log(part);                         //Ba

/*Difference in slice and substring
1. In case of substring() it swaps the arguments when start>stop where the slice() returns the empty string
2. In case of substring() negative arguments are treated as 0 where the slice() returns the empty string
3. In case of substring the typeof value is string whereas in slice its the original data type
*/

//✔️ trim() method - Remove whitespaces from both sides of a string
var strr = "         Hello World        ";
console.log(strr.trim());                   //Hello World

//✔️ split() method - Convert string into an array
var strr = "a,b,c,d,e,f";
console.log(strr.split(","));               //[ 'a', 'b', 'c', 'd', 'e', 'f' ]

//✔️ join() method  - Convert array into string 
var arr = ["a", "b", "c", "d", "e", "f"];
console.log(arr.join("-"));                 //a-b-c-d-e-f

//✔️ indexOf() method - Returns the index of the first occurrence in the string or -1 if not found
let text = "Hello world, welcome to the universe.";
console.log(text.indexOf("w"));            //6

//✔️ lastIndexOf() method -  returns the index of the last occurrence of a specified text in a string
let loc = "Please locate where 'locate' occurs!";
console.log(loc.lastIndexOf("locate"));    //21

//Both methods accept a second parameter as the starting position for the search:

//✔️ search()  - method searches a string for a specified value and returns the index position of the match:
let t = "Visit Lucknow!";
console.log(t.search("Lucknow"));         //6

/*NOTE: The only difference b/w search() and indexOf() is:
    The search() method cannot take a second start position argument
    The indexOf() method cannot take powerful search values (regular expressions)
*/

//✔️ match() - returns an array containing the results of matching a string against a string (or a regular expression)
let tex = "The rain in SPAIN";
console.log(tex.match("ain"));          //['ain',index: 5,input: 'The rain in SPAIN',groups: undefined]

//✔️ replace() - Replaces a specified value with another value in a string:
let txt = "I am Sagar Verma";
console.log(txt.replace("Sagar", "Ajay"));  //To replace all matches, use rgx /Sagar/g flag (global match):

//✔️ concat() - similar to plus operator
console.log("Hello".concat(" ", "World!"));

//✔️ includes() - returns true if a string contains a specified value.
let te = "Hello world, welcome to the universe.";
console.log(te.includes("world"));          //true

//✔️ toUpperCase()  - convert to uppercase
let t1 = "Hello World!";
console.log(t1.toUpperCase());

//✔️ toLowerCase()  - convert to lowercase
let t2 = "Hello World!";
console.log(t2.toLowerCase());

//✔️ trim() - removes whitespace from both ends
let t3 = "     Whitespaces     ";
console.log(t3.trimStart());

//✔️ trimStart() - removes whitespace from the start of a string
let t4 = "     I am sagar";
console.log(t4.trimStart());

//✔️ trimEnd() - removes whitespace from the end of a string
let t5 = "I am sagar     ";
console.log(t5.trimEnd());

//✔️ padStart() - pads a string with another string at the beginning
let t6 = "5";
console.log(t6.padStart(4, "x"));

//✔️ padEnd() - pads a string with another string in the end
let t7 = "5";
console.log(t7.padEnd(4, "0"));

//✔️ charAt() - returns the character at a specified index (position) in a string
let t8 = "Dogecoin";
console.log(t8.charAt(0));

//✔️ startsWith() - returns true if a string begins with a specified value
let t9 = "learning japanese";
console.log(t9.startsWith("learning"));

//✔️ endsWith() - returns true if a string ends with a specified value
let t10 = "learning japanese";
console.log(t10.endsWith("japanese"));

//✔️ repeat() - returns a string with a number of copies of a string
let t11 = "Hello world!";
console.log(t11.repeat(2));