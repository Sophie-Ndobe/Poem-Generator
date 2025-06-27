function displayPoem(response) {

 new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  cursor: " ",
  delay: 10,
});
}

function generatePoem(event) {
    event.preventDefault();

    let userInput = document.querySelector("#user-input");

    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let context ="You are a talented romatic poem writer. You only write four line poems. You write every line with a <br /> at the bottom for the next line to continue. Sign the poem at the bottom left with SheCodes AI inside a <stong><strong/>";
    let prompt = `Please write a poem about ${userInput}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem)

   // console.log("Getting poem")

}

let poemGeneratorForm = document.querySelector("#poem-enquiry-form");
poemGeneratorForm.addEventListener("submit", generatePoem);