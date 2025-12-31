const paragraph1 = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[a-z]/g  // a global regular expression will display all the matching values.
const regex1 = /the/gi // a regular expression but gi defines that it won't care about the type of text(uppercase, lowercase, etc.)
const regex2 = 'the' // match will automatically convert this string into a regular expression.
const found = paragraph1.match(regex)
console.log(found);