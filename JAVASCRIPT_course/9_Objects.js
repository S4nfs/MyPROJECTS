/*✔️ What is an Object?
An object is a collection of properties and methods. 
Object = School bag

There are different ways to create new objects:
1. Create a single object, using an object literal ex.below examples.
2. Create a single object, with the keyword new.
3. Define an object constructor, and then create objects of the constructed type.
4. Create an object using Object.create().


There are two ways to access objects properties using:
1. Dot Notation     - you can see below bioData.myname to access value "Sagar Verma"
2. Bracket Notation - you can also use bioData["myname"] to access value "Sagar Verma" (useful if you have a key with spaces OR with arrays)

*/


//✔️How to create an object (that include both variables and function)?
// let bioData = {
// //Key/property : "Value",
//     myname : "Sagar",
//     myage  : 30,
//     getData (){                      //if a function is call inside an object we call it now "method" usually
// console.log(`My name is ${bioData.myname} and my age is ${bioData.myage}`);
//     }
// }
// bioData.getData();

//✔️Delete a property from an object
// let bioData = {
//     myname : "Sagar",
//     myage  : 23
// }
// delete bioData.myage;
// console.log(bioData);


//✔️What if we want an object as a value inside an object ?
// let bioData = {
//         whoAmI : {
//             realName : "S4nfs",
//             companyName : "Chatnaut"
//         },
//         myname : "Sagar",
//         myage  : 30,
//        getData (){                     
//    console.log(`My name is ${bioData.myname} and my age is ${bioData.myage}`);
//        }
//    }
//    bioData.getData();
//    console.log(bioData.whoAmI.companyName);


/*✔️What is (this) object ?
Note:(this) object will not work wth fat arrow function
*/
//    var me = "Sagar";
//    function myName() {
//        console.log(this.me);
//    }
//    myName();                                                        //run on browser


//✔️ Objects to arrays & array to objects conversion
// const person = {name : 'Sagar', age : 30 };
// console.log(Object.values(person));                                    
// //vice-versa
// const arrObj = Object.entries(person);
// console.log(Object.fromEntries(arrObj));


//✔️ Check property value using hasOwnProperty method - iterate
// var obj = {
//     "animal": "cat",
//     "tree": "Eucalyptus",
//     "Language": "Japanese"
// };
// function checkmyObject(val){
//     if(obj.hasOwnProperty(val)){
//         return obj[val];
//     }else{
//         return "Not Found";
//     }
// }
// console.log(checkmyObject("tree"));

//✔️ The every method is also used to validate all properties(keys) just like hasOwnProperty method - iterate
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function isEveryoneHere(userObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    userObj.hasOwnProperty(name)
  );
}
console.log(isEveryoneHere(users));


//✔️ Iterate over all the keys in the users object using For...In
const userz = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  }
}
function countOnline(usersObj) {
  for (let user in usersObj) {
    return (usersObj[user])
  }
}
console.log(countOnline(userz));


//✔️ Object.keys()      - method returns an array of keys.
//✔️ Object.values()    - method returns an array of values or properties
//✔️ Object.entries()   - method return an array of key/values pairs 
//✔️ Object.assign()    - method assigns one object to another
//✔️ Object.seal()      - method prevents new properties from being added to the object
//✔️ new Map()          - Map holds key-value pairs where the keys can be any datatype.


//✔️ Object.keys() method returns an array of a given object's own properties.
let usersAll = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
};

console.log(Object.keys(usersAll));           //return an array of keys   [ 'Alan', 'Jeff' ]
console.log(Object.values(usersAll));         //return an array of values [ { age: 27, online: false }, { age: 32, online: true } ]
console.log(Object.entries(usersAll));        //return an array of key/values pairs 
// [
//   [ 'Alan', { age: 27, online: false } ],
//   [ 'Jeff', { age: 32, online: true } ]
// ]


//✔️ Object.assign() method assigns one object to another
const pikachu = { name: 'Pikachu 🐹' };
const stats = { hp: 40, attack: 650, defense: 80 }

// pikachu['hp'] = stats.hp;   //❌ bad way
// pikachu['attack'] = stats.attack;
// pikachu['defense'] = stats.defense;
// console.log(pikachu)

const iChooseYouPikachu = Object.assign(pikachu, stats);
console.log(iChooseYouPikachu);

const goPikachu = { ...pikachu, ...stats };
console.log(goPikachu);

//✔️ Object.seal() - method prevents new properties from being added to the object
Object.seal(stats);
stats.defense = 100;  //{ hp: 40, attack: 650, defense: 100 }
stats.power = 200     //{ hp: 40, attack: 650, defense: 100 }
console.log(stats)

//✔️ new Map() - object Map holds {key => value pairs} where the keys can be any datatype unlike normal object where it is only String.
let mymap = new Map([
  ['name', 'sagar'],
  [true, 'programmer'],
  [680000, 'salary']
])

console.log(mymap)
mymap.set('behavior', 'aggresive')          //set() method can also be used to set or change existing Map values        -CU
console.log(mymap)
console.log(mymap.get('behavior'))          //get() method gets the value of a key in a Map                             -R
console.log(mymap.size)                     //size property returns the number of elements in a Map
console.log(mymap.has(680000))              //has() method returns true if a key exists in a Map:
console.log(mymap.delete('behavior'))       //delete() method removes a Map element                                     -D
// console.log(mymap.clear())               //clear() method removes all the elements from a Map

for (let x of mymap) {                      //iterate Map Object
  console.log(x)
}

mymap.forEach((key, val) => {
  console.log(key);
})