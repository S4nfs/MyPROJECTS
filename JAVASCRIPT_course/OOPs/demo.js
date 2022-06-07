// Only change code below this line
class Thermostat {
    constructor(feh) {
        this._temperature = feh;
    }
    get temperature() {
        return 5 / 9 * (this._temperature - 32)
    }

    set temperatureset(celsius) {
        this._temperature = celsius * 9.0 / 5 + 32
    }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);

thermos.temperatureset = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);