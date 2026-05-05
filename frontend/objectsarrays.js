const arr1 = [1, 2, 3]; // This is an array
console.log(arr1);

const arr2 = new Array(4, 5, 6);
console.log(arr2);

const fruits = ["Fish", "Peanut", "Meat"];
console.log(fruits[0]);
console.log(fruits[2]);

const nums = [1, 2, 3];
//nums.push(4); // This add 4 to the end
nums.pop(); //This removes from the end

nums.unshift("Messi"); //Adds Messi to the front
nums.shift(); //This removes from the front.

console.log(nums);

const number = [1, 2, 3, 4];

number.includes(3); //This checks if 3 is in the array number
console.log(number.includes(3));

console.log(number.indexOf(3)); //This shows the index of 3 in the array.

console.log(number.find((n) => n > 2));

console.log(number.findIndex((n) => n > 2));

// NOTE => IS NOT GREATER OR EQUALS TOO. IT IS THE WAY TO MAP IN JAVASCRIPT
// map method
const age = [12, 8, 23];
const result = age.map((n) => n * 2);

console.log(result);

const num = [1, 2, 3, 4];
const res = num.filter((n) => n > 2); //this shows the values that are greater than 2
console.log(res);

// acc = accumulator
// curr - current value
const score = [1, 2, 3];
const sum = score.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// CONCATINATION
const con = [1, 2];
console.log(con.concat(3, 4)); // This adds to con

//SLICE
const slyce = [1, 2, 3, 4];
console.log("slice", slyce.slice(1, 3)); //This says start at the first index and end before the third index.

//SPLICE
const splyce = [1, 2, 3, 4];
const thesplice = splyce.splice(1, 2); //Take away starting from the first index and continue till there are 2 values in the array.

console.log("First Splice", thesplice); //Splice takes away.

console.log("New original array after splice", splyce);

const practice = [5, 6, 7, 8, 9, 10];
console.log("slice", practice.slice(2, 5)); //This says start at the second index and end before the fifth index.
console.log("Splice", practice.splice(3, 3)); // Splice 3,3 means start from the 3rd index and the array should only have 3 values. so it will continue counting from the third index.-

//REVERSE
const rev = [1, 2, 3];
console.log(rev.reverse());

//  OBJECTS. OBJECTS HAVE KEY-VALUE PAIRS.
const user = {
  name: "Messi",
  age: 35,
};

console.log(user.name);
console.log(user["name"]);

user.city = "Lagos"; //This adds city:lagos to user
console.log(user.city);

const person = {
  name: "David",
  greet() {
    console.log(`Hello my name is ${this.name}`); //this now refers to object person.
    // console.log("Hello my name is " + this.name)
  },
};

person.greet();

const something = {
  name: "Favour",
  age: 300,
};

console.log(Object.keys(something)); //This shows the keys inside object something.

// NOTE ARRAYS ARE OBJECTS
const arr = [1, 2, 3];
console.log(typeof arr); //This shows that an array is an object.
// This is bcus they store values as key-value pairs. in an array, the key is the index and the value is the value. e.g in [1,2,3] the key-value pair is 0:1

console.log("Another Slice Example");
//Another slice example
const fist = [1, 2, 3, 4, 5];
const r = fist.slice(1, 4); // This means start at index 1 and end before index 4.
console.log(r);

console.log("Another SPLICE Example");
//Another splice example
const goat = [1, 2, 3, 4, 5];
const remove = goat.splice(1, 2);
console.log(remove);
console.log(goat); //After splice, the original changes.

// SPREAD OPERATOR
const ar1 = [1, 2, 3];
const ar2 = [...ar1]; // this makes a shallow copy of everything in ar1 into ar2
console.log(ar2);

const ar = [2, 3];
const shallow = [1, ...ar, "spread operator"];
console.log(shallow);

// another map example
const scores = [20, 34, 45];
const double = [scores.map((n) => n * 2)]; //The map method will go through each value in this array
console.log(double);
