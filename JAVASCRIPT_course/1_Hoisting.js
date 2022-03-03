//✔️ Hoisting in Javascript is a mechanism where variables and functions declarations are moved to the top of their scope before the code executes. (see image b)

console.log(myName);
var myName;
myName = "Sagar Verma"; 

👆
/*Steps:
1. var myName = undefined;     
2. console.log(myName);        //print undefined
3. myName = "Sagar Verma";     //nothing executes
*/

//Scope Chain - (see image c)
var a ="Hello";

function one(){
    var b = "How are You?";
    console.log(b);
    two()

    function two(){
        var c = "What are you doing?"
        console.log(a+b+c); //can access parent function + global context
        three()
    }
}

function three(){
    var d = "Please answer, Bro?";
    console.log(d);  //can only access its execution stack + global context (a,d)
}

one();