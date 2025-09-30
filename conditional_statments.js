// Control flow means the order in which statements, instructions, and functions are executed in a program.
// By default, JavaScript executes code line by line (top to bottom), but with control flow statements we can make decisions or repeat actions.

// 1. Conditional Statements
// (a) if Statement

// Used to run a block of code only if a condition is true.


// let age = 20;

// if (age >= 18) {
//   console.log("You are eligible to vote.");
// }

// (b) if...else Statement

// Used when we want to check two conditions (true or false).


// const age = 10;

// if (age >= 18) {
//   console.log("you can vote");
// } 
// else {
//   console.log("You cannot vote.");
// }

// (c) if...else if...else Statement

// Used when we need to check multiple conditions.

// marks = 80

// if (marks >= 90){
//   console.log("O")
// }else if(marks<90 & marks>=70){
//   console.log("A")
// }

// (d) switch Statement

// Alternative to multiple if...else.

// Compares one value against multiple cases.


let a = 3;
let b = 3;
let operator = "*"
switch (operator) {
  case "+":
     console.log(a+b);
      break;
  case 2:
     console.log(a-b);
      break;
  case "*": 
    console.log(a*b);
   break;
  case 4:
     console.log(a/b); 
     break;

  default: 
    console.log("Invalid day");
}