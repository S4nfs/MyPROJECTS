//Convert JSON Object to JSON String
obj = {
    name:   'Sagar',
    age:    25,
    profession: 'Software Engineer',
}
jso = JSON.stringify(obj);
console.log(jso);           // {"name":"Sagar","age":25,"profession":"Software Engineer"} //Output
console.log(typeof jso);    


//Convert JSON String to JSON Object
// parsed = JSON.parse(`{"name":"Sagar","age":25,"profession":"Software Engineer"}`);
// console.log(parsed);   // {name: "Sagar", age: 25, profession: "Software Engineer"}  //Output
// console.log(typeof parsed);
