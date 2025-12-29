const name = "navy"
const repocount = 3
// console.log(name + repocount + " value"); // Outdated 


console.log(`Hello my name is ${name} my repocount is ${repocount}`); // always use this syntax
const gameName = new String('navy-pengu') // another way to assign a string
console.log(gameName[0]); // prints the char on specific position
console.log(gameName.__proto__); // not used anymore DELETED

console.log(gameName.length); //gives length of string
console.log(gameName.toUpperCase()); // diplays string in uppercase
console.log(gameName.charAt(2)); // tells the string char on specific index
console.log(gameName.indexOf('n')); // tells the index on specific char

const newString = gameName.substring(0, 5) // It displays only the char till specified index (we can't give negative values)
console.log(newString);

const anotherString = gameName.slice(-8, 5) // same as substring but we can give negative values
console.log(anotherString);

const newStringOne = "    navypengu     "
console.log(newStringOne);
console.log(newStringOne.trim()); // trims the space 

const url = "https://navy%20pengu.com/"

console.log(url.replace('%20', '-')); // replaces anything which is told 
console.log(url.includes("jumanji")); // checks if the specific char is there or not 

console.log(gameName.split('-')); // makes an array of string

const para = "This is me trying to config string"
console.log(para.split(" "));


