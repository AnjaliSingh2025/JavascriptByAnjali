// A function is a reusable block of code that performs a task or returns a value.
function greet() {
  console.log("Hello!");
}

greet(); // Calls the function → Output: Hello!


let outside = "global";

function testScope() {
  let inside = "local";
  console.log(outside); // Can access global
  console.log(inside);  // Can access local
}

testScope();
// console.log(inside); ❌ Error: not defined (outside function)

function multiply(a, b) {
  let product = a * b;
  return product;
}

console.log(multiply(4, 5)); // 20
// console.log(a); ❌ Error: a is not defined outside the function

