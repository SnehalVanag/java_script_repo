// // // // for Loop

// // // // Used when we know the number of iterations.


// // // for (let i = 1; i <= 5; i++) {
// // //   console.log("Iteration:", i);
// // // }




// // // // (b) while Loop

// // // // Used when the number of iterations is not fixed but depends on a condition.


// // let i = 1;
// // while (i <= 10) {
// //   console.log("While Loop:", i);
// //   i++;
// // }

// // // // (c) do...while Loop

// // // // Similar to while, but executes at least once, even if condition is false.


// // let j = 5;
// // do {
// //   console.log("Do While Loop:", j);
// //    j++;
// //  } while (j < 5);



// peakpr = ["sumit","gautam","samrudhi","sandesh","pratima","parth"]
// for (let i of peakpr){
//     console.log("name = ",i)
//     if(i=="pratima")
//       continue;
        
    

// }



// // // // (d) for...of Loop

// // // // Used to loop through values of arrays or strings.


// // // let fruits = ["Apple", "Banana", "Mango"];
// // // for (let fruit of fruits) {
// // //   console.log(fruit);
// // // }

// // // // (e) for...in Loop

// // // // Used to loop through object properties.


// // // let person = { name: "Snehal", age: 22, city: "Mumbai" };

// // // for (let key in person) {
// // //   console.log(key + ":", person[key]);
// // // }

// // // // 3. Jump Statements
// // // // (a) break

// // // // Exits from the loop immediately.


// // // for (let i = 1; i <= 10; i++) {
// // //   if (i === 5) 
// // //     break;
// // //   console.log(i);
// // // }



// // // // (b) continue

// // // // Skips the current iteration and moves to the next.


// for (let i = 1; i <= 5; i++) {
//    if (i === 3) 
//      continue;
//   console.log(i);
// }


// // // for (let i=0; i<5; i++){
// // //   console.log(i)
// // // }


// // // npm init -y
// // // npm install prompt-sync
// // // const prompt = require("prompt-sync")();

// // // let n = prompt("enter a number")
// // // n=Number.parseInt(n)
// // // for(i=0;i<n;i++){
// // //   console.log(i)
// // // }

// // let obj = {
// //   abc:11,
// //   aaa:22,
// //   ddd:22

// // }

// // // for (let i in obj){
// // //   console.log(i,obj[i])
// // // }
// // let name="snehal"

// // for (let b of name){
// // console.log(b)
// // }
// // console.log("b",b)
// // 
// // i=2   i<=10  i++

// // for (let i=1; i<=30;i++){
// //   if(i%3==0){
// //     console.log(i)
// //   }
// // }
// // console.log(i)


// // obj={1:"gautam",
// //   2:"sumit",
// //   3:"sandesh",
// //   4:"samrudhi"
// // }



// // for (i in obj){
// //   console.log(i + obj[i])
// // }


// // arr = ["a","b","c","d"]
// // for (i of arr){
// //   console.log(i)
// // }


arr = ["a","b","c","d"]


arr.forEach(element => {
  console.log(element)
  
});

arr.map((ele)=>{
  console.log(ele+"1")
})

arr1 = [1,2,3,4,5,6,7,8,9]


const e_num = arr1.filter(n=>n%2===0)
console.log(e_num)



