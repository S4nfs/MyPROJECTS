//Rest and Spread Operators


//Rest in ES6---------------------------------------------------
function addnumbers(a,b,...other){
    // console.log(other[0]); //6
    return a+b;
}
const res = addnumbers(1,2,6,3);
console.log(res);

//Spread---------------------------------------------------------
var names = ["Ajay","Sagar","Prateek"];
function getNames(name1,name2,name3){
    console.log(name1,name2,name3);
}
getNames(names[0],names[1],names[2]);       //Ajay Sagar Prateek
getNames(...names)                          //Ajay Sagar Prateek
