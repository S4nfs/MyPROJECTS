//Convert JSON Object to JSON String
obj = {
    name:   'Sagar',
    age:    25,
    profession: 'Software Engineer',
}
jso = JSON.stringify(obj);
console.log(jso);
console.log(typeof jso);   


//Convert JSON String to JSON Object
parsed = JSON.parse(`{"name":"Sagar","age":25,"profession":"Software Engineer"}`);   //require string input
console.log(parsed);
console.log(typeof parsed);
