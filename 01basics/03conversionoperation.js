let score = "pengu"
console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 33
let valueInBoolean = Boolean(isLoggedIn)
console.log(valueInBoolean);
console.log(typeof valueInBoolean);


// 1 => true; 0 => false
// "" => false
// "pengu" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


/*********************************************************** OPERATIONS *************************************************************************/



console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2/2);
console.log(2%2);

let str1 = "hello"
let str2 = " pengu"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log("1" + (2 + 2));
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2 // Not recommended => Do not assign variables like this

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// Link to study
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
