const marvelHeros = ["Thor", "IronMan", "SpiderMan"]
const dcHeros = ["SuperMan", "flash", "batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);


const allNewHeros = [...marvelHeros, ...dcHeros]
console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity) // We can also assign a specific depth instead of infinity
console.log(realAnotherArray);



console.log(Array.isArray("Pengu"));
console.log(Array.from("Pengu"));
console.log(Array.from({name: "Pengu"})); // Important => can't convert this into array and will display empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

