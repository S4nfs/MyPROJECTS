/* CallBack Function
Any function that is passed as an argument is called a Callback function. A callback is a function that is to be executed after another function has finished executing - hence the name "callback"

*/

//Example 1 :
const funA = () => {
setTimeout(function(){
    console.log("I am first to execute");
    funB();                                     //funB is a callback function
}, 3000);
}

funB = () => {
    console.log("I am second to execute");
}

funA();

// Example 2:
const whenHeIsBusy = (sir, callfrnd) => {
    console.log(`I am busy right now, I am talking to ${Sir}. I will call you back.`);
    whenHeIsfree();
}

const whenHeIsfree = () => {
    console.log(`See, I call you back bro`);
}

whenHeIsBusy("Suneja Sir", whenHeIsfree);
