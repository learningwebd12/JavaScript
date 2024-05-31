let x = 5;
let y = 10;
let z = x + y;
console.log(z);

let carName;
carName = "BWM";
console.log(carName);

{
  let a = 2;
  console.log(a);
}

// With let you can not do this:
// let b = "Ganesh Regmi";
// let b = 1;

// With var you can do this:

var g = 2;
var g = 3;
console.log(g);

const cars = ["saab", "volvo", "BMW"];
cars[0] = "Toyato";

cars.push("Audi");
console.log(cars);

// we can change the properties of a constant object
const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};
car.color = "red";

car.owner = "ganesh";
console.log(car);

// But you can NOT reassign the object:

const bus = {
  type: "Nightbus",
  model: "600",
  color: "green",
};

// bus = { type: "SajhaYatata", model: "100", color: "yellow" };

console.log(bus);
