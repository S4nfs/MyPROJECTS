//A JavaScript Set is a collection of unique values.

const letters = new Set();

// add() method add values to the Set
letters.add("a");
letters.add("b");
letters.add("c");


// has()
console.log(letters.has("b"))

// values() method returns an Iterator object containing all the values in a Set which you can iterate
console.log(letters.values())   //{ 'a', 'b', 'c' }

// .keys() returns the same as values() becoz a Set has no keys.
console.log(letters.keys())

// .entries()
console.log(letters.entries())  //{ [ 'a', 'a' ], [ 'b', 'b' ], [ 'c', 'c' ] }

// forEach()
letters.forEach((val) => console.log(val))

// instanceof
console.log(letters instanceof Set)  // Returns true

// delete() method is used to delete the elements from Set object
console.log(letters.delete("c"))

// clear() method is used to remove all the elements from Set object
// console.log(letters.clear())

for (let key in letters.values()) {
    console.log(key)
}


