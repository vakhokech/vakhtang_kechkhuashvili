/* davaleba1 */

let numArray = [1, -7, 10, 50, -8, 20, 60].filter(x => x > 0).reduce((acc,ele) => acc + ele);
console.log(numArray);

/* davaleba 2 */
let stringArray = ["toyota", "bmw", "opel" , "honda" , "hundai", "tesla", "mercedes", "opel", "toyota"].reduce((acc,ele) => {
    if(ele in acc) acc[ele]++;
    else acc[ele] = 1;
    return acc;
},{});
console.log(stringArray);
/* davaleba 4 */
let addAsync = function (par1, par2) {
    new Promise((resolve, reject) => {
        if(typeof par1 && typeof par2 != undefined && typeof par1 && typeof par2 === "number") resolve("success");
        else reject("failure");
    }).then(res => console.log(res))
    .catch(error => console.log(error));
};

addAsync(1,2);
addAsync(7,"car");
addAsync("js", "css");
addAsync();
/* davaleba 3 */
class Car {
    constructor(brand, model,){
        this.brand = brand;
        this.model = model;
        this.speed = 1;
        this.motion = this.speed > 0 ? "The car is moving" : "The car is not moving" ;
    };
    check_motion () {
        if(this.speed > 0 ) console.log(this.motion);
        if(this.speed == 0 ) console.log(this.motion);
    };
    accelerate () {
        this.speed += 30
        console.log(`${this.brand} is going at ${this.speed} km/h`);
    };
    brake () {
        this.speed -= 45;
        if(this.speed < 0 ) this.speed = 0;
        console.log(`${this.brand} is going at ${this.speed} km/h`);
        
    };
    emergency_brake () {
        if(this.speed >= 0)  console.log(`Emergency brake!!! Speed is ${this.speed = 0} km/h`);
    };
    status () {
        this.speed = 150
        console.log(`${this.brand} ${this.model} is going at ${this.speed} km/h`);
    };
};

const carOne = new Car("toyota", "camry");
carOne.check_motion();
carOne.check_motion();
carOne.accelerate();
carOne.accelerate();
carOne.accelerate();
carOne.accelerate();
carOne.accelerate();
carOne.accelerate();
carOne.brake();
carOne.brake();
carOne.brake();
carOne.brake();
carOne.brake();
carOne.emergency_brake();
carOne.status();