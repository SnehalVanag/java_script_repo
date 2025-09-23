// What is Asynchronous?

// By default, JavaScript is single-threaded (executes one task at a time).

// If a task takes time (like fetching data from a server), it could block other code.

// To avoid this, JavaScript uses asynchronous programming.

// 👉 Meaning: Code execution continues without waiting for the slow task to finish.

// 2. Synchronous vs Asynchronous
// 🔹 Synchronous (Blocking)
console.log("Start");
for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log("End");




// 🔹 Asynchronous (Non-Blocking)
// console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);

console.log("End");




//  setTimeout runs after 2 seconds, but "End" executes immediately.

// 3. Ways to Handle Asynchronous Code
// (a) Callbacks

// Function passed as an argument to another function.

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 2000);
}

fetchData(() => {
  console.log("Now process the data");
});

//  Leads to Callback Hell when nested deeply.

doTask1(() => {
  doTask2(() => {
    doTask3(() => {
      console.log("All tasks done!");
    });
  });
});

// (b) Promises

// A better way to handle async code.

// A Promise has 3 states:

// Pending

// Resolved (fulfilled)

// Rejected (error)

let promise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) resolve("Task completed!");
    else reject("Error occurred");
  }, 2000);
});

promise
  .then((message) => console.log("✅", message))
  .catch((error) => console.log("❌", error));

// (c) async/await (ES8)

// Cleaner way to write promises.

// Makes async code look like sync code.

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched!"), 2000);
  });
}

async function getData() {
  console.log("Start fetching...");
  let result = await fetchData(); // waits here
  console.log(result);
  console.log("Done!");
}

getData();



// 4. Real-World Example (API Fetch)
async function getUser() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log("User:", data.name);
  } catch (error) {
    console.log("Error:", error);
  }
}

getUser();