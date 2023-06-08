"use strict";
class Department {
    constructor(id, n) {
        this.id = id;
        this.employees = []; //within the same class, not in private methods
        this.employeez = []; //can access in inheritance class
        //u can also use shorthand initialization here, id + readonly property (can't change)
        this.name = n;
    }
    describe() {
        console.log("ID: ", this.id, " | Department name: ", this.name); //this should refer to instance of Department
    }
    addEmployee(employee) {
        this.employees.push(employee);
        this.id = 2; //❌ read-only
    }
    printEmployeesInfo() {
        console.log(this.employees.length);
    }
}
//✅ static methods and properties can be accessed without instantiating the class, like Math.pow()
Department.fiscalYear = 2023;
//✅ Inheritance
class QADepartment extends Department {
    constructor(id, rootUser, report) {
        super(id, "QA"); //calls the constructor of base class
        this.rootUser = rootUser;
        this.report = report;
        this.admins = rootUser;
        this.lastReport = report[0];
    }
    addEmployee(employeezName) {
        this.employeez.push(employeezName);
        console.log(this.employeez);
    }
    addReport(text) {
        this.report.push(text);
        this.lastReport = text;
    }
    showReport() {
        //❌ only public method can  be used to access/update private variables else use getters/setters
        return this.lastReport;
    }
    //✅ Getters and setters are used to provide an interface for accessing and modifying private properties of a class
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error("No reports found");
    }
    set updateRecentReport(value) {
        this.addReport(value);
    }
    static createFiscalYear(num) {
        console.log(num);
    }
}
const obj = new Department(1, "ABC");
obj.describe();
// const objCopy = { name: "DevOps", describe: obj.describe };
// objCopy.describe();
obj.addEmployee("Sagar");
obj.employees[1] = "Jass Manak"; //⚠️ can't add as employees is private modifier
obj.printEmployeesInfo();
const newObj2 = new QADepartment(2, ["Guri", "Sonu"], []);
newObj2.addEmployee("Goku");
newObj2.addReport("A BCA graduate from BITS Pilani");
newObj2.updateRecentReport = "An MCA post-graduate from Chitkara";
console.log(newObj2.mostRecentReport);
console.log(Department.fiscalYear);
console.log(QADepartment.createFiscalYear(2024));
