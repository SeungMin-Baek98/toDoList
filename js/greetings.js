const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const toDosForm = document.querySelector("#todo-form");
const welcomeText = document.querySelector("#welcome");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greetings(username);
}

function greetings(username) {
  welcomeText.innerText = `Welcome ${username}`;
  welcomeText.classList.remove(HIDDEN_CLASSNAME);
  toDosForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  toDosForm.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmit);
} else {
  greetings(savedUsername);
}
