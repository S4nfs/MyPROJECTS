/*✔️All string methods return a new string they don't modify the original string. Strings are immutable and can only be replaced
slice(start,end)                : Extract the part of string and return that part in a new string (0, -2)
substring(start,end)            : Same as slice but you can't specify nagative index at the end parameter (0, 4) or it will swap the values autmatically
indexOf(searchvalue)            : Returns the index of the first occurrence in the string or -1 if not found
lastIndexOf() method -          : Returns the index of the last occurrence in the string or -1 if not found
replace()                       : Replaces a specified value with another value in a string:
concat()                        : The concat() method can be used instead of the plus operator
*/

//✔️slice() method - Extract the part of string and return that part in a new string (0, -2)
var str = "Apple, Banana, Orange";
let res = str.slice(0, 4);
console.log(res);                     //Output: Appl not 'e' as it does not include end | there is no splice method for strings

//✔️substring(start,end) - Same as slice but you can't specify nagative index at the end parameter (0, 4) or it will swap the values autmatically
var str = "Apple, Banana, Orange";
let res1 = str.substring(0, 4);
console.log(res1);                    //Appl

/*Difference in slice and substring
1. In case of substring() it swaps the arguments when start>stop where the slice() returns the empty string
2. In case of substring() negative arguments are treated as 0 where the slice() returns the empty string
3. In case of substring the typeof value is string whereas in slice its the original data type
*/

//✔️trim() method - Remove whitespaces from both sides of a string
var strr = "         Hello World        ";
console.log(strr.trim());

//✔️split() method - Convert string into an array
var strr = "a,b,c,d,e,f";
console.log(strr.split(","));

//✔️join() method  - Convert array into string 
var arr = ["a", "b", "c", "d", "e", "f"];
console.log(arr.join("-"));

//✔️indexOf() method - Returns the index of the first occurrence in the array or -1 if not found
let text = "Hello world, welcome to the universe.";
console.log(text.indexOf("w"));        //Output: 6

//✔️lastIndexOf() method -  returns the index of the last occurrence of a specified text in a string
let loc = "Please locate where 'locate' occurs!";
console.log(loc.lastIndexOf("locate"));

//✔️replace() - Replaces a specified value with another value in a string:
let txt = "I am Sagar Verma";
console.log(txt.replace("Sagar", "Ajay"));  //To replace all matches, use rgx /Sagar/g flag (global match):

//✔️concat() - The concat() method can be used instead of the plus operator
console.log("Hello".concat(" ", "World!")); 