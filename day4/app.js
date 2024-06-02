let car = "bmw";
console.log(car);

const bus = {
  type: "bmw",
  model: "500cs",
  color: "white",
  price: "Rs: 250000",
};
console.log(bus.model);

// Using the new Keyword
// This example create a new JavaScript object using new Object(), and then adds 4 properties:

const person = new Object();
(person.name = "ganesh Regmi"),
  (person.age = 25),
  (person.course = "BCA"),
  (person.address = "Banasthali"),
  console.log(person.age);

// In the example above, this refers to the person object:
// this.firstName means the firstName property of person.
// this.lastName means the lastName property of person.

const computer = {
  computername: "Acer",
  price: 25000,
};

const xa = computer;

xa.price = 200;
console.log(xa);

// JavaScript Object Properties

const myinfo = {
  firstName: "Ganesh",
  lastName: "Regmi",
  age: 24,
  address: "Lamki kailali",
};

let gan = myinfo.firstName + "is" + myinfo.age + "year old";
console.log(gan);

// Adding New Properties
myinfo.course = "Bachelor in Computer Application";

// Deleting Properties
delete myinfo.age;

console.log(myinfo);

// Nested Objects

myObj = {
  money: 250,
  cash: 100,
  esewa: 100,
  naming: {
    lastName: "Regmi",
    FirstName: "Ganesh",
  },
};

console.log(myObj["naming"]["lastName"]);

// js object method
const college = {
  name: "asmt",
  address: "new buspark",
  phone: 1 - 540329,
  courses: "bca,BIM,CSIT",

  info: function () {
    return this.name + "" + this.courses;
  },
};
console.log(college.info());

const laptop = {
  name: "acer",
  price: 135000,
  generation: 12,
  Ram: 16,
  suplier: "Daraz online shop",
};

// This example uses the JavaScript toUpperCase() method to convert a text to uppercase:

laptop.allDetails = function () {
  return (this.name + " " + " " + this.suplier).toUpperCase();
};

console.log("I have a Laptop" + " " + laptop.allDetails());

// Displaying Properties in a Loop
const fruits = {
  name: "banana",
  price: 200,
  quantity: 12,
};

let text = "";
for (let x in fruits) {
  text += fruits[x] + "";
}
console.log(text);

// Using Object.values()
// Object.values() creates an array from the property values:

const school = {
  name: "uss",
  adress: "lamki kailali",
  phone: 9864000000,
  schoolFee: 25000,
};

const array = Object.values(school);

console.log(array);

// Using JSON.stringify()
// JavaScript objects can be converted to a string with JSON method JSON.stringify().
// JSON.stringify() is included in JavaScript and supported in all major browsers.

const newPerson = {
  name: 123,
  age: 30,
  city: "new Work",
};

let myString = JSON.stringify(newPerson);
console.log(myString);
