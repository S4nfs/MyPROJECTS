const bioData = {
    name: "John",
    age: 30,
    sum: function () {
        add = 2 + 2;
        console.log("Sum of two no. is " + add)
        console.log(this) //return bioData object
    }
}
bioData.sum()