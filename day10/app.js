// The length property returns the length (size) of an array:
const college = ["kmc", "aryan", "asian", "acme"];
console.log(college.length);

// The JavaScript method toString() converts an array to a string of (comma separated) array values.

const names = ["Ram", "shyam", "Hari", "sita", "Hanuman"];
let items = names.toString();
console.log(items);

// intoduced the array method at():

const number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(number.at(5));
console.log(number[5]);

// The join() method also joins all array elements into a string.
console.log(number.join());

// // push and pop in array
// The pop() method removes the last element from an array:
console.log(number.pop());

// The push() method adds a new element to an array (at the end):

let b = ["a", "b", "c"];
let x = b.push("z");
console.log(b);

//shift and unshift method in array

const an = ["a", "e", "i", "o", "u"];
console.log(an.shift());
console.log(an);

let gan = an.unshift("g");
console.log(an);

//changing element of an array
const ownFood = ["dal", "bhat", "tarkari"];
console.log(ownFood);
ownFood[1] = "Masu";
console.log(ownFood);

// The concat() method creates a new array by merging (concatenating) existing arrays:

const c = [1, 2, 3, 4, 5];
const d = [6, 7, 8, 9, 10];
const finalans = c.concat(d);
console.log(finalans);

const fruits = ["apple", "orange", "Mango", "banana", "pineapple"];
fruits.forEach(function (val) {
  let gan = val + "gan";
  console.log(gan);
});

let num = [1, 2, 3, 4, 5];
let adding = num.push(11);
let add = num.shift();
console.log(num);
