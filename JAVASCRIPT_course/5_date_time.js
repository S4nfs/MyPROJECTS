/* ✔️ Date objects 4 :
    -new Date()
    -new Date(year, month, day, hours, minutes, seconds, milliseconds)
    -new Date(milliseconds)
    -new Date(date string)
*/

/* ✔️ The following are Javascript getter functions.
Getter Function 	Description
getFullYear() 	    Get the year as a four digit number (yyyy)
getMonth() 	        Get the month as a number (0-11)
getDate() 	        Get the day as a number (1-31)
getHours() 	        Get the hour (0-23)
getMinutes() 	    Get the minute (0-59)
getSeconds() 	    Get the second (0-59)
getMilliseconds() 	Get the millisecond (0-999)
getTime() 	        Get the time (milliseconds since January 1, 1970)
getDay() 	        Get the weekday as a number (0-6)
*/

/*✔️ The following are the Setter functions of Javascript.
Setter Function 	Description
setDate() 	        Set the day as a number (1-31)
setFullYear() 	    Set the year (month and day)
setHours() 	        Set the hour (0-23)
setMilliseconds() 	Set the milliseconds (0-999)
setMinutes() 	    Set the minutes (0-59)
setMonth() 	        Set the month (0-11)
setSeconds() 	    Set the seconds (0-59)
setTime() 	        Set the time (milliseconds since January 1, 1970)
*/


var currDate = new Date();
console.log(currDate.getFullYear());

// Date.toLocaleString() Method - It uses an options object where each part of the date can be configured. 
console.log(new Date().toLocaleString(("en-us", {
    hour12: true,
    weekday: "short",
    hour: "2-digit",
    month: "long",
    year: "numeric",
})))
