let car = {
    name: "Ford Focus",
    year: 2018,
    topSpeed: 200,
    features: ["AutomaticTransmission", "Climate control", "Seat heating"],
    getName: function () {
        return this.name;
    }
}
console.log(car.getName());     // Ford Focus
console.log(car.features[0]);   // AutomaticTransmission

//Contructors - are used to create objects/instances

function SelfDriving (givename, givespeed){
    this.name = givename,
    this.speed = givespeed,
    this.feature = "Bioweapon defense mode"
    this.specialFeature = function () { console.log(`${this.name} has ${this.feature}`) }
}

car1 = new SelfDriving("tesla", 282) 
car1.specialFeature();               