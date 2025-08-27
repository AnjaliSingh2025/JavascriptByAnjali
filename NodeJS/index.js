// console.log("Hii");
// ✅ Q: If console.error() prints an error, does it stop execution?
// 👉 No, it just logs. To stop, you need throw or process.exit() in Node.js.

// ✅ Q: Why use warn or error instead of log?
// 👉 Helps differentiate message severity, makes debugging clearer, and tools like browser DevTools or logging systems can filter by type.

// ✅ Q: How can you group logs?
// 👉 Use console.group() and console.groupEnd(). Example:
console.group("User Info");
console.log("Name: Anjali");
console.warn("Age is missing");
console.error("Email is invalid");
console.groupEnd();
const result = require('./app');
console.log(result);
