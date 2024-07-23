// before template string

var user = "Ganesh Regmi";
var greet = "my name is " + user;
console.log(greet);

//after template string
var user = "Yahoo baba";
let marks = 500;
var greet = `Hello ${user} ${greet} your marks is ${marks}`;
console.log(greet);

//another example

const arr = [1, 2, 3, 4, 5];
const pen = {
  name: "ball Pen",
  price: 15,
  rating: 5,
};

let final = `your pen details is ${arr} and price is ${pen.price}`;
console.log(final);

//example with function
let firstName = "Ganesh";
let lastName = "Regmi";

function FullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

let hello = `my name is ${FullName(firstName, lastName)}`;
console.log(hello);
