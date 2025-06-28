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

    let userInput = document.querySelector("#user-input").value;

    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let context ="You are a talented romatic poem writer. You only write four line poems. Do not write general poems, use the given user instruction to write a poem about that thing. You write every line with a <br /> at the bottom for the next line to continue. Sign the poem at the bottom left with SheCodes AI inside a <stong><strong/>";
    let prompt = `User instruction: Generate a poem about ${userInput}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemBoundary = document.querySelector("#poem");
    poemBoundary.classList.remove("hidden");
    poemBoundary.innerHTML = `<div class="generating">⌛⏳Generating a poem about ${userInput}</div>`;

    axios.get(apiUrl).then(displayPoem)

}

let poemGeneratorForm = document.querySelector("#poem-enquiry-form");
poemGeneratorForm.addEventListener("submit", generatePoem);