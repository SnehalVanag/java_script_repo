// for Loop

// Used when we know the number of iterations.


for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}




// (b) while Loop

// Used when the number of iterations is not fixed but depends on a condition.


let i = 1;
while (i <= 3) {
  console.log("While Loop:", i);
  i++;
}

// (c) do...while Loop

// Similar to while, but executes at least once, even if condition is false.


let j = 5;
do {
  console.log("Do While Loop:", j);
  j++;
} while (j < 5);






// (d) for...of Loop

// Used to loop through values of arrays or strings.


let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log(fruit);
}

// (e) for...in Loop

// Used to loop through object properties.


let person = { name: "Snehal", age: 22, city: "Mumbai" };

for (let key in person) {
  console.log(key + ":", person[key]);
}

// 3. Jump Statements
// (a) break

// Exits from the loop immediately.


for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}



// (b) continue

// Skips the current iteration and moves to the next.


for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}