// JS is a dynamically types language 

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
// Arrays, Objects, Functions

// Object
const heros = ["shaktiman", "naagraj", "doga"]

// Arrays
let myobj = {
  name: "pengu",
  age: 22,
}

// Function
const myfunction = function(){
  console.log("Hello world");
}

console.log(typeof scoreValue);
