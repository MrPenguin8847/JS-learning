const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNum.map((num) => num + 10)
// console.log(newNums);
// Foreach can perform the same function but it won't make an array of it
const value = myNum.forEach((num) => {console.log(num + 10);})

// Chaining
const newNums = myNum
                .map((num) => num * 10)
                .map((num) => num + 1 ) // jab bhi chaining hoti hai toh jo bhi first chain ki value hai wo second chain me pass ho jati hai
                .filter((num) => num >= 40)
console.log(newNums);