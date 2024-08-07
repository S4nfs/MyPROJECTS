/* Helpfull resources: 
https://www.typescriptlang.org/
*/
console.log("Hello Typescript")

//✔️Cheking the types-------------------------------------------------------------------------------------------------------
const add = (n1: number, n2: number, result: boolean, str: string) => {
  if (result) {
    let sum = n1 + n2 //avoid concatination
    console.log(str + sum)
  }
}
add(30, 5.2, true, "Result is: ")

//The key difference is: javascript uses "dynamic types" resolved at (runtime) whereas Typescript uses "static types" set during (development)

//✔️Typescript work flawless when checking errors, repeat "flawless". Lets see other data types like touple-----------------
const person: {
  //     console.log(a.map((element) => element ))  //❌ will not throw error in normal js in build time
  // }
  //✔️An enum is a special "class" that represents a group of constants (unchangeable variables). Comes in two flavors string and numeric
  getFullName(): any
  name: string
  age: number
  friends: any[] //array with any type
  role: [number, string] //touple - is a typed array with predefined length and type
} = {
  getFullName: function (): string {
    return this.name + " " + this.role[1]
  },
  name: "Sagar Verma",
  age: 23,
  friends: [4, "pratik", "gaurav", "ritvik", "rohan"],
  role: [2, "SWE"],
}

person.role.push(22)
// person.role[1](22); //❌ will not throw error
console.log(person)

// for (let a of person.friends) {
//     console.log(a.map((element) => element ))  //❌ will not throw error in normal js in build time
// }

//✔️An enum is a special "class" that represents a group of constants (unchangeable variables). Comes in two flavors string and numeric
enum Role {
  Enterprise,
  Admin = 44, //numeric
  Moderator,
  Client = "client", //string
}
console.log(Role.Enterprise) //0
console.log(Role.Admin) //44
console.log(Role.Moderator) //45
console.log(Role.Client) //"client"

//✔️Union type "|"
const sum = (n1: number | string, n2: number | string) => {
  let res
  if (typeof n1 === "number" && typeof n2 === "number") {
    res = n1 + n2
  } else {
    res = n1.toString() + n2.toString()
  }
  return res
}
console.log(sum("30", "20"))

const groceries: (number | string)[] = ["coffee", 2, "flour"]

//✔️types in Functions------------------------------------------------------------------------------------------------
// number type
let addNumbers = (n1: number, n2: number): number => {
  //ensure the return type should be number
  return n1 + n2
}

// void type
function nothing(num: number): void {
  //void as it did not return anything
  console.log("Result in function is: ", num)
}

/* unknown type
You can assign anything to unknown type but you have to do a type check or type assertion to operate on unknown
You can assign anything to any type and you can perform any operation on any
*/
let iDontCare: unknown
let example: String

iDontCare = 5
iDontCare = "Max"
if (typeof iDontCare === "string") example = iDontCare //without typechecking throw error

/* never type
void is used whenever a function does not return anything explicitly (usually that means it returns undefined implicitly) and never whenever a function never returns at all.
*/
// const generateError = (message: string, code: number): never => {
//   throw { message: message, errorCode: code };
// };
// generateError("An error occured!", 500);

/*- custom type (including Descrimination type or tagged type) */
type Bird = {
  name: string
  food: string[]
  speed: number
  kind: "B" //discriminated union to check in switch case later
}

type Dog = {
  name: string
  dob: Date
  speed: number
  kind: "D"
}

type combineCustomTypeAnimal = Bird & Dog

// const animal: combineCustomTypeAnimal = {
//   // must provide values for all of the required properties, otherwise it will give compile err, here intentionally it give error becoz we are using discriminated union as kind:
//   name: "Shiba",
//   dob: new Date(),
//   food: ["Kellogg's", "bitcoin", "Redmeat"],
//   speed: 20,
//   kind: "D",
// };
// console.log(animal);

type unionCustomTypeAnimal = Bird | Dog //it takes the common in both the type, e.g name
// function whoAmI(animal: customUnionType) {
//   if ("dob" in animal)
//     //need to explicitly check "dob" to avoid compile error, works with interface also
//     console.log("Hi, ", animal.name, "DOB: ", animal.dob);
// }

//------------OR-------------
function whoAmI(animal: unionCustomTypeAnimal) {
  let result
  switch (animal.kind) {
    case "B":
      result = animal.speed
      break

    case "D":
      result = animal.speed
      break
  }
  console.log("Top Speed", result)
}

whoAmI({
  kind: "B",
  speed: 110,
  name: "Dove",
  food: [],
})

/* types in functions */
let iWantToUseThatFunction: (a: number, b: number) => number //function types allow us to describe which type of functions specifically we want to use somewhere with expected value in parameters that matches
iWantToUseThatFunction = addNumbers
console.log(iWantToUseThatFunction(8, 8))

//callbacks
function addHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}
addHandle(22, 22, (result) => {
  console.log(result)
})

const aded = (a: number, b: number) => {
  return a + b
}
console.log(aded(5, 5))

//Rest & Spread operator
const addingNumbers = (...numbers: number[]) => {
  return numbers.reduce((prev, curr) => {
    return prev + curr
  }, 0)
}
console.log("Rest of numbers: ", addingNumbers(5, 10, 66, 87, 1.2))

const spd = {
  name: "Sagar",
  height: 5.6,
  weight: 65,
}
const spreadCopied = { ...spd }
console.log("Spread: ", spreadCopied)

//✔️Type Casting--------------------------------------------------------------------------------------------------------
const myVariable: number = 123
const myString: string = myVariable as unknown as string
console.log("Type Casting", typeof myString)

//✔️Function overloading is a feature in TypeScript that allows a single function to have multiple signatures.-----------
function addme(a: number, b: number): number
function addme(a: string, b: string): string
function addme(a: any, b: any): any {
  return a + b
}

const fetchUser = {
  name: "Sage",
  profession: "Thinker",
  // skill: {
  //   language:"PHP"
  // }
}

//✔️Nullish Coalescing-----------------------------------------------------------------------------------------------
let beNotNull = ""
// var beNotNullorUndefined = beNotNull || "DEFAULT"; //returns if undefined|null|falsy, empty value treated as falsy
var beNotNullorUndefined = beNotNull ?? "DEFAULT" //returns if only undefined|null
console.log(beNotNullorUndefined)

//✔️Generic Type - increase resusablity of code and types below 4 exapmples-------------------------------------------
function identity<T>(arg: T): T {
  return arg
}
console.log(identity<string>("Sagar is a generic type")) //here we are explicitly passing types to our identifier T
console.log(identity<number>(25))

// let genericObj(obj1:object, obj2:object){ //TypeScript compiler cannot infer the shape of these objects.
//   return Object.assign(obj1, obj2)
// }
// let mergedObject = genericObj({firstname:"Sagar"}, {lastname:"Verma"})

let genericObj = <T extends object, U extends object>(o1: T, o2: U) => {
  //using constraints 'extends'
  return Object.assign(o1, o2)
}
let mergedObject = genericObj({ firstname: "Sagar" }, { lastname: "Verma" })
console.log(mergedObject)

interface LengthWise {
  length: number
}
function loggingIdentity<T extends LengthWise>(arg: T): string {
  return "LengthWise: " + arg.length
}
console.log(loggingIdentity("Sagar"))

let myOwnObject = <T extends object, O extends keyof T>(obj: T, key: O) => {
  //using constraints 'keyof'
  return obj[key]
}
console.log(myOwnObject({ name: "Sagar" }, "name"))

//generic array
const genericArray = <T>(skills: T[]): T => {
  return skills[0]
}
console.log(genericArray(["PHP", "Javascript", "Typescript"]))

//Generic Class
class Dropbox<T> {
  private data: T[] = []

  addimage(url: T) {
    this.data.push(url)
  }

  removeImage(url: T) {
    this.data.splice(this.data.indexOf(url), 1)
  }

  getAllItems() {
    return [...this.data]
  }
}
const storeImages = new Dropbox<string>()
storeImages.addimage("kakashi.png")
storeImages.addimage("Itachi.png")
storeImages.removeImage("kakashi.png")
console.log(storeImages.getAllItems())

//Generic utility types helpful
let max: Readonly<string>[] = ["Keyboard", "Mouse"] // max.push["Santa claus"];  //gives error


/*✔️ Other Utility types: Prettify, Partial, Required, Record , Pick -----------------------------------------------------------------------------
Source: https://www.typescriptlang.org/docs/handbook/utility-types.html
*/
//🔧 Prettify
interface MainType {
  name: string
  age: number
}

type NestedType = MainType &{
  isDeveloper: boolean
}

type Prettify<T> = {
    [K in keyof T]: T[K]
} & {}

type idk = Prettify<NestedType> //this contains the whole object types


//🔧 Partial & Required
interface Todo{
  title: string
  description: string
  
}
const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => { //by declaring type Partial or Required allows you to update details with/without needing to provide all properties, making your code more flexible and adaptable without using ? in properties
  return { ...todo, ...fieldsToUpdate }
}
const initialTodo: Todo = {
  title: "Learn TypeScript",
  description: "TypeScript is awesome",
}
const updatedTodo = updateTodo(initialTodo, { description: "TypeScript is awesome" })

//🔧Record - Imagine you're creating a program to manage a zoo. You have different types of animals, and each animal has a name and a description. You want to store information about each animal in an object, where the key is the animal's name, and the value is an object containing the animal's description. In short Record allows you to create a dictionary or map where the keys are strings, and the values are of a specific type.
interface AnimalInfo {
  description: string;
 }
 
 type AnimalName = "lion" | "elephant" | "giraffe";
 
 const zooAnimals: Record<AnimalName, AnimalInfo> = {
  lion: { description: "A large, powerful cat." },
  elephant: { description: "A large, intelligent mammal." },
  giraffe: { description: "A tall, long-necked mammal." },
 };
 

 //🔧 RecursivePartial & DeepPartial - Partial only affects the top-level properties of T; it does not recurse into nested properties. DeepPartial<T> is another utility type that aims to make all properties of a type T optional, including those nested within objects. However, DeepPartial is designed to handle more complex scenarios, such as arrays, sets, maps, and functions, by treating them differently from regular objects. For instance, DeepPartial leaves primitive types and their methods intact, whereas RecursivePartial treats all properties uniformly, regardless of their nature.

 interface Todo1 {
  title: string
  description: string
  location: {
    country: string;
    countryCode: string;
    street: string;
  };
}
type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};
const updateTodo1: RecursivePartial<Todo1> = {
  title: 'Make Dishes',
  location: {
    countryCode: 'FR',
  },
};

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
const updateTodo2: DeepPartial<Todo1> = {
  title: 'Make Dishes Again',
  location: {
    countryCode: 'FR',
  },
};

 //🔧 Pick -  allows you to create a new type by cherry picking specific properties from an existing type.
 type Goku = {
  powers: string;
  weight: number;
  siblings: string;
  location: string;
};

type Gokusbio = Pick<Goku, "powers" | "weight">; 
// This new NameAndAge type is equivalent to:
// type Gokusbio = {
//   powers: string;
//   weight: number;
// };