// Function with parameters
function greet(name, age) {
  // If no argument is passed, parameters become 'undefined'
  console.log("Name:", name); // will be 'undefined' if not passed
  console.log("Age:", age);   // will be 'undefined' if not passed
}

// Calling function without arguments
greet();  

/* 
Explanation:
- We defined the function greet(name, age).
- Parameters 'name' and 'age' are placeholders for values.
- When calling greet() without arguments, JavaScript assigns 'undefined' to both 'name' and 'age'.
- So output will be:
    Name: undefined
    Age: undefined
*/
