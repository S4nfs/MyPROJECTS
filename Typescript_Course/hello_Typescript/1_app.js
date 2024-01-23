"use strict";
/* Helpful resources:
https://www.typescriptlang.org/
*/
console.log("Hello Typescript");
//✔️Cheking the types-------------------------------------------------------------------------------------------------------
const add = (n1, n2, result, str) => {
    if (result) {
        let sum = n1 + n2; //avoid concatination
        console.log(str + sum);
    }
};
add(30, 5.2, true, "Result is: ");
//The key difference is: javascript uses "dynamic types" resolved at (runtime) whereas Typescript uses "static types" set during (development)
//✔️Typescript work flawless when checking errors, repeat "flawless". Lets see other data types like touple-----------------
const person = {
    name: "Sagar Verma",
    age: 23,
    friends: [4, "pratik", "gaurav", "ritvik", "rohan"],
    role: [2, "SWE"],
};
person.role.push(22);
// person.role[1](22); //❌ will not throw error
console.log(person);
// for (let a of person.friends) {
//     console.log(a.map((element) => element ))  //❌ will not throw error in normal js in build time
// }
//✔️An enum is a special "class" that represents a group of constants (unchangeable variables). Comes in two flavors string and numeric
var Role;
(function (Role) {
    Role[Role["Enterprise"] = 0] = "Enterprise";
    Role[Role["Admin"] = 44] = "Admin";
    Role[Role["Moderator"] = 45] = "Moderator";
    Role["Client"] = "client";
})(Role || (Role = {}));
console.log(Role.Enterprise); //0
console.log(Role.Admin); //44
console.log(Role.Moderator); //45
console.log(Role.Client); //"client"
//✔️Union type "|"
const sum = (n1, n2) => {
    let res;
    if (typeof n1 === "number" && typeof n2 === "number") {
        res = n1 + n2;
    }
    else {
        res = n1.toString() + n2.toString();
    }
    return res;
};
console.log(sum("30", "20"));
const groceries = ["coffee", 2, "flour"];
//✔️types in Functions------------------------------------------------------------------------------------------------
// number type
let addNumbers = (n1, n2) => {
    //ensure the return type should be number
    return n1 + n2;
};
// void type
function nothing(num) {
    //void as it did not return anything
    console.log("Result in function is: ", num);
}
/* unknown type
You can assign anything to unknown type but you have to do a type check or type assertion to operate on unknown
You can assign anything to any type and you can perform any operation on any
*/
let iDontCare;
let example;
iDontCare = 5;
iDontCare = "Max";
if (typeof iDontCare === "string")
    example = iDontCare; //without typechecking throw error
// function whoAmI(animal: customUnionType) {
//   if ("dob" in animal)
//     //need to explicitly check "dob" to avoid compile error, works with interface also
//     console.log("Hi, ", animal.name, "DOB: ", animal.dob);
// }
//------------OR-------------
function whoAmI(animal) {
    let result;
    switch (animal.kind) {
        case "B":
            result = animal.speed;
            break;
        case "D":
            result = animal.speed;
            break;
    }
    console.log("Top Speed", result);
}
whoAmI({
    kind: "B",
    speed: 110,
    name: "Dove",
    food: [],
});
/* types in functions */
let iWantToUseThatFunction; //function types allow us to describe which type of functions specifically we want to use somewhere with expected value in parameters that matches
iWantToUseThatFunction = addNumbers;
console.log(iWantToUseThatFunction(8, 8));
//callbacks
function addHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addHandle(22, 22, (result) => {
    console.log(result);
});
const aded = (a, b) => {
    return a + b;
};
console.log(aded(5, 5));
//Rest & Spread operator
const addingNumbers = (...numbers) => {
    return numbers.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
};
console.log("Rest of numbers: ", addingNumbers(5, 10, 66, 87, 1.2));
const spd = {
    name: "Sagar",
    height: 5.6,
    weight: 65,
};
const spreadCopied = Object.assign({}, spd);
console.log("Spread: ", spreadCopied);
//✔️Type Casting--------------------------------------------------------------------------------------------------------
const myVariable = 123;
const myString = myVariable;
console.log("Type Casting", typeof myString);
function addme(a, b) {
    return a + b;
}
const fetchUser = {
    name: "Sage",
    profession: "Thinker",
    // skill: {
    //   language:"PHP"
    // }
};
//✔️Nullish Coalescing-----------------------------------------------------------------------------------------------
let beNotNull = "";
// var beNotNullorUndefined = beNotNull || "DEFAULT"; //returns if undefined|null|falsy, empty value treated as falsy
var beNotNullorUndefined = beNotNull !== null && beNotNull !== void 0 ? beNotNull : "DEFAULT"; //returns if only undefined|null
console.log(beNotNullorUndefined);
//✔️Generic Type - increase resusablity of code and types below 4 exapmples-------------------------------------------
function identity(arg) {
    return arg;
}
console.log(identity("Sagar is a generic type")); //here we are explicitly passing types to our identifier T
console.log(identity(25));
// let genericObj(obj1:object, obj2:object){ //TypeScript compiler cannot infer the shape of these objects.
//   return Object.assign(obj1, obj2)
// }
// let mergedObject = genericObj({firstname:"Sagar"}, {lastname:"Verma"})
let genericObj = (o1, o2) => {
    //using constraints 'extends'
    return Object.assign(o1, o2);
};
let mergedObject = genericObj({ firstname: "Sagar" }, { lastname: "Verma" });
console.log(mergedObject);
function loggingIdentity(arg) {
    return "LengthWise: " + arg.length;
}
console.log(loggingIdentity("Sagar"));
let myOwnObject = (obj, key) => {
    //using constraints 'keyof'
    return obj[key];
};
console.log(myOwnObject({ name: "Sagar" }, "name"));
//Generic Class
class Dropbox {
    constructor() {
        this.data = [];
    }
    addimage(url) {
        this.data.push(url);
    }
    removeImage(url) {
        this.data.splice(this.data.indexOf(url), 1);
    }
    getAllItems() {
        return [...this.data];
    }
}
const storeImages = new Dropbox();
storeImages.addimage("kakashi.png");
storeImages.addimage("Itachi.png");
storeImages.removeImage("kakashi.png");
console.log(storeImages.getAllItems());
//Generic utility types helpful
let max = ["Keyboard", "Mouse"]; // max.push["Santa claus"];  //gives error
