// let data = {
//     name: "sagar",
//     age: 28,
//     mail: "sgara@gmail.com",
//     getName: function () {
//         return this
//     }
// }


// console.log(data.getName())

// let mymap = new Map([
//     ['name', 'sagar'],
//     [true, 'programmer'],
//     [680000, 'salary']
// ])

// console.log(mymap)
// mymap.set('behavior', 'aggresive')          //set() method can also be used to set or change existing Map values        -CU
// console.log(mymap)
// console.log(mymap.get('behavior'))          //get() method gets the value of a key in a Map                             -R
// console.log(mymap.size)                     //size property returns the number of elements in a Map
// console.log(mymap.has(680000))              //has() method returns true if a key exists in a Map:
// console.log(mymap.delete('behavior'))       //delete() method removes a Map element                                     -D
// // console.log(mymap.clear())                  //clear() method removes all the elements from a Map

// for (let x of mymap) {                      //iterate Map Object
//     console.log(x)
// }

// mymap.forEach((key, val) => {
//     console.log(key);
// })

let message = {
    error: ["Error1", "Error2", "Error3"],
    success: ["Success1", "Success2", "Success3"]
}

Object.entries(message).forEach(key => {
    message([key].forEach(value => {
        console.log(`${key} and the value is ${value}`);
    }))
})