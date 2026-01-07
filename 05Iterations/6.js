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
    return num > 4 // return is important when writing inside the curly braces
})
console.log(newNum);

const books = [
    {title: "Book one", genre:"Fiction", publish: 1981, edition: 2004},
    {title: "Book two", genre:"Non-Fiction", publish: 1992, edition: 2008},
    {title: "Book three", genre:"History", publish: 1999, edition: 2007},
    {title: "Book four", genre:"Non-Fiction", publish: 1989, edition: 2010},
    {title: "Book five", genre:"History", publish: 2009, edition: 2014},
    {title: "Book six", genre:"Science", publish: 1987, edition: 2010},
    {title: "Book seven", genre:"Fiction", publish: 1986, edition: 1996},
    {title: "Book eight", genre:"Science", publish: 2011, edition: 2016},
]

let userBooks = books.filter( (bk) => bk.genre === 'Fiction')
userBooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre == 'History'
})
console.log(userBooks);