// ✔️Arrays--------------------------------------------------------------------------------------------------------------------
var myfriends = new Array; //optional
var myfriends = ["Sagar", 30, "Male", "Pratik", 29, "Male", "Anjali", 28, "Female"]; //you can put anything in javascript array


var myFriends = ["Sagar", "Pratik", "Anjali"];
console.log(myFriends[0]);
console.log(myFriends.length);

for (var i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}

// ✔️ For-in[best for Objects], For-of & ForEach [best for arrays] ---------------------------------------------------------------------------
var myFriends = ["Sagar", "Pratik", "Anjali"];
for (var elements in myFriends) {
    console.log(elements);                                      //return index number (0,1,2) 
    //console.log(`${elements} : ${myFriends[elements]}`);       //but key:value if myFriends is an object
}

//For-of
var myFriends = ["Sagar", "Pratik", "Anjali"];
for (var friend of myFriends) {
    console.log(friend);                                  //returns "Sagar","Pratik","Anjali"         
}

//forEach
var myFriends = ["Sagar", "Pratik", "Anjali"];
myFriends.forEach(function (element, index, array) {    //ForEach is just a combination of For-in & For-of loop
    console.log(element)
})

var message = {
    error: ["Error1", "Error2", "Error3"],
    success: ["Success1", "Success2", "Success3"]
}

Object.entries(message).forEach(key => {
    message([key].forEach(value => {
        console.log(`${key} and the value is ${value}`);
    }))
})

//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐   ARRAY METHODS  ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
/* 
map()       - It applies a given function on all the elements of the array and returns the updated array
reduce()    - It reduces the array to a single value
filter()    - It filters the array based on the condition provided
indexOf()   - It returns the index of the first occurrence of the given element
find()      - It returns the value of the first occurrence of the given element
pop()       - removes the last element of an array and returns it
push()      - adds one or more elements to the end of an array and returns the new length of the array
shift()     - removes the first element of an array and returns it
unshift()   - method adds one or more elements to the beginning of an array and returns the new length of the array.
splice(indextochange, howmany, additem1...2..) - return a part of an array and overwrites the original array.
slice(indextochange, untillement/❗not start from substring starts from beginning) - It doesn’t mutate (or change the original array)
sort()      - sorts the elements as strings in alphabetical and ascending order with modified original array
split()     - splits a string into an array of substrings
*/


//✔️ Map method() -  It applies a given function on all the elements of the array and returns the updated array-------------------
const x = [0, 1, 2, 3];
function addOne(number) {
    return number + 1;
}
console.log(x.map(addOne)); //Output: [ 1, 2, 3, 4 ]    


//✔️ Reduce method() - reduces all the elements of the array to a single value by repeatedly applying a function------------------
const arr3 = [5, 6, 2];
const sum = arr3.reduce((accumulator, currElem, index, arr) => {            //accumulator means Collecting               
    return accumulator += currElem;                                         //(+=) adds a value to a variable     
})
console.log(sum);

//✔️ filter() - method creates a new array filled with elements that pass a test provided by a function
const prices = [200, 300, 350, 400, 450, 500, 600];
const newPriceTag = prices.filter((elem, index) => {   //filter() = return an array of the given elements
    return elem < 400;

})
console.log(newPriceTag);

// ✔️ Searching $ Filter in an arrays -------------------------------------------------------------------------------------------
var myFriendz = ["Sagar", "Pratik", "Anjali", "Pratham", "Devendra"];
console.log(myFriendz.indexOf("Pratham"));            //indexof() = returns index position CASE-SENSITIVE if found else -1
console.log(myFriendz.includes("Pratham"));           //incudes() = check if the element exists and returns true


//✔️ find() - returns the first element of the array that satisfies the provided testing function-------------------------------
const prices = [200, 300, 350, 400, 450, 500, 600];
const findElementoz = prices.find((currVal) => {       //find() = problem is that it only returns one element, here 200
    return currVal < 400;
});

console.log(findElementoz);

//✔️ pop() - removes the last element of an array and returns it
const months = ['Jan', 'Mar', 'Aug', 'Sept', 'Nov', 'Oct'];
const lastMonth = months.pop();
console.log(months);

//✔️ push() - adds one or more elements to the end of an array and returns the new length of the array
const months = ['Jan', 'Mar', 'Aug', 'Sept', 'Nov', 'Oct'];
const newMonth = months.push("Dec");
console.log(months);

//✔️ shift() - removes the first element of an array and returns it
const months = ['Jan', 'Mar', 'Aug', 'Sept', 'Nov', 'Oct'];
const firstMonth = months.shift();
console.log(months);

//✔️ unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
const months = ['Jan', 'Mar', 'Aug', 'Sept', 'Nov', 'Oct'];
const newMonth = months.unshift("Dec");
console.log(months);                                                     //Output: [ 'Dec', 'Jan', 'Mar', 'Aug', 'Sept', 'Nov', 'Oct' ]
console.log(newMonth);                                                   //Output: 7

//✔️ splice(indextochange, howmany to remove, additem1...2..) - return a part of an array and overwrites the original array.
const months = ['Jan', 'Mar', 'Aug', 'Sept', 'Nov', 'Oct'];
const newMonth = months.splice(6, 0, "Dec");                             //1 Add Dec to last
console.log(months);

const monthUpdate = months.splice(1, 1, 'March');                        //3 Insert
console.log(months);
console.log(monthUpdate);                                                //2 return only the deleted element value

// OR Maybe you are not GOD who knows where that element was
const months = ['Jan', 'Mar', 'Aug', 'Sept', 'Nov', 'Oct'];
const indexOfMonths = months.indexOf('Mar');
if (indexOfMonths != -1) {
    const monthUpdate = months.splice(indexOfMonths, 1, 'March');
    console.log(months);
}

const months = ['Jan', 'Mar', 'Aug', 'Sept', 'Nov', 'Oct'];
const indexOfMonths = months.indexOf('Aug');
const monthDelete = months.splice(indexOfMonths, 1);                    //4 Delete
console.log(months);

//✔️ slice(indextochange, untillElement/❗not start from substring starts from beginning) - It doesn’t mutate (or change the original array)
const months = ['Jan', 'Mar', 'Aug', 'Sept', 'Nov', 'Oct'];
const newMonth = months.slice(1, 3);                                    //output: [ 'Mar', 'Aug' ]

//✔️ sort() - sorts the elements as strings in alphabetical and ascending order
const months = ['Jan', 'Mar', 'Aug', 'Sept', 'Nov', 'Oct'];
const newMonth = months.sort();
console.log(newMonth);

//for numbers we use additional compare function
function getIndexToIns(arr) {
    function compareNumbers(a, b) // -ve return value means 'a' first and +ve return value means 'b' first
    {
        return a - b;             // b - a for descending order
    }
    return arr.sort(compareNumbers);
}
console.log(getIndexToIns([3, 10, 5]));

// sort an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = map(numbers, (val) => {
    return val * 2;
}
console.log(newNumbers);

//✔️ split() - splits a string into an array of substrings
let text = "How are you doing today?"; //it take string as value
const myArray = text.split(" ", 3);





/* ✔️EXERCISE:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Multiply each element by 2 and return only those elements which are greater than 10 */

let arr = [2, 3, 4, 6, 8];
let outarr = arr.map((outpitelement) => {                               //👉 Can be written In Single line: 
    return outpitelement * 2;
}).filter((finalelement) => {
    return finalelement > 10;
})
// 👇Single line: (using => instead of return)
// let outarr = arr.map((outpitelement) => outpitelement * 2).filter((finalelement) => finalelement > 10);
console.log(outarr);


function map(arr, fn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        newArr.push(fn(val))
    }
    return newArr;
}