// Array 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "IronMan"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array Methods

myArr.push(7)
console.log(myArr)

myArr.pop()
console.log(myArr);

myArr.unshift(0) // Adds the value to start of the array but we don't use it as it will require shifting of all values which can increase load on Computer
console.log(myArr);
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join() // Converts an array into string
console.log(myArr);
console.log(newArr);
console.log(typeof newArr)

// Slice, Splice
console.log("A", myArr);
const myn1 = myArr.slice(1, 3) // Does not changes the array

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // Splice changes the array itself
console.log("C", myArr);
console.log(myn2);




