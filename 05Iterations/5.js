const coding = ["js", "ruby", "java", "py", "cpp"]

coding.forEach( function (item) { // Call back function doesn't have a name
    console.log(item);
} );

// By arrow function
coding.forEach((item) => {
    console.log(item);
});

// 3rd way
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})