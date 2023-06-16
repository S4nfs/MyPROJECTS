//✔️ Decorators are a way to add metadata and behavior to classes, methods, properties, parameters, or accessors at design time. Add functionality to your code without cluttering it with boilerplate logic. (Helpful in Metaprogramming: which is a programming technique that allows you to write code that can manipulate or generate other code at runtime)

/* ⚠️ EXPERIMENTAL: Enable in tsconfig "experimentalDecorators": true
1.ClassDecorator
2.PropertyDecorator
3.MethodDecorator
4.ParameterDecorator
*/

// function log(message: string): ClassDecorator {
//   console.log("Message is :", message);
//   return function (): void {
//     console.log("Constructor");
//   };
// }

function logger(target: any, propertyName: string | Symbol) {
  //return here the prototype and property name like fname
  console.log(`[Property 🟡] Decorator`);
  console.log(target, propertyName);
}

function logger2(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log(`[Method 🟠]  Decorator`);
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function logger3(target: any, name: string | Symbol, position: number) {
  //return same as above but index of argument in position
  console.log(`[Parameter 🔵] Decorator`);
  console.log(target);
  console.log(name);
  console.log(position);
}

// @log("Hello World")
class Person1 {
  @logger
  fname: string;
  lname: string;
  private _age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.fname = firstName;
    this.lname = lastName;
    this._age = age;
  }

  set age(val: number) {
    this._age = val;
  }

  @logger2
  getFullName(): string {
    return `${this.fname} ${this.lname}`;
  }

  getretirementYearsLeft(@logger3 years: number) {
    return this._age - years;
  }
}

const person1 = new Person1("John", "Doe", 30);
console.log(person1.getFullName());
