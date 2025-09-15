// 1. join()
// Purpose: Convert array elements into a string, joined with a separator.
// Does not modify the original array.


let fruits = ["apple", "banana", "cherry"];

console.log(fruits.join());      // "apple,banana,cherry"  (default comma)
console.log(fruits.join(" - ")); // "apple - banana - cherry"
console.log(fruits);             // ["apple", "banana", "cherry"] (unchanged)

// 2. slice()
// Purpose: Extract a portion of the array into a new array.
// Does not modify the original array.


let fruits1 = ["apple", "banana", "cherry", "date"];

let sliced = fruits.slice(1, 3); 
console.log(sliced); // ["banana", "cherry"]  (from index 1 to 2)
// console.log(fruits); // ["apple", "banana", "cherry", "date"] (unchanged)
// 3. splice()
// Purpose: Change the array by adding/removing/replacing elements.
// Does modify the original array.


let fruits2 = ["apple", "banana", "cherry", "date"];

// Remove 2 elements starting from index 1
let removed = fruits.splice(1, 2);
console.log(removed); // ["banana", "cherry"]
console.log(fruits);  // ["apple", "date"]

// Insert elements at index 1 (without removing)
fruits.splice(1, 0, "kiwi", "mango");
console.log(fruits); // ["apple", "kiwi", "mango", "date"]

// Replace 1 element at index 2
fruits.splice(2, 1, "orange");
console.log(fruits); // ["apple", "kiwi", "orange", "date"]



// Original array
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

console.log("Original:", fruits);

// 1️⃣ join() → Makes a string, does NOT change original
let joined = fruits.join(" - ");
console.log("join():", joined);     // "apple - banana - cherry - date - elderberry"
console.log("After join:", fruits); // ["apple", "banana", "cherry", "date", "elderberry"]

// 2️⃣ slice() → Copies part into a new array, does NOT change original
let sliced = fruits.slice(1, 4);    // index 1 to 3
console.log("slice():", sliced);    // ["banana", "cherry", "date"]
console.log("After slice:", fruits);// ["apple", "banana", "cherry", "date", "elderberry"]

// 3️⃣ splice() → Removes/Replaces/Adds, DOES change original
let removed = fruits.splice(2, 2, "kiwi", "mango");
// Removes "cherry" and "date" (index 2 & 3), then adds "kiwi" and "mango"
console.log("splice() removed:", removed); // ["cherry", "date"]
console.log("After splice:", fruits);      // ["apple", "banana", "kiwi", "mango", "elderberry"]
