// Arrays in JavaScript

// An array is a collection of values stored in a single variable.

// Values can be of any data type (numbers, strings, objects, even other arrays).

// Arrays are indexed (0-based).


let arr = [value1, value2, value3];

// (a) Creating Arrays
let fruits = ["Apple", "Banana", "Mango"]; // Using []
let numbers = new Array(1, 2, 3, 4, 5);    // Using constructor

// (b) Accessing Array Elements
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango

// (c) Array Properties
console.log(fruits.length); // 3

// (d) Array Methods



// Adding / Removing
fruits.push("Orange");  // Add at end
fruits.pop();           // Remove last element
fruits.unshift("Grapes"); // Add at beginning
fruits.shift();           // Remove first element
console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.includes("Mango")); // true

// Iteration
fruits.forEach(f => console.log(f));

// Transformation
 numbers = [1, 2, 3, 4];
let squared = numbers.map(n => n * n); // [1,4,9,16]
let evens = numbers.filter(n => n % 2 === 0); // [2,4]
let sum = numbers.reduce((a, b) => a + b, 0); // 10

// (e) Multidimensional Arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

console.log(matrix[0][1]); // 2

// 2. Objects in JavaScript

// An object is a collection of key-value pairs.

// Keys are strings (or symbols) and values can be anything (string, number, array, object, function).


let obj = {
  key1: value1,
  key2: value2
};

// (a) Creating Objects
let person = {
  name: "Snehal",
  age: 22,
  city: "Mumbai"
};

// (b) Accessing Object Properties
console.log(person.name);  // Snehal (dot notation)
console.log(person["city"]); // Mumbai (bracket notation)

// (c) Adding / Updating / Deleting Properties
person.email = "snehal@example.com"; // Add
person.age = 23; // Update
delete person.city; // Delete

console.log(person);

// (d) Nested Objects
let student = {
  name: "Snehal",
  marks: {
    math: 95,
    science: 90
  }
};
console.log(student.marks.math); // 95

// (e) Objects with Functions (Methods)
let person = {
  name: "Snehal",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // Hello, Snehal

// (f) Looping Through Objects
let car = { brand: "Toyota", model: "Fortuner", year: 2023 };

for (let key in car) {
  console.log(key + ":", car[key]);
}

// (g) Object Methods
let person = { name: "Snehal", age: 22 };

console.log(Object.keys(person));   // ["name", "age"]
console.log(Object.values(person)); // ["Snehal", 22]
console.log(Object.entries(person)); // [["name","Snehal"], ["age",22]]

// 3. Objects and Arrays Together

// Arrays can contain objects.

// Objects can contain arrays.


let students = [
  { name: "Snehal", age: 22 },
  { name: "Rohit", age: 23 },
  { name: "Priya", age: 21 }
];

console.log(students[1].name); // Rohit



let person = {
  name: "Snehal",
  hobbies: ["Reading", "Coding", "Traveling"]
};
console.log(person.hobbies[0]); // Reading