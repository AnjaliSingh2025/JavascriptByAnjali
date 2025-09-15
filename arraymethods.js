let nums = [10, 20, 30, 40];

// 1. push() → add element at end
nums.push(50);
console.log(nums); // [10, 20, 30, 40, 50]

// 2. pop() → remove last element
nums.pop();
console.log(nums); // [10, 20, 30, 40]

// 3. shift() → remove first element
nums.shift();
console.log(nums); // [20, 30, 40]

// 4. unshift() → add element at start
nums.unshift(5);
console.log(nums); // [5, 20, 30, 40]

// 5. map() → create new array by transforming each element
let doubled = nums.map(n => n * 2);
console.log(doubled); // [10, 40, 60, 80]

// 6. filter() → get elements that match a condition
let filtered = nums.filter(n => n > 20);
console.log(filtered); // [30, 40]

// 7. forEach() → loop through each element
nums.forEach(n => console.log("Value:", n));

// 8. includes() → check if array contains a value
console.log(nums.includes(30)); // true
console.log(nums.includes(100)); // false

let fruits = ["apple", "banana", "cherry", "banana"];

console.log(fruits.indexOf("banana")); // 1 (first match)
console.log(fruits.indexOf("cherry")); // 2
console.log(fruits.indexOf("mango"));  // -1 (not found)

