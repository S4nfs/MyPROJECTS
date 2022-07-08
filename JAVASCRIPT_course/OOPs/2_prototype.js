// Prototype - is a recipe for creating objects which you can change.


let obj = {
    name: "Ford Focus",
    year: 2018,
    topSpeed: 200,
    features: ["AutomaticTransmission", "Climate control",  "Seat heating"],
    getName: function () {
        return this.name;
    }
}

function Obj(givename){
    this.name = givename;
}

obj.prototype.getName = function(){
    return this.name;
}

let obj2 = new Obj("Geep");
console.log(obj2)