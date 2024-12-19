//✔️ Decorators are a way to add metadata and behavior to classes, methods, properties, parameters, or accessors at design time. Add functionality to your code without cluttering it with boilerplate logic. (Helpful in Metaprogramming: which is a programming technique that allows you to write code that can manipulate or generate other code at runtime)

/* ⚠️ Note: Enable in tsconfig "experimentalDecorators": true

All Decorators executes when you define a class
1.ClassDecorator
2.PropertyDecorator - no return functionality
3.MethodDecorator
4.ParameterDecorator - no return functionality
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

function logger2(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
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

  @logger2 //can also pass in setter and it acts as Accessor Decorator
  getFullName(): string {
    return `${this.fname} ${this.lname}`;
  }

  getretirementYearsLeft(@logger3 years: number) {
    return this._age - years;
  }
}

const person1 = new Person1("John", "Doe", 30);
console.log(person1.getFullName());

//✔️Ultilizing decorator while making autobind feature-------------------------------------------------------------------------
function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalShowMessageMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalShowMessageMethod.bind(this);
      return boundFn;
    },
  };
  return adjustedDescriptor;
}

class ShowMessage {
  message = "This Works";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new ShowMessage();
const button = document.querySelector("button")!;
// button.addEventListener("click", p.showMessage.bind(p));
button.addEventListener("click", p.showMessage);

//✔️Ultilizing decorator for validition----------------------------------------------------------------------------------
//https://github.com/typestack/class-validator package uses the same concept. Check it out!
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; //['required', 'positive']
  };
}

const registeredValidator: ValidatorConfig = {};

function Required(target: any, propertyName: string) {
  registeredValidator[target.constructor.name] = {
    ...registeredValidator[target.constructor.name],
    [propertyName]: ["required"],
  };
}

function PositiveNumber(target: any, propertyName: string) {
  registeredValidator[target.constructor.name] = {
    ...registeredValidator[target.constructor.name],
    [propertyName]: ["positive"],
  };
}

function validator(obj: any) {
  const objValidatorsConfig = registeredValidator[obj.constructor.name];
  if (!objValidatorsConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorsConfig) {
    for (const validator of objValidatorsConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}
class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title") as HTMLInputElement;
  const price = document.getElementById("price") as HTMLInputElement;

  const t = title.value;
  const p = +price.value;

  const newCourse = new Course(t, p);
  console.log(newCourse);
  if (!validator(newCourse)) {
    alert("Invalid Input");
    return;
  }
});
