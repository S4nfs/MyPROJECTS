"use strict";
//✔️ Decorators are a way to add metadata and behavior to classes, methods, properties, parameters, or accessors at design time. Add functionality to your code without cluttering it with boilerplate logic. (Helpful in Metaprogramming: which is a programming technique that allows you to write code that can manipulate or generate other code at runtime)
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
function logger(target, propertyName) {
    //return here the prototype and property name like fname
    console.log(`[Property 🟡] Decorator`);
    console.log(target, propertyName);
}
function logger2(target, name, descriptor) {
    console.log(`[Method 🟠]  Decorator`);
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function logger3(target, name, position) {
    //return same as above but index of argument in position
    console.log(`[Parameter 🔵] Decorator`);
    console.log(target);
    console.log(name);
    console.log(position);
}
// @log("Hello World")
class Person1 {
    constructor(firstName, lastName, age) {
        this.fname = firstName;
        this.lname = lastName;
        this._age = age;
    }
    set age(val) {
        this._age = val;
    }
    getFullName() {
        return `${this.fname} ${this.lname}`;
    }
    getretirementYearsLeft(years) {
        return this._age - years;
    }
}
__decorate([
    logger
], Person1.prototype, "fname", void 0);
__decorate([
    logger2 //can also pass in setter and it acts as Accessor Decorator
], Person1.prototype, "getFullName", null);
__decorate([
    __param(0, logger3)
], Person1.prototype, "getretirementYearsLeft", null);
const person1 = new Person1("John", "Doe", 30);
console.log(person1.getFullName());
//✔️Ultilizing decorator while making autobind feature-------------------------------------------------------------------------
function AutoBind(_, _2, descriptor) {
    const originalShowMessageMethod = descriptor.value;
    const adjustedDescriptor = {
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
    constructor() {
        this.message = "This Works";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], ShowMessage.prototype, "showMessage", null);
const p = new ShowMessage();
const button = document.querySelector("button");
// button.addEventListener("click", p.showMessage.bind(p));
button.addEventListener("click", p.showMessage);
const registeredValidator = {};
function Required(target, propertyName) {
    registeredValidator[target.constructor.name] = Object.assign(Object.assign({}, registeredValidator[target.constructor.name]), { [propertyName]: ["required"] });
}
function PositiveNumber(target, propertyName) {
    registeredValidator[target.constructor.name] = Object.assign(Object.assign({}, registeredValidator[target.constructor.name]), { [propertyName]: ["positive"] });
}
function validator(obj) {
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
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title");
    const price = document.getElementById("price");
    const t = title.value;
    const p = +price.value;
    const newCourse = new Course(t, p);
    console.log(newCourse);
    if (!validator(newCourse)) {
        alert("Invalid Input");
        return;
    }
});
