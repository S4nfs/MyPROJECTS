class Employee {
    constructor(givenName, givenExperience, givenSkill) {
        this.name = givenName;
        this.experience = givenExperience;
        this.skill = givenSkill;
    }

    joiningYear() {
        return `${this.name} has been working in this company for ${this.experience} years and is proficient in ${this.skill}`
    }


    static add(a, b) {                                  //static function (call without createing any object)
        return a + b;                                   //.this is not available in static function
    }

}

class SpecialEmployee extends Employee {                 //inheriting from Employee
    constructor(givenName, givenExperience, givenSkill, givenCTC) {
        super(givenName, givenExperience, givenSkill)   //super is used to call parent class constructor
        this.ctc = givenCTC;
}

}
// let obj1 = new Employee("Sagar", 8, "NodeJs" );
// console.log(obj1.joiningYear())

// console.log(Employee.add(15, 20))

let obj2 = new SpecialEmployee("Sagar", 8, "PHP", 5);
console.log(obj2.joiningYear())