// Dates

const myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23) // Months start from zero in JS
// let myCreatedDate = new Date(2023, 0, 23, 5 ,3)
let myCreatedDate = new Date("01-14-2025")

console.log(myCreatedDate.toLocaleString());
