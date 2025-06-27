function generatePoem(event) {
    event.preventDefault();

new Typewriter("#poem", {
  strings: "Shall i compare thee to a summers day",
  autoStart: true,
  cursor: " ",
  delay: 10,
});

}

let poemGeneratorForm = document.querySelector("#poem-enquiry-form");
poemGeneratorForm.addEventListener("submit", generatePoem);