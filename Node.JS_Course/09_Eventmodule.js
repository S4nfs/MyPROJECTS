/* User can create now their own "events" and "listeners"
    * and can trigger them by calling the "emit" method
    * and can listen to them by calling the "on" method
*/
//1 Ex.-----------------------------------------------------------------
const EventEmitter = require('events');
const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log("My name is: Sagar Verma");
});

event.on("sayMyNickName", () => {
    console.log("My Nick name is: Sonu");
});

event.on("sayMyOtherName", () => {
    console.log("No other name");
});

event.emit("sayMyNickName");

//2 Ex.-----------------------------------------------------------------
// event.on("checkMyPage", (sc, msg) => {
//     console.log(`status code is ${sc} and the page is ${msg}`);
// });

// event.emit("checkMyPage", 200, "OK");