// JS is a dynamically typed language meaning we don't need to assign any variables type JS can identify that by itself

// Types of Datatypes

// Primitive (call by value)
// 7 types : string, Number, Boolean, Null, Undefined, symbol, bigint

const score = 100 // Number
const scoreValue = 100.3  // Number

const isLoggedIn = false //boolean
const outsideTemp = null //object
let userEmail; //undefined

const id = Symbol("123") //symbol
const anotherId = Symbol("123") //Symbol

console.log(id === anotherId); 

const bigNumber = 234567893456789045678945678n  // bigint


// Non-primitive (call by reference)
// Arrays (Array is a typeof object), Objects, Functions

// array
const heros = ["shaktiman", "naagraj", "doga"]
console.log(typeof heros);

// Object
let myobj = {
  name: "pengu",
  age: 22,
}

// Function
const myfunction = function(){
  console.log("Hello world");
}
function newfuntion (){
  console.log("Hello Pengu");
} // better way to assign a function

console.log(typeof scoreValue);


/************************************************************ Memory ***********************************************************/ 

// Stack (Primitive), Heap (Non-Primitive)

let myname = "Navy"
let myAnotherName = myname
myAnotherName = "pengu"
console.log(myname);
console.log(myAnotherName);

let userOne = {
  email: "navy@google.com",
  pass: "gemini"
}
let userTwo = userOne
userTwo.email = "pnegu@gmail.com"

console.log(userTwo);
console.log(userOne);
// Stack always gets the copy and Heap changes the actual reference 