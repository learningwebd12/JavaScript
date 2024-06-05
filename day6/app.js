// You can use single or double quotes:

let text = "Ganesh regmi"; //double quote
let text2 = "Banasthali, Kathmandu"; //single quote

console.log(text);
console.log(text2);

// Quotes Inside Quotes
let firstText = "I am a frontend 'Developer'";
let secondText = 'Also i am learning "Mern Stack"';
console.log(firstText);
console.log(secondText);

// Template Strings
// Templates were introduced with ES6 (JavaScript 2016).
// Templates are strings enclosed in backticks (`This is a template string`).
// Templates allow single and double quotes inside a string:

let texts = `hello guys "Welcome Here"`;
console.log(texts);

// String Method

// string length
let totalLength = "abcdefghijkl";
var a = totalLength.length;
console.log(a);

// JavaScript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:

let oneText = "Hello world";
let char = oneText.charAt(4);
let anotherChar = oneText.charCodeAt(1);
let lastChar = oneText.at(2);
let best = oneText[0];
console.log(char);
console.log(anotherChar);
console.log(lastChar);
console.log(best);

// Extracting String Parts
// There are 3 methods for extracting a part of a string:
// slice(start, end)
// substring(start, end)
// substr(start, length)

let finalText = "apple, banana, Kiwi, Mango";
let part = finalText.slice(4, 15); //slice takes 2 parameters start position and end position , extract of a string and return the extrach part
console.log(part);

let nextpart = finalText.slice(-2);
console.log(nextpart);

// substring() is similar to slice().

let str = "Apple, Banana, Kiwi";
let p = str.substring(2, 20);
console.log(p);

// JavaScript String toUpperCase()

let upper = str.toUpperCase();
console.log(upper);

let small = "MANGO, CARROT,MILK,CURD";
let smallCase = small.toLowerCase();
console.log(smallCase);

// concat() joins two or more strings:

let oneString = "Helo Everyone i am a BCA Students";
let lastString = "Study at ASMT College";

let allString = oneString.concat(lastString);
console.log(allString);

// The trim() method removes whitespace from both sides of a string:
let val = "   HelloIam   ";
let anotherVal = val.trimStart();
let lastVal = val.trimEnd();
let finalVal = lastVal.length;
console.log(finalVal);
let check = anotherVal.length;
console.log(check);

let trimString = oneString.trim();
testing = trimString.length;
console.log(testing);

// JavaScript String repeat()
// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.

let repText = "Hello World";
let result = repText.repeat(4); //kati choti chaiyo teti choti dine 1,2,3,4 afno man
console.log(result);
console.log(repText); //orginal string lai kei pani change gardai na

// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

let replaceText = "Please join MERN Course";
let finalReplace = replaceText.replace("Ganesh", "BCA");

// Converting a String to an Array
// A string can be converted to an array with the split() method:

let normalString = "a,b,c,d,e,f,g";
const myArray = normalString.split(",");
console.log(myArray[1]);
