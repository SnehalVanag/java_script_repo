// What is a Function?

// A function is a block of code designed to perform a specific task.

// Functions make code reusable, modular, and easy to debug.

// Functions can take inputs (parameters) and can return outputs (return value).

// General Syntax:

function functionName(parameters) {
  // code to execute
  return value; // optional
}

// 2. Types of Functions in JavaScript
// (a) Function Declaration / Named Function

// Traditional way to define functions.


function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Snehal")); // Hello, Snehal

// (b) Function Expression

// A function assigned to a variable.


let add = function(x, y) {
  return x + y;
};

console.log(add(5, 3)); // 8

// (c) Arrow Function (ES6)

// Shorter syntax for writing functions.

// Does not have its own this (useful in callbacks).


let multiply = (a, b) => a * b;

console.log(multiply(4, 2)); // 8

// (d) Anonymous Function

// A function without a name (commonly used in callbacks).


setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);

// (e) Immediately Invoked Function Expression (IIFE)

// Executes immediately after being defined.


(function() {
  console.log("This runs immediately!");
})();

// (f) Default Parameters

// Parameters with default values if not provided.


function greet(name = "Student") {
  console.log("Hello, " + name);
}

greet(); // Hello, Student
greet("Snehal"); // Hello, Snehal


//Parameters (...args)  Allows multiple arguments to be grouped into an array.


function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// (h) Return vs No Return

// If a function has no return, it gives undefined.


function sayHello() {
  console.log("Hello!");
}
console.log(sayHello()); // Output: Hello! + undefined

function add(x, y) {
  return x + y;
}
console.log(add(10, 20)); // 30

// 3. Scope in Functions

// Global Scope → Variables declared outside functions are global.

// Local Scope → Variables inside functions are local.

// Block Scope → With let and const, variables inside { } are block-scoped.


let globalVar = "I am Global";

function testScope() {
  let localVar = "I am Local";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

testScope();
// console.log(localVar); // ❌ Error (not accessible outside)

// 4. Hoisting in Functions

// Function declarations are hoisted (can be called before defining).

// Function expressions & arrow functions are not hoisted.


sayHi(); // ✅ Works
function sayHi() {
  console.log("Hi!");
}

// greet(); // ❌ Error
let greet = function() {
  console.log("Hello!");
};

// 5. Callback Functions

// Passing one function as an argument to another.


function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Snehal", sayBye);
