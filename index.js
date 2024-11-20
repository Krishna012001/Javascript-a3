// JAVASCRIPT LOOP ASSGINMENT

// Q1. Write a JavaScript program to construct the     following pattern, using a nested for loop.
//       * 
//       * * 
//       * * *  
//       * * * *
//       * * * * *

// let A="*"

//  for(i=1;i<=5;i++ ){
//     for(j=1;j<=i; j++){
//         console.log(A)

//    }
//    console.log("\n")
// }








// Q2. Iterate through all numbers from 1 to 45. Print the following:

//    For multiples of 3 print “Fizz”
//    For multiples of 5 print “Buzz”
//    For multiples of 3 and 5 print “FizzBuzz”

// for(i=1;i<=45;i++){

//    if (i%5===0 && i%3===0){
//       console.log(` $i fizzBuzz`)

//    }
//       else if(i%5===0){
//          console.log("Buzz")
//       }

//       else if (i%3===0){
//          console.log("fizz")
//       }
// }

// Q3. Calculate the sum of all the numbers in the following array

// var numbersArray = [1,13,22,123,49]

// let sum=0;
// let numbersArray=[1,13,22,123,49];

// for(i=0;  i<numbersArray.length; i++){

// sum += numbersArray[i];
// }
// console.log(sum);


// Q4.Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // 


let Sum=0;
let sum_j=0;
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
for(i=0;i<arr_1.length;i++){
   Sum +=arr_1[i]
}
for(j=0;j<arr_2.length;j++){
sum_j +=arr_2[j]
}
console.log(Sum+sum_j);



// Q5.Using a for loop output the elements in reverse order

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
//   Example output: 
//   true 3.5  be  false cannot  true 9 what 43 OR each item   on a new line

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
//  let arr1 = []
// for(i= arr.length-1; i>=0; i--)
// {
//    arr1.push(arr[i])
// }

// console.log(arr1)

