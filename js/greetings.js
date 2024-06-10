const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginBtnSubmit(event) {
  event.preventDefault(); //event 가 원래 하던 행동을 멈춘다. (submit이겠지?)
  loginForm.classList.add(HIDDEN_CLASSNAME); // hidden class를 추가한다 -> 로그인폼이 안보이게된다.
  const username = loginInput.value; // logininput에 username value를 저장한다.
  localStorage.setItem(USERNAME_KEY, username); //localstrage에 key값에는 "username"이 value값에는 logininput.value값이 저장된다.
  paintGreetings(username); // paintGreetings 함수를 호출한다. form 안에 있는 input값을 인자로 받는다.
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; // <h1>태그안에 백틱문을 실행한다. username을 인자로 받아서.
  greeting.classList.remove(HIDDEN_CLASSNAME); // 로그인이 되는순간 hidden클래스를 제거한다. ->  `Hello ${username}`이게 보이게 된다.
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginBtnSubmit);
} else {
  paintGreetings(savedUsername);
}
