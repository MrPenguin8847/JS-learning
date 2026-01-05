const userEmailEmpty = ""
if (userEmailEmpty) {
  console.log("Got user email");
  
} else {
  console.log("Don't have a user email");
}
const userEmail = "p@pengu.ai"
if (userEmail) {
  console.log("Got user email");
  
} else {
  console.log("Don't have a user email");
}
const userEmailarray = []
if (userEmailarray) {
  console.log("Got user email");
  
} else {
  console.log("Don't have a user email");
}

// Conclusion => we don't have a specific comparison or true false value here but its assuming that some values are true and empty string is false. These types of values are classified as Truthy or falsy values

// Falsy values => false, 0, -0, bigint - 0n, empty string, null, undefined, NaN
// Truthy values => Any value that is not falsy, "0", 'false', " ", array - [], object - {}, empty function(){} 

if (userEmailarray.length === 0) {
  console.log("Array is empty");
}

const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

// Nullish coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 10
val1 = null ?? 10 ?? 15
console.log(val1);

// Terniary operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");

