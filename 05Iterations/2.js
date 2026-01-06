
let index = 0
while (index <= 10) {
    console.log(`${index}`);
    index += 2
}

let myArray = ["flash", "batman", "superman"]
let arr = 0
while (arr < myArray.length) {
    console.log(`${myArray[arr]}`);
    arr += 1
}

let score = 1

do {
    console.log(`${score}`);
    score++
} while (score <= 10);

let score1 = 11 // Value is more than the condition

do {
    console.log(`${score}`);
    score++
} while (score <= 10); // Expected output: 11, Why => cause do while loop mein kaam pehle hota hai condition baad me check hoti hai


