// FUNCTIONS

function makeTea() {
  console.log("Boil Water");
  console.log("Add Milo and Milk");
}

makeTea();
makeTea();

function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("favour");

function baktikgreet(names) {
  console.log(`Hello ${names}`);
}
baktikgreet("Michael");

function add(a,b){
    console.log(a + b);
}

add(3,5);
add(10,4);

// Setting default values for parameters
function welcome(name = "Guest"){
    console.log(`Hello ${name}`)
}

welcome();
welcome("David");

function multi(a,b){
    return a*b;
}

const result = multi(7,4);
console.log(result);

//Function Declaration
//Hoisted - You can call the function beforeee declaring it. 
sayHi(); 
function sayHi(){
    console.log("Hiiii");
}

// not Hoisted
// sayHello();
const sayHello = function(){
    console.log("Heloooo");
};

sayHello()

// Arrow functions
const addition = (a,b) => {
    return a + b
}
console.log(addition(3,5))

const additions = (a, b) => a + b;
console.log(additions(4,9));

function test(){
    const x = 32;
    console.log(x);
}
test(); 
// You can only call a variable made in a function within that function..
//console.log(x); // this will not work.

// variables created within a function cannot be used outside that function... view below.
const y = 3;

function testing(){
    const y = 56;
    console.log(y);
}

testing();
console.log(y)

function outerFunction(){
    console.log("Outerfunction")
    function innerFunction (){
        console.log("Inner Function")
    }

    innerFunction()
}

outerFunction()
// innerFunction() This won't work outside the funciton