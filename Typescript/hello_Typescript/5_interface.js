/*✅  Interface -
In TypeScript, both abstract classes and interfaces can be used to define contracts for classes. However, there are some differences between them.

An interface is a pure contract that defines only the structure of the class without any implementation details. It can define properties, methods, and their types, but it cannot contain any implementation code, methods implementations are left for classes and objects.

Differences ? -
    Classes can only inherit one abstract class but can inherit multiple interfaces.
    An interface can have only abstract methods, an abstract class can have both abstract and non-abstract methods
    An interface can only have public members, while an abstract class can have protected and public members.
    Abstract class can provide the implementation of the interface. Interface can not provide the implementation of an abstract class

*/
var myuser = {
    id: 1,
    username: "sagar4nfs",
    password: "qewgveqwgv",
};
console.log(myuser);
var Person = /** @class */ (function () {
    //implementation
    function Person(n) {
        this.age = 30;
        this.error = {
            404: "Not Found",
        };
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Person;
}());
var user = new Person("Jen");
user.greet("Hi there, I am");
console.log(user);
