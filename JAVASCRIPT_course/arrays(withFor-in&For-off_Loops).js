// ✔️Arrays
// var myfriends = new Array; //optional
// var myfriends = ["Sagar", 30, "Male", "Pratik", 29, "Male", "Anjali", 28, "Female"]; //you can put anything in javascript array


var myFriends = ["Sagar","Pratik","Anjali"];
console.log(myFriends[0]);
console.log(myFriends.length);

for(i=0; i<myFriends.length; i++){
    console.log(myFriends[i]);
}

// ✔️ For-in & For-of Loops only in arrays ------------------------------------------------------------------------------------
for(let elements in myFriends){             //return index number
    console.log(elements);
}

for(let elements of myFriends){             //return array elements
    console.log(elements);
}