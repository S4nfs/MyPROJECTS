/*✔️Extracting String parts methods
1. slice(start,end)                   : Extract the part of string and return that part in a new string (0, -2)
2. substr(start,end)                  : Same as slice but you can't specify nagative index at the end parameter  (0, 4)    
*/

var str = "Apple, Banana, Orange";
let res = str.slice(0, 4);
console.log(res);                     //Output: Appl not 'e' as it does not include end | there is no splice method for strings

var str = "Apple, Banana, Orange";
let res1 = str.substring(0, 4);
console.log(res1);


//✔️trim() method                    : Remove whitespaces from both sides of a string
var strr = "         Hello World        ";
console.log(strr.trim());


//✔️split() method                   : Convert string into an array
var strr = "a,b,c,d,e,f";
console.log(strr.split(","));

