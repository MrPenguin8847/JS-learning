// Hamesha har code conditional base par run hona chahiye meaning agar aap login ho toh koi code run ho aur agar logged out ho toh koi code run ho and that is where control flow comes in
// 1st control flow - if
// if (condition) {} // Syntax

const isUserLoggedIn = true 
const temperature = 41

if (temperature < 50) {
  console.log("less than 50"); 
}
else {
  console.log("Temperature is greater than 50");
}
// <, >, <=, >=, ==, !=, ===, !==

const score = 200
if (score > 100) {
  const power = "fly"
  console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`); Gives error due to scope


const balance = 1000
// Implicit scope => The scope is defined automatically within that line or separated by comma 
// if (balance > 500) console.log("test"), console.log("test2"); // Never use this type of code its highly unreadable

if (balance < 500) {
  console.log("Less than");
} else if (balance < 750) {
  console.log("Less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 3) { // To check multiple statements if all are true then code gets executed
  console.log("Allowed to buy courses");
}
if (loggedInFromGoogle || loggedInFromEmail) { // To check if either one of them is true
  console.log("User logged in");
}
