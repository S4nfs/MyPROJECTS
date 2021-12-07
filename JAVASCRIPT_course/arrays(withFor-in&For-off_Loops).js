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
// console.log(myFriendz.indexOf("Pratham"));          //indexof = returns index position
// console.log(myFriendz.includes("Pratham"));         //incudes = check if the element exists and returns true



const prices = [200,300,350,400,450,500,600];
const findElementoz = prices.find((currVal) => {       //find = problem is that it only returns one element, here 200
return currVal < 400;
});

console.log(findElementoz);





