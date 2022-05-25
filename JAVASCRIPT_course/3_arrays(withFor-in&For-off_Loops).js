// ✔️Arrays--------------------------------------------------------------------------------------------------------------------
var myfriends = new Array; //optional
var myfriends = ["Sagar", 30, "Male", "Pratik", 29, "Male", "Anjali", 28, "Female"]; //you can put anything in javascript array


var myFriends = ["Sagar","Pratik","Anjali"];
console.log(myFriends[0]);
console.log(myFriends.length);

for(var i=0; i<myFriends.length; i++){
    console.log(myFriends[i]);
}

// ✔️ For-in & For-of & ForEach Loops only in arrays ---------------------------------------------------------------------------
var myFriends = ["Sagar","Pratik","Anjali"];
for(var elements in myFriends){                       //return index number
    console.log(elements);
}

 
var myFriends = ["Sagar","Pratik","Anjali"];
myFriends.forEach(function(element, index, array){    //ForEach is just a combination of For-in & For-of loop
    console.log(element)
})

//✔️ Map method() -  It applies a given function on all the elements of the array and returns the updated array-------------------
const x = [0,1,2,3]; 
function addOne(number){
    return number + 1;
}
console.log(x.map(addOne)); //Output: [ 1, 2, 3, 4 ]    


//✔️ Reduce method() - reduces all the elements of the array to a single value by repeatedly applying a function------------------
const arr3 = [5, 6, 2];    
const sum = arr3.reduce((accumulator, currElem, index, arr) => {            //accumulator means Collecting               
    return accumulator += currElem;                                         //(+=) adds a value to a variable     
})
console.log(sum);

// ✔️ Searching $ Filter in an arrays -------------------------------------------------------------------------------------------
var myFriendz = ["Sagar","Pratik","Anjali","Pratham","Devendra"];
console.log(myFriendz.indexOf("Pratham"));            //indexof() = returns index position CASE-SENSITIVE
console.log(myFriendz.includes("Pratham"));           //incudes() = check if the element exists and returns true



const prices = [200,300,350,400,450,500,600];
const findElementoz = prices.find((currVal) => {       //find() = problem is that it only returns one element, here 200
return currVal < 400;
});

console.log(findElementoz);


const prices = [200,300,350,400,450,500,600];
const newPriceTag = prices.filter((elem, index) => {   //filter() = return an array of the given elements
return elem < 400; 

})
console.log(newPriceTag);

/*✔️ splice method (Do CRUD operations in an array---------------------------------------------------------------------------
splice(indextochange, Delete/Not, whatToChange)

1. Add Dec month at the end of an Array
2. What is the return value of return method
3. Update mar to March
4. Delete Aug month from an array */
const months = ['Jan','Mar','Aug','Sept','Nov','Oct'];
const newMonth = months.splice(6, 0, "Dec");                             //1 Add
console.log(months); 

const monthUpdate = months.splice(1, 1, 'March');                        //3 Insert
console.log(months);
console.log(monthUpdate);                                                //2 return only the deleted element value

// OR Maybe you are not GOD who knows where that element was
const months = ['Jan','Mar','Aug','Sept','Nov','Oct'];
const indexOfMonths = months.indexOf('Mar');
if(indexOfMonths != -1){
    const  monthUpdate = months.splice(indexOfMonths, 1, 'March');
    console.log(months);
}

const months = ['Jan','Mar','Aug','Sept','Nov','Oct'];
const indexOfMonths = months.indexOf('Aug');                    
const  monthDelete = months.splice(indexOfMonths, 1);                    //4 Delete
console.log(months);

//✔️ unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
const months = ['Jan','Mar','Aug','Sept','Nov','Oct'];
const newMonth = months.unshift("Dec");
console.log(months);                                                        //Output: [ 'Dec', 'Jan', 'Mar', 'Aug', 'Sept', 'Nov', 'Oct' ]
console.log(newMonth);                                                      //Output: 7



/*EXERCISE:
Multiply each element by 2 and return only those elements which are greater than 10 */

let arr = [2, 3, 4, 6, 8];
let outarr = arr.map((outpitelement) => {                                   //👉 Can be written In Single line: 
    return outpitelement * 2;                            
}).filter((finalelement) => {
    return finalelement > 10;
})
// 👇Single line: (using => instead of return)
// let outarr = arr.map((outpitelement) => outpitelement * 2).filter((finalelement) => finalelement > 10);
console.log(outarr);


function map(arr, fn){
    const newArr = [];
    for(let i=0; i<arr.length; i++){
        let val=  arr[i];
        newArr.push(fn(val))
    }
    return newArr;
}