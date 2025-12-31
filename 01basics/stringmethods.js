const sentence = "The quick brown fox jumps over the lazy dog."
let index = 5

// First - at()
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);

index = -4 
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
console.log(`An index of ${index} returns the character ${sentence.at(10)}`);

// Second - charAt()
console.log(`The character at index ${index} is ${sentence.charAt(20)}`);

// Third - charCodeAt()
console.log(`The code of ${sentence.charAt(12)} is ${sentence.charCodeAt(12)}`);

// Fourth - codePointAt() 
const icons = "ok 👍";
console.log(icons.length);
console.log(icons.codePointAt(3));
console.log(icons.charCodeAt(3)); 

// Fifth - concat()
const str1 = "hello"
const str2 = "world"
console.log(str1.concat(" ", str2));
console.log(str2.concat(", ", str1));

// Sixth - endsWith()
const str3 = "Cats are the best!";

console.log(str3.endsWith("best!"));
// Expected output: true

console.log(str3.endsWith("best", 17));
// Expected output: true

const str4 = "Is this a question?";

console.log(str4.endsWith("question"));
// Expected output: false

// Seventh - include()

const word = "fox"
console.log(`The word ${word} ${sentence.includes(word) ? "is" : "is not"} in the sentence`)

// Eighth - indexof()
const paragraph = "I think Ruth's dog is cuter than your dog but my dog is the best"
const searchterm = "dog"
const indexOfFirst = paragraph.indexOf(searchterm)
console.log(`The index of first ${searchterm} is ${paragraph.indexOf(searchterm)}`);
console.log(`The index of second ${searchterm} is ${paragraph.indexOf(searchterm, indexOfFirst + 1)}`);

// Nineth - lastIndexOf() => same as indexof() just starts from last of the string
console.log(`The index of last ${searchterm} is ${paragraph.lastIndexOf(searchterm)} `);

// Tenth - isWellFormed()
const strings = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.isWellFormed());
}

// Eleven - localeCompare()
const a = "réservé"; // With accents, lowercase
const b = "RESERVE"; // No accents, uppercase

console.log(a.localeCompare(b));
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));

// Twelve - match()
const paragraph1 = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[a-z]/g  // a global regular expression will display all the matching values.
const regex1 = /the/gi // a regular expression but gi defines that it won't care about the type of text(uppercase, lowercase, etc.)
const regex2 = 'the' // match will automatically convert this string into a regular expression.
const found = paragraph1.match(regex2)
console.log(found);

//Thirteen - matchAll()
const regex3 = 'the'
const found1  = paragraph1.matchAll(regex3) // converts the string into regular expression which is global automatically even if not assigned.
console.log(found) 
// can be used with loop to get multiple results

// Fourteen - normalize() => I can't understand

// Fifteen - padEnd()
const str100 = "Breaded Mushrooms";
console.log(str100.padEnd(25, "-"));
const num = "100"
console.log(num.padEnd(5, ","));

// sixteen - padStart()
console.log(str100.padStart(5, "."));

const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*"); // Important
console.log(maskedNumber);

// Seventeen - repeat()
const mood = "Happy! ";

console.log(`I feel ${mood.repeat(3)}`);

// Eighteen - replace()
const paragraph200 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph200.replace("Ruth's", "my"));

// Nineteen - replaceAll()
const paragraph100 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph100.replaceAll("dog", "monkey"));

// Twenty - search()
let exp = 'The rain in SPAIN stays mainly in the plain'
let position = exp.search('ain')
let position2 = exp.search(/ain/)
let position3 = exp.search(/AIN/)
let position4 = exp.search(/AIN/i) //both upper and lower case 

console.log(position4);

// Twentyone - slice()
const gameName = 'navy-pengu'
const anotherString = gameName.slice(-8, 5) // same as substring but we can give negative values
console.log(anotherString);

// TwentyTwo - split()
console.log(gameName.split('-')); // makes an array of string

// TwentyThree - startsWith()
const str = "Saturday night plans";

console.log(str.startsWith("Sat"));

// TwentyFour - substring()
const str6 = "Mozilla";

console.log(str6.substring(1, 3));

// TwentyFive - toLocaleLowerCase()
const dotted = "İstanbul";

console.log(`EN-US: ${dotted.toLocaleLowerCase("en-US")}`);

// TwentySix - toLocaleUpperCase()
console.log(dotted.toLocaleUpperCase("en-US"))

// TwentySeven - toLowerCase()
console.log(gameName.toLowerCase()); // diplays string in lowercase

// TwentyEigth - toUpperCase
console.log(gameName.toUpperCase()); // diplays string in uppercase


// TwentyNine - toString()
const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"

// Thirty - trim()
const newStringOne = "    navypengu     "
console.log(newStringOne);
console.log(newStringOne.trim()); // trims the space 

// ThirtyOne - trimEnd()
const greeting = "   Hello world!   ";

console.log(greeting);
console.log(greeting.trimEnd());

// ThirtyTwo - trimStart()
console.log(greeting.trimStart());

// ThirtyThree - valueOf()
console.log(stringObj);
console.log(stringObj.valueOf());
