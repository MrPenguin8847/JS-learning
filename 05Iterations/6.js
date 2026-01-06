const coding = ["js", "ruby", "java", "py", "cpp"]

const values = coding.forEach((item) => {
    // console.log(item);
    return item
});

console.log(values);
// Conclusion => foreach doesn't return any value it can be used to perform some other functions

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNums = myNums.filter((num) => num > 4)  // Filter will return the value that stisfy the condition
console.log(newNums);
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNum = myNum.filter((num) => {
    return num > 4
})
console.log(newNum);
