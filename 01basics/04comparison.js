console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1); // string gets converted to number automatically and gets compared
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* The reason is that an equality operator and an comparison operator work differently in JS 
Comparison converts null to a number, treating it as 0 
That's why null >= 0 is true but null > 0 is false and null == 0 is also false (cause == doesn't treat it as 0)*/
 

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined < 0);
console.log(undefined > 0);
// Undefined is not treated as zero

// === => strict check - also checks the data type

console.log("2" === 2);




