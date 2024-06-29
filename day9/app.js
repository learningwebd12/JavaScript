// // foreach loop srf array pe chalta hai matlab ki jab bhi tumharee pass ek array ho, tab use mein kaun aata hai foreach loop
// //
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a.forEach((val) => {
  console.log(val * 2);
});
a.forEach(function (val) {
  console.log(val + 10);
});

// // callback function
// //jab bhi koi aisa code jo baad me chalta hai aap likhoge, kyuki wo code baad mein chalta hai js ko pe patal

setTimeout(function () {
  console.log("2section pachi chal");
}, 2000);

let number = [1, 2];
let double = number.map(function (val) {
  console.log(val * 2);
});

let people = [
  { name: "ganesh", age: 30 },
  { name: "ram", age: 20 },
  { name: "shyam", age: 25 },
];

let next = people.map(function (e) {
  console.log(e.name);
});

let mySub = ["social", "nepali", "math", "English"];
let nextSub = mySub.map(function (a) {
  let hello = `this is my ${a}`;
  console.log(hello);
});
