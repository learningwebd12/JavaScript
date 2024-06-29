let x = 3.14; // number with decimal
let y = 3; // number without decimal
console.log(x);
console.log(y);

// Extra large or extra small numbers can be written with scientific (exponent) notation:

let a = 123e5;
let b = 123e-5;
console.log(a);
console.log(b);

// Floating point arithmetic is not always 100% accurate:

let c = 0.2 + 0.1;
console.log(c);

// If you add two numbers, the result will be a number:

let d = 10;
let e = 20;
let f = d + e;
console.log(f);

// If you add two strings, the result will be a string concatenation:

let g = "10";
let h = "20";
let i = g + h;
console.log(i);

// If you add a number and a string, the result will be a string concatenation:

let j = 10;
let k = "30";
let l = j + k;
console.log(l);

// A common mistake is to expect this result to be 30:
let m = 10;
let n = 20;
let o = "the result is:" + x + y;
console.log(o);

// JavaScript will try to convert strings to numbers in all numeric operations:
// This will work:

let xx = "100";
let yy = "10";
let zz = xx / yy;
console.log(zz);

// This will also work:
let xxx = "200";
let yyy = "20";
let zzz = xxx / yyy;
console.log(zzz);
