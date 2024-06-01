function myIntro() {
  var a = "my name is ganesh regmi";
  console.log(a);
}
myIntro();

function add() {
  let a = 20;
  let b = 10;
  let c = a + b;
  console.log(c);
  myIntro();
}
add();

// function with parameter
// function functionName(parameter1, parameter2) {
//     Statement.....
// }
// functionName(argument1, argument2); // argument valu ne hunxasakxa variable ko naam ne huna sakxa

function mul(a, b) {
  return a * b;
}
let x = mul(2, 3);
console.log(x);

// arrow function

// function greet() {
//   console.log("hello");
// }

// var greet = function () {
//   console.log("hello");
// };
// greet();

var greet = () => {
  console.log("hello");
};
greet();

// var greet = () => console.log("hello");

// greet();

// var non = () => {
//   return "ganesh";
// };
// console.log(non());

// setTimeout(() => {
//   console.log("hello, Good Morning");
// }, 2000);

let double = (a) => a * 2;
console.log(double(2));
