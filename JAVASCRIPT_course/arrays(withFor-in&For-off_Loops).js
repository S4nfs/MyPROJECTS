// ✔️Arrays--------------------------------------------------------------------------------------------------------------------
// var myfriends = new Array; //optional
// var myfriends = ["Sagar", 30, "Male", "Pratik", 29, "Male", "Anjali", 28, "Female"]; //you can put anything in javascript array


var myFriends = ["Sagar","Pratik","Anjali"];
// console.log(myFriends[0]);
// console.log(myFriends.length);

// for(i=0; i<myFriends.length; i++){
//     console.log(myFriends[i]);
// }

// ✔️ For-in & For-of & ForEach Loops only in arrays ---------------------------------------------------------------------------
// for(let elements in myFriends){                  //return index number
//     console.log(elements);
// }

// for(let elements of myFriends){                  //return array elements
//     console.log(elements);
// }

// myFriends.forEach(function(element, index, array){  //ForEach is just a combination of For-in & For-of loop
//     console.log(element)
// })


// ✔️ Searching $ Filter in an arrays ---------------------------------------------------------------------------
// var myFriendz = ["Sagar","Pratik","Anjali","Pratham","Devendra"];
// console.log(myFriendz.indexOf("Pratham"));            //indexof() = returns index position
// console.log(myFriendz.includes("Pratham"));           //incudes() = check if the element exists and returns true



// const prices = [200,300,350,400,450,500,600];
// const findElementoz = prices.find((currVal) => {       //find() = problem is that it only returns one element, here 200
// return currVal < 400;
// });

// console.log(findElementoz);


// const prices = [200,300,350,400,450,500,600];
// const newPriceTag = prices.filter((elem, index) => {   //filter() = return an array of the given elements
// return elem < 400; 

// })
// console.log(newPriceTag);

/*✔️ splice method (add or remove elements in an array-------------------------------------------------------------------------
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
console.log(monthUpdate);                                               //2 return only the deleted element value

// OR Maybe you are not GOD who knows where that element was
// const indexOfMonths = months.indexOf('Mar');
// if(indexOfMonths != -1){
//     const  monthUpdate = months.splice(indexOfMonths, 1, 'March');
//     console.log(months);
// }

const indexOfMonths = months.indexOf('Aug');                    
const  monthDelete = months.splice(indexOfMonths, 1);                      //4 Delete
console.log(months);

