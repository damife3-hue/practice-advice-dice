const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  text.textContent = "Button was clicked";
});

const style = document.getElementById("style");

style.addEventListener("mouseover", () => {
  style.style.backgroundColor = "blue";
  style.style.color = "white";
});

style.addEventListener("mouseleave", () => {
  style.style.backgroundColor = "transparent";
  style.style.color = "black";
});

const area = document.getElementById("area");
const coord = document.getElementById("coord");

area.addEventListener("mousemove", (e) => {
  coord.textContent = `X: ${e.clientX}, Y:${e.clientY}`;
});

const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("keydown", (e) => {
  output.textContent = `Key down: ${e.key}`;
});

input.addEventListener("keyup", (e) => {
  output.textContent = `Key up: ${e.key}`;
});

input.addEventListener("input", () => {
  console.log(input.value);
});

input.addEventListener("focus", (e) => {
  input.style.border = "2px solid blue";
});

//Window events
window.addEventListener("resize", () => {
  console.log("Width: ", window.innerWidth); //This will just show us the width of the window.
});

const form = document.getElementById("form");
const nameOutput = document.getElementById("name");
const emailOutput = document.getElementById("email");

form.addEventListener("input", (e) =>{
    const fieldName = e.target.name; //this assigns the name attribute in the input tag to fieldname
    const value = e.target.value;//this assigns the value of the input tag to the const value
    if (fieldName === "username"){
        nameOutput.textContent = `Your name is: ${value}`;
    }
    if (fieldName === "email"){
        emailOutput.textContent = `Your name is: ${value}`;
    }
})
