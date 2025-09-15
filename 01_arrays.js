// push() – Adds to the original array
let a = [1, 2];
let b = [3, 4];

// Add all elements of b to a (modifies a)
a.push(...b);
console.log(a); // [1, 2, 3, 4]
let c = ['x'];
let d = ['y', 'z'];

// Adds a whole array as a single element (nested array)
c.push(d);
console.log(c); // ['x', ['y', 'z']]


// concat() – Returns a new array (doesn't change originals)
let e = [10, 20];
let f = [30, 40];
// Combine arrays into a new array
let result1 = e.concat(f);
console.log(result1); // [10, 20, 30, 40]
console.log(e);       // Original remains: [10, 20]
let g = [1];
let h = ['a', 'b'];
// You can concat multiple arrays or values
let result2 = g.concat(h, [true, false]);
console.log(result2); // [1, 'a', 'b', true, false]




// Spread Operator ... – Expands arrays (for creating new ones)

let i = [5, 6];
let j = [7, 8];

// Create a new combined array using spread
let result3 = [...i, ...j];
console.log(result3); // [5, 6, 7, 8]
let k = ['a'];
let l = ['b'];

// Spread with extra values
let result4 = ['start', ...k, 'middle', ...l, 'end'];
console.log(result4); // ['start', 'a', 'middle', 'b', 'end']
let nested = [[1, 2], [3, 4]];

// Spreading nested arrays won't flatten them
let result5 = [...nested];
console.log(result5); // [[1, 2], [3, 4]]
