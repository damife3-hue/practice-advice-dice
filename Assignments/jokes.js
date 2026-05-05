//https://api.apiverve.com/v1/randomjoke

const jokeText = document.getElementById("joketext");
const theButton = document.getElementById("btn");

async function getAdvice() {
  jokeText.textContent = "Loading...";
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/jokes", {
      method: "Get",
      headers: {
        "X-Api-Key": "wz7czTZbmhtV262NfDY5Xum00Hn4pspI4ibceNxE",
      },
    });
    // console.log(response);
    const jokes = await response.json();
    console.log(jokes);
    jokeText.textContent = jokes[0].joke;
  } catch (error) {
    jokeText.textContent = "Something is wrong somewhere!";
  }
}

theButton.addEventListener("click", getAdvice);
