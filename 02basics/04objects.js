// Declaring singleton

// const tinderUser = new Object()  // Singleton Object
const tinderUser = {}  // Non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
  email: "pengu@gmail.com",
  fullname: {
    userFullName: {
      firstName: "Navdeep",
      lastName: "Singh"
    }
  }
}
console.log(regularUser.fullname.userFullName.firstName);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2} // Never use this syntax
// const obj3 = Object.assign({}, obj1, obj2) // empty paranthesis is for target which notifies that everything should be merged in empty paranthesis.If we don't assign it then automatically ecerything will get merged in obj1

const obj3 = {...obj1, ...obj2} // triple dot is for spread operator
console.log(obj3);

const users = [
  {
    id: 1,
    email: "P@hotmail.com"
  },
  {
    id: 2,
    email: "N@hotmail.com"
  },
  {
    id: 3,
    email: "G@hotmail.com"
  },
  {
    id: 4,
    email: "H@hotmail.com"
  },
  {
    id: 5,
    email: "Q@hotmail.com"
  }
]

console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //Impotant
console.log(Object.values(tinderUser));  //Impotant
console.log(Object.entries(tinderUser));  //Impotant

console.log(tinderUser.hasOwnProperty('isLogged')); // to check if the key exists in the object

