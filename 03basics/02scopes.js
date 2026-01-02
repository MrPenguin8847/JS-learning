// Scope => defines the accessibility or visibility of variables, functions, and objects in a particular part of your code.
// Basically, {} this is scope
// var c = 300 // scope is the reason for not using var anymore cause it doesn't follow the scope rules
let a = 300 // Global scope => works throughout the code 

// Block scope => the value written in scope that doesn't apply to rest of the code except that block of code 
if(true){
  let a = 10
  const b = 20
  console.log("Inner: ", a);
  
}
console.log(a);
// console.log(b);
// console.log(c);

//  Nested Scope
function one(){
  const username = "Peng"
  function two(){
    const website = "youtube"
    console.log(username);
  }
  // console.log(website); // Will give error

  two()

}

one()
// Conclusion => for every nested scope call stack is different, the main function will not call that nested functions we have to create a call.

if (true) {
  const username = "pengu"
  if(username === "pengu"){
    const website = " youtube"
    console.log(username + website);
  }
  // console.log(website); // block scope can't be accessed outside of block
}

// console.log(username); // block scope can't be accessed outside of block


// ++++++++++++++++++++++++++++++++++++++++++++= Interesting ++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5))

function addone(num){
  return num + 1
}
 
// addtwo(5) // ERROR
const addtwo = function(num){
  return num + 2
}

// Conclusion => the difference is how we declare a function in 2nd method we can't access the value before the declaration