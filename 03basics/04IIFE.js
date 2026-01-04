// Immediately Invoked Function Expression (IIFE) => Its a function which gets executed immidiately.
// Why it exists:
// 1. Avoids polluting the global scope by leveraging JavaScript's function-level scoping (or block-level for let and const).
// 2. Keeps variables private
// 3. Runs setup code once

(function chai(){ //named IIFE
  console.log(`DB Connected`);
})(); // This is the synatx of IIFE and the semicolon at the end is very important as it ends the IIFE function

( (name) => { // UnNamed IIFE, and parameters can be passed like normal
  console.log(`DB Connected 2 ${name}`);
})(`hitesh`);