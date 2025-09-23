// 1. var

// Introduced in ES5 (before 2015).

// Scope → Function-scoped.

// Hoisting → Hoisted and initialized with undefined.

// Can be re-declared and re-assigned.


var a = 10;
var a = 20; // Re-declaration allowed
console.log(a); 

function testVar() {
  if (true) {
    var x = 100;
  }
  console.log(x); // 100 (accessible outside block)
}
testVar();



// 2. let

// Introduced in ES6 (2015).

// Scope → Block-scoped { }.

// Hoisting → Hoisted but not initialized (ReferenceError if used before declaration).

// Can be re-assigned, but not re-declared in the same scope.


let b = 10;
b = 15; // Allowed
// let b = 20; 

function testLet() {
  if (true) {
    let y = 200;
    console.log("Inside block:", y); // 200
  }
  // console.log(y); 
}
testLet();


// Safer than var because it respects block scope.

// 3. const

// Introduced in ES6 (2015).

// Scope → Block-scoped { }.

// Hoisting → Hoisted but not initialized (ReferenceError if used before declaration).

// Must be initialized at declaration.

// Cannot be re-declared or re-assigned.

// For objects/arrays, values can change, but you cannot reassign the variable.

// ✅ Example:

const c = 50;
// c = 60;

const person = { name: "Snehal", age: 22 };
person.age = 23; 
console.log(person);

const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); 