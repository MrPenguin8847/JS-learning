// There are Two different ways to decalre object => 1. like literal 2. like constructor
// Singleton => means ye apne tarah ka ek hi object hai. 

// Difference between object literal and object constructor:
/*| Thing              | Object Literal | Object Constructor |
  | ------------------ | -------------- | ------------------ |
  | What it is         | One object     | A factory          |
  | How many objects   | One            | Many               |
  | Easy for beginners | ✅ Yes         | ❌ Harder         |
  | Singleton          | ✅ Yes         | ❌ No             | */

// Object literals

const mySym = Symbol("key1")

const JsUser = {
  "full name": "Pengu",
  age: 18,
  [mySym]: "mykey1", // syntax to use Symbol
  location: "Jaipur",
  email: "Pengu@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}


console.log(JsUser.email);
console.log(JsUser["email"]); // This syntax is main and effective as the upper syntax has some flaws
// console.log(JsUser.full name); // When the string name has space it fails and gives error
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "Pengu@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "pengu@microsoft.in"
console.log(JsUser);

JsUser.greeting = function(){
  console.log(`Hello JsUser`); 
}
JsUser.greetingTwo = function(){
  console.log(`Hello JsUser, ${this["full name"]}`); 
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

