

function sayMyName () {
  console.log("P");
  console.log("E");
  console.log("N");
  console.log("G");
  console.log("U");
}
sayMyName // Nomal reference
sayMyName() // Execution

function addTwoNumbers (number1, number2) {
  console.log(number1 + number2);
} // Here number1 and number2 are parameters

function addTwoNumbers (number1, number2) {
  let result = number1 + number2
  return result
  console.log("Pengu");
} // Return ke baad kuch bhi print nahi hoga
function addTwoNumbers (number1, number2) {
  let result = number1 + number2
  console.log("Pengu");
  return result
}
function addTwoNumbers (number1, number2) {
  return number1 + number2
}

const result = addTwoNumbers(3, 5) // Here 3 and null are arguments
console.log("Results: ", result);

function loginUserMsg (username){
  if(username === undefined){
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`
}
function loginUserMsg (username){
  if(!username){ // username === undefined can be written as !username 
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`
}
// we can also pass a default value 
function loginUserMsg (username = "sam"){
  if(!username){ // username === undefined can be written as !username 
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`
}  
console.log(loginUserMsg("Pengu"))
console.log(loginUserMsg())