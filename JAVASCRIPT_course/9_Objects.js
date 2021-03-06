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
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  function countOnline(usersObj) {
    for (let user in usersObj) {
        return(usersObj[user])
    }
  }
  console.log(countOnline(users));

//✔️ Object.keys() method returns an array of a given object's own properties.
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  function getArrayOfUsers(obj) {
    return Object.keys(obj); //return an array of keys
  }
  console.log(getArrayOfUsers(users));