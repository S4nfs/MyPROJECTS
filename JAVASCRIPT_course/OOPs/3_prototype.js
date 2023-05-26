/*In JavaScript, every object has a property called prototype. This property is used to enable inheritance between objects.

When you create a new object using a constructor function or the class syntax, the newly created object will have a prototype that references the prototype of its constructor function. This means that any properties or methods defined on the prototype of the constructor function will be available on the new object.

For example, let's say we have a constructor function for creating person objects:
*/
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const john = new Person('John', 30);
john.sayHello(); // Output: "Hello, my name is John and I am 30 years old."

/*In this example, we define a Person constructor function and add a method called sayHello to the prototype of the Person function. When we create a new Person object using the new keyword, the prototype property of the new object will reference the prototype property of the Person function, so we can call the sayHello method on the john object.

The prototype property is an important part of how JavaScript implements inheritance, and understanding it is essential for writing efficient and maintainable code. */