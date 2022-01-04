/*✔️ What is an Object?
An object is a collection of properties and methods. 
Object = School bag


There are two ways an object can be accessed in the end
1. Dot Notation     - you can see below bioData.myname to access value "Sagar Verma"
2. Bracket Notation - you can also use bioData["myname"] to access value "Sagar Verma" (useful if you have a key with spaces)

*/


//✔️How to create an object (that include both variables and function)?
// let bioData = {
//  // Key    : "Value",
//     myname : "Sagar",
//     myage  : 30,
//     getData (){                      //if a function is call inside an object we call it now "method" usually
// console.log(`My name is ${bioData.myname} and my age is ${bioData.myage}`);
//     }
// }
// bioData.getData();


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



//✔️ Objects to arrays & array to onjects conversion
const person = {name : 'Sagar', age : 30 };
console.log(Object.values(person));                                    
//vice-versa
const arrObj = Object.entries(person);
console.log(Object.fromEntries(arrObj));
   