
//The JavaScript Math object allows you to perform mathematical tasks on numbers.
x = 6.5;
arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
console.log(Math.round(x))	    //Returns x rounded to its nearest integer                   7
console.log(Math.ceil(x))       //Returns x rounded up to its nearest integer                7
console.log(Math.floor(x))	    //Returns x rounded down to its nearest integer              6
console.log(Math.trunc(x))	    //Returns the integer part of x(new in ES6)                  6
console.log(Math.sign(x))       //returns -1 if negative, 0 if null, 1 if positive           1
console.log(Math.pow(8, 2))     //Math.pow(x, y) returns the value of x to the power of y    64
console.log(Math.sqrt(x))       //returns the square root of x                               8
console.log(Math.abs(x))        //returns the absolute (positive) value of x                 6.5
console.log(Math.min(0, 150, 30, -200)) //returns the lowest in a list of arguments          -200
console.log(Math.max(0, 150, 30, -200)) //returns the highest value in a list of arguments   150
console.log(Math.random())      //returns a random number between 0 (inclusive), and 1 (exclusive) 0 - 0.9
console.log(Math.imul(3, 4));   //retuens the product of two numbers



// When you sort an array with .sort(), it assumes that you are sorting strings. When sorting numbers, the default behavior will not sort them properly.The function that you pass tells how to sort the elements. It takes two parameters (a and b) that represent any two elements from the array. How the elements will be sorted depends on the function’s return value:

//     if it returns a negative value, the value in a will be ordered before b.
//     if it returns 0, the ordering of a and b won’t change.
//     if it returns a positive value, the value in b will be ordered before a.

// When you pass the function (a, b) => a - b, you’re telling the .sort() function to sort the numbers in ascending order.
console.log(arr.sort((a, b) => a - b))