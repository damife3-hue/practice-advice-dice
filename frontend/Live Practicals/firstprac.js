//https://api.adviceslip.com/advice

const id = document.getElementById("id");
const advice = document.getElementById("advice");
const btn = document.getElementById("btn");

//to fetch from an api we need a function to fetch the data from the api

//javascript normally doesn't wait for api to load. if there's network issues, javascript can skip ahead to what is working

//async tells javascript to wait for the function to load before continuing with the rest of the code.
async function getAdvice() {
  // try catch block. try catch block tells javascript to catch data and let us know what fails
  try {
    const response = await fetch("https://api.adviceslip.com/advice"); //await tells js that this is what i want you to wait for before skipping my code.
    // console.log(response);
    const data = await response.json(); //this is the format we want to see. JSON is for readable javascript
    console.log(data);
    id.textContent = `advice # ${data.slip.id}`;
    advice.textContent = `${data.slip.advice}`;
  } catch (error) {
    advice.textContent = "Something is wrong somewhere!";
  }
}

getAdvice();

btn.addEventListener("click", getAdvice);
