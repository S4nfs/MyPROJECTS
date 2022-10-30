// const userz = {
//   Alan: {
//     online: false
//   },
//   Jeff: {
//     online: true
//   }
// }
// for (let user in userz) {
//   console.log(userz[user])
// }

// var str = ["Apple", "Banana", "Orange"]


function receive(name) {
  var x
  "use strict";
  if (name == "Sagar") {
    x = "ok";                    //Initialization
  } else {
    x = "not ok";
  }
  x;    // x is hoisted to the top //Declaration
  console.log(x)
}
receive("Sagar");