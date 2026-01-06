// Iterations
// for loop
for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is best number")
  }
  console.log(element)
}

for (let i = 1; i <= 10; i++) {
  const element = i;
  console.log(`Outer Loop value: ${i}`);
  for (let j = 1; j < 10; j++) {
    const element = j;
    console.log(`${j}${i}`);
    console.log(i + '*' + j + '=' + i * j);
  }
}
let myArray = ["flash", "batman", 'superman']

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

// Zaruri nahi hai ki ek baar loop start hogya toh end tkk hi jaye in some conditions loop has to be stopped in between
// for this two keywords are important - break and continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`)
    break
  }
  console.log(`${index}`);
}
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`)
    continue
  }
  console.log(`${index}`);
}