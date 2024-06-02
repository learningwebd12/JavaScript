// JavaScript Object Constructors

// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.

class Person {
  constructor(first, last, age, eye) {
    (this.firstName = first),
      (this.lastName = last),
      (this.age = age),
      (this.eyeColor = eye);
  }
}

const myFather = new Person("Hero", "Regmi", 50, "brown");

console.log(myFather);

// Now we can use new Person() to create many new Person objects:
const newFriends = new Person("Shyam", "Stha", 23, "black");
const myFriends = new Person("Ram", "Shrestha", 24, "black");
newFriends.nationality = "Nepali";
console.log(newFriends);

console.log(
  "my friend age is:" +
    newFriends.age +
    "" +
    "and eye color is" +
    myFriends.eyeColor
);
