const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//const였던 타입을 let으로 바꾸었다. 왜냐 todos를 새로 추가한후 새로고침하면 배열은 항상 null이라서
//그전에 있던 데이터를 저장하지못하고 새로운값들만 저장할 수 있기때문이다.
let toDos = [];

function saveToDos() {
  //json.stringify가 toDos 의 배열요소들을 string으로 변형해준다!! 이거 필히 익히도록!!
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleClickDelete(event) {
  const lists = event.target.parentElement;
  lists.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(lists.id));
  saveToDos();
}
function paintTodo(newTodo) {
  const lists = document.createElement("li");
  lists.id = newTodo.id;
  const spans = document.createElement("span");
  spans.innerText = newTodo.text;
  const button = document.createElement("button");
  button.addEventListener("click", handleClickDelete);
  button.innerText = "❌";
  button.style.background = "none";
  button.style.borderRadius = "5px";
  button.style.marginLeft = "10px";
  lists.appendChild(spans);
  lists.appendChild(button);
  toDoList.appendChild(lists);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObject = {
    text: newTodo,
    // 각 할일에다가 랜덤한 숫자를 부여해서 각각의 할일에 아이디를 부여해준다. <- 삭제되는것이 어떤 아이디인지를 알게 해줄려고!
    id: Date.now(),
  };
  toDos.push(newTodoObject);
  paintTodo(newTodoObject);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
//(item) => console.log("Hello this is", item) <- 화살표 함수
//function sayHello(item){console.log("Hello this is", item)} <- 일반 함수
//둘다 사용해도 무방하나 코드의 간결성을 위하여 화살표 함수를 사용.
