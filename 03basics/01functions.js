

function sayMyName () {
  console.log("P");
  console.log("E");
  console.log("N");
  console.log("G");
  console.log("U");
}
sayMyName // Normal reference
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

// Function example
function calculateCartPrice (val1, val2, ...num1){ // rest operator (...) looks same as spread operator but they are different in work
  return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "Pengu",
  price: 199
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} price is ${anyobject.price}`);
  
}
handleObject(user)
handleObject({
  username: "sam",
  price: 399
})


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
  return getArray[2]
}
console.log(returnSecondValue(myNewArray));
