const number = 23;

if (number < 40) {
  console.log("This is a number");
}

const age = 15;

// If Else
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Not an Adult");
} 

// Else if

const score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else {
  console.log("C");
}

// Switch Statements
const day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid Day");
    break;
}

// // Loops
for (let i = 1; i < 5; i++) {
  console.log(i);
}

//while
let i = 2;
while (i < 8) {
  console.log(i);
  i++;
}

//loop control
// Stop the loop at when i = 5
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

console.log("Continue");
// This example will skip number 2 and continue
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}

// Tenary Operators
const messi = 10;
const ronaldo = 7;

const goat = messi > ronaldo ? "the goat" : "Not the goat";
console.log(goat);
// What the above did is the same as if else. so if it is true that 10 is greater than 7 then it will show the goat. else it will show not the goat.
// It assigns the value to const goat.

