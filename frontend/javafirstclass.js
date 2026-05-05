// alert("Hello World")

var name = "john";
console.log(name);

let age = 25;
console.log(age);

const country = "Nigeria";
console.log(country);

// Data types:

// String
let footballName = "Messi";
console.log(footballName);

//number
let no = 10;
let price = 2.45;

//booleans
let isGoat = true;
console.log(isGoat);

//undefined
let x;
console.log(x);

//null
let y = null;
console.log(y);

const firstName = "Adebimpe";
const lastName = "Favour";
// const fullName = firstName + " " + lastName
const fullName = `${firstName} ${lastName}`; // The ` is not apostrophe o.
console.log(fullName);

let a = 5;
let b = 3;

let sum = a + b;
let sub = a - b;
let mult = a * b;
let expo = a ** b;
let moduluss = a % b;
let div = a / b;

console.log(sum);
console.log(sub);
console.log(mult);
console.log(expo);
console.log(moduluss);
console.log(div);

const c = 5;
const d = "5";

console.log(d == 5); // loosely compares. only checks value
console.log(d === 5); // strictly compares value and type
console.log(c > 54);
console.log(c <= 23);

let isLoggedIn = true;
let hasPerm = false;

console.log(isLoggedIn && hasPerm); // This is AND. it checks if both are true
console.log(isLoggedIn || hasPerm); // This is OR. It checks if any of them are true.

// const profNo = 45;
// profNo =23; // you cannot reasign a constant. only a let variable.
// console.log(profNo)

let coonts = 6;
console.log(coonts);
coonts++;
console.log(coonts);