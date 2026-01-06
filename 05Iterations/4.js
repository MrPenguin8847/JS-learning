const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "cpp"]
for (const key in programming) {
    console.log(key);
}
// So basically object was made because array only has number keys and can't be changed, but object mein kuch bhi key daal skte hai
for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India')

for (const key in map) {
    console.log(key);
} // Iteration on map is not possible like this. Output: no value in return
