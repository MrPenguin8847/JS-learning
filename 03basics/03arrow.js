const user = {
  username: "Pengu",
  Price: 999,
  welcomeMsg: function(){
    console.log(`${this.username}, welcome to the website`);
    console.log(this);
  }
}
// this => In simple terms its just "who is calling the function", Exampler => in above code 'user' is calling 'welcomeMsg'

user.welcomeMsg()
user.username = "sam"
user.welcomeMsg()
console.log(this); // When we call 'this' in Global context It will show undefined as there is no caller But in browser it will show windows.


function chai(){
  let username = "pengu"
  console.log(this.username);
} // Here also no object is calling it just a raw function call
chai()

const chai1 = function(){
  let username = "pengu"
  console.log(this.username);
  
}
chai1() // Both ways we get undefined no matter how we declare it

// Arrow Function
const chai2 = () => {
  let username = "pengu"
  console.log(this);
}
chai2() // This is how we declare arrow function and it also shows undefined for same function

const addTwo = (num1, num2) => {
  return num1 + num2
}
console.log(addTwo(3,4));


// Implicit return
const addWithImplicit = (num1, num2) => (num1 + num2)
console.log(addWithImplicit(3, 4))

const toReturnObject = (num1, num2) => ({username: "pengu"}) // Syntax to return a objext
console.log(toReturnObject());
