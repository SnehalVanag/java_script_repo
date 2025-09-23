// Control flow means the order in which statements, instructions, and functions are executed in a program.
// By default, JavaScript executes code line by line (top to bottom), but with control flow statements we can make decisions or repeat actions.

// 1. Conditional Statements
// (a) if Statement

// Used to run a block of code only if a condition is true.


let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote.");
}

// (b) if...else Statement

// Used when we want to check two conditions (true or false).


let age2 = 16;

if (age2 >= 18) {
  console.log("You can vote.");
} else {
  console.log("You cannot vote.");
}

// (c) if...else if...else Statement

// Used when we need to check multiple conditions.


let marks = 72;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}

// (d) switch Statement

// Alternative to multiple if...else.

// Compares one value against multiple cases.


let day = 3;

switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid day");
}