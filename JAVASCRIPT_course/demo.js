// var myFriends = {
//   name: "Sagar",
//   friend: "Pratik",
//   collegue: "Anjali"
// }
// for(var elements in myFriends){
//     console.log(elements);
// }

// //for-of
// var myFriends = {
//   name: "Sagar",
//   friend: "Pratik",
//   collegue: "Anjali"
// }
// for(var friend of myFriends){

//     console.log(friend);
// }

let person = {name: "SpongeBob", lastName: "SquarePants", age:  34}
for (let property in person) {
  console.log(`${property}: ${person[property]}`);
}