// ✔️ LET VS CONST  vs VAR--------------------------------------------------------------------------------------------------
// var myname = "Sagar Verma";
// myname = "S4nfs";
// console.log(myname);                       //output: S4nfs                     

// let myname1 = "Sagar Verma";
// myname1 = "S4nfs";
// console.log(myname1);                      //output: S4nfs                     

// const myname2 = "Sagar Verma";             //error: const variable can't be changed
// myname2 = "S4nfs";
// console.log(myname2);


// ✔️ Var => Function Scope  | let and const => Block Scope--------------------------------------------------------------------
// function biodata(){
// var myFirstName = "Sagar";                   //with var
// console.log(myFirstName);

// if(true){
//     var myLastName = "Verma";
//     console.log('inner ' + myLastName);
//     console.log('inner ' + myFirstName);
// }
// console.log('innerouter ' + myLastName);

// }
// biodata();

// function biodata(){
//     let myFirstName = "Sagar";                  //with let
//     console.log(myFirstName);
    
//     if(true){
//         let myLastName = "Verma";
//         console.log('inner ' + myLastName);
//         console.log('inner ' + myFirstName);
//     }
//     console.log('innerouter ' + myLastName);    //error: you can't use let variables outside function block
    
//     }
//     biodata();


// ✔️ Fat Arrow function ⟹ --------------------------------------------------------------------------------------------------------
//normal function
function sum(){
    let a = 5, b =10;
    let sum = a + b;
    return (`The sum of two numbers is ${sum}`)
}
console.log(sum());

//with fat arrow
const sum  = () => {
    let a = 5, b =10;
    let sum = a + b;
    return (`The sum of two numbers is ${sum}`)
}
console.log(sum());
