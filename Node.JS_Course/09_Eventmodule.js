/* User can create now their own "events" and "listeners"
    * and can trigger them by calling the "emit" method
    * and can listen to them by calling the "on" method
*/
//1 Ex.-----------------------------------------------------------------
const EventEmitter = require('events');
const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log("Sagar Verma");
});

event.on("sayMyName", () => {
    console.log("Nick name Sonu");
});

event.on("sayMyName", () => {
    console.log("No other name");
});

event.emit("sayMyName");

//2 Ex.-----------------------------------------------------------------
// event.on("checkMyPage", (sc, msg) => {
//     console.log(`status code is ${sc} and the page is ${msg}`);
// });

// event.emit("checkMyPage", 200, "OK");