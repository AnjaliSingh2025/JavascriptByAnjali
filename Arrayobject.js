// In JavaScript, new Array is a constructor used to create an Array object.
let arr1 = new Array();           // Creates an empty array []
let arr2 = new Array(3);          // Creates an array with length 3 (empty slots)
let arr3 = new Array(1, 2, 3);    // Creates an array with elements [1, 2, 3]
// You can also use Array() without new—it behaves the same way.
let c = Array(1, 2, 3);
console.log(c); // [1, 2, 3]


// Most developers prefer array literals because they’re shorter and less confusing:Z
let arr = [];           // empty
let arr2 = [1, 2, 3];   // with values
// Creates array with one element (3)
let arr2 = [3];
console.log(arr2);        // [3]
console.log(arr2.length); // 1
console.log(arr2[0]);     // 3
