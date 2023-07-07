// sellect html elements
const form = document.querySelector(".form-group");
const mailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
const input = document.getElementById("email");
const userInput = document.querySelector(".input-email");
const errorMsg = document.querySelector(".email small");
const main = document.querySelector(".main");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!input.value.match(mailRegex)) {
    input.classList.add("error");
    errorMsg.textContent = "Valid email required";
  } else {
    main.classList.add("hide");
    userInput.textContent = input.value;
  }

  // listen to input
  input.addEventListener("input", () => {
    if (input.value.match(mailRegex)) {
      errorMsg.textContent = "";
      input.classList.remove("error");
    }
  });
});
