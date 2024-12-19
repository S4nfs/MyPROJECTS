/*Rest and Spread Operators (ES6)

The spread operator allows us to spread the value of an array (or any iterable) across zero or more arguments in a function or elements in an array (or any iterable). 

The rest parameter allows us to pass an indefinite number of parameters to a function and access them in an array.
*/

//Rest-----------------------------------------------------------
function addnumbers(...params) {
    //takes all in an array [1, 2, 6, 3] so reduce to single value
    const result = params.reduce((accumulator, currElem) => {
        return accumulator += currElem;
    })
    return result;
}
const res = addnumbers(1, 2, 6, 3);
console.log(res);

//Spread---------------------------------------------------------
function getNames(name1, name2, name3) {
    console.log(name1, name2, name3);
}
var names = ["Ajay", "Sagar", "Prateek"];
getNames(names[0], names[1], names[2]);     //Ajay Sagar Prateek
getNames(...names)                          //Ajay Sagar Prateek
getNames.apply(null, names)                 //apply(this, arr) is same as call() but it is used to pass array as argument

