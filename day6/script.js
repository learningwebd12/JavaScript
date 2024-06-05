// // String Search Methods

// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

let text = "please locate where 'locate' course!";
let index = text.indexOf("where");
console.log(index);

// JavaScript String lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

let upIndex = text.lastIndexOf("locate");
console.log(upIndex);

// JavaScript String search()
// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
// Examples

let seraching = text.search("where");
console.log(seraching);

// JavaScript String includes()
// The includes() method returns true if a string contains a specified value.
// Otherwise it returns false

let including = text.includes("where");
console.log(including);

let stWith = text.startsWith("please"); // kunai pani sentence chai kun word bata start bhako xa, if xa vani true return garxa otherwise false
console.log(stWith);

let enwith = text.endsWith("course!"); // kunai pani sentence chai kunai word bata end bhaako xa bhane true return garxa milyo vane otherwise false return garxa
console.log(enwith);
