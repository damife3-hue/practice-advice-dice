console.log(document);
console.log(document.title);
console.log(document.URL);

const heading = document.getElementById("main");
console.log(heading);

const firstItem = document.querySelector(".item"); // THis selects the first thing the class is attached to only
console.log(firstItem); 

const allTexts = document.querySelectorAll(".texts"); // This selects everything that has the class texts.
console.log(allTexts);

allTexts.forEach((Elements) => {
  console.log(Element);
});

const items = document.getElementsByClassName("items");
console.log(items);

const header2 = document.getElementsByTagName("h2");
console.log(header2);

const example = document.getElementById("example");
console.log(example.textContent);
console.log(example.innerHTML);

example.textContent = "Messi is the goat";
example.innerHTML = "Messi is the <b>Goat<b>";
console.log(example.innerHTML);

// const image = document.getElementById("image");
// image.src =
//   "https://res.cloudinary.com/dl1ynr1x5/image/upload/q_auto/f_auto/v1775911482/bg-pattern-quotation_ku0cx4.svg";

const box = document.getElementById("box");
box.style.background = "blue";
box.style.color = "white";

Object.assign(box.style, {
  padding: "30px",
  fontSize: "18px",
});

const testing = document.getElementById("test");

if (4 > 3) {
    testing.classList.add("active"); //active is a class style we created in the css
} else {
    testing.classList.remove("active")
}



