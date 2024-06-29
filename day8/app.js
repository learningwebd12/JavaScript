// The toString() method returns a number as a string.

let x = 50;
let xx = x.toString();
console.log(xx);

let y = (123).toString();
console.log(y);

// toExponential() returns a string, with a number rounded and written using exponential notation.

let z = 9.656;
let zz = z.toExponential(1); // A parameter defines the number of characters behind the decimal point:
console.log(zz);

// toFixed() returns a string, with the number written with a specified number of decimals:

let a = 9.656;
let b = a.toFixed(0);
let c = a.toFixed(1);
let d = a.toFixed(2);
let e = a.toFixed(4);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
