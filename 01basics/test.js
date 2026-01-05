const paragraph1 = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[a-z]/g  // a global regular expression will display all the matching values.
const regex1 = /the/gi // a regular expression but gi defines that it won't care about the type of text(uppercase, lowercase, etc.)
const regex2 = 'the' // match will automatically convert this string into a regular expression.
const found = paragraph1.match(regex)
console.log(found);


let myobj = {
  name: "pengu",
  age: 22,
}

console.log(typeof myobj);

const heros = ["shaktiman", "naagraj", "doga"]
console.log(typeof heros);


const marvelHeros = ["Thor", "IronMan", "SpiderMan"]
console.log(typeof marvelHeros);

const balance = 1000

if (balance > 500) {
  console.log("Less than");
} else if (balance > 750) {
  console.log("Less than 750");
} else if (balance > 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}