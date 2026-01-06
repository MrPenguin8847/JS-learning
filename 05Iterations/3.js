// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}

// Maps

const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India') // map only takes unique values so india won't be displayed twice

console.log(map);

for (const [key, value] of map) { // Syntax to print key and value differently
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// } 
// Objects are not iteratable with this method