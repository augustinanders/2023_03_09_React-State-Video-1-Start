console.clear();
const button = document.querySelector('[data-js="button"]');

let loggedIn = false;

function setLoggedIn(newValue) {
  loggedIn = newValue;
  console.log(newValue);
}

button.addEventListener("click", () => {
  setLoggedIn(!loggedIn);
  button.textContent = loggedIn ? "logout" : "login";
});
