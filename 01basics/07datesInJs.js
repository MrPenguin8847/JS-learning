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
console.log(myCreatedDate.toLocaleString('en-IN'));

let myTimeStamp = Date.now() // Returns the number of milliseconds ellapsed since 1 jan 1970 till now
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // Returns the milliseconds from 1 jan 1970 till the date assigned in variable
console.log(Math.round(Date.now()/1000)); // Converts the milliseconds into seconds and rounds it off

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getDate());

// Important
console.log(newDate.toLocaleString('default', {
  weekday: "long",
}));
