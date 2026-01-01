// Scope => defines the accessibility or visibility of variables, functions, and objects in a particular part of your code.
// Basically, {} this is scope
// var c = 300 // var is just for example we won't use it // Global scope => works throughout the code 
let a = 300 // Global scope

// Block scope => the value written in scope that doesn't apply to rest of the code except that block of code 
if(true){
  let a = 10
  const b = 20
  console.log("Inner: ", a);
  
}
console.log(a);
// console.log(b);
// console.log(c);

