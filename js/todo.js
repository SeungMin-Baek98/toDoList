const toDoForm = document.querySelector("#todo-form");
const inputValue = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

//localstorage에  toDos를 저장하는 함수

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//UI에 표시된 toDo 리스트들을 삭제하는 함수
function deleteLists(event) {
  const deleteLists = event.target.parentElement;
  deleteLists.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteLists.id));
  saveToDos();
}

//입력폼을 담당하는 함수
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = inputValue.value;
  inputValue.value = "";

  //배열에 포함된 요소한테 각각의 고유번호를 주입하기 위하여 객체로 다시만듬
  //왜 고유번호를 만드냐 -> 그걸로 삭제를 하게끔 유도.
  const newTodoObject = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObject);
  addTodo(newTodoObject);
  saveToDos();
}

//입력폼에 todo를 UI로 보여주는 함수
function addTodo(newTodo) {
  const lists = document.createElement("li");
  lists.id = newTodo.id;
  const spanLists = document.createElement("span");
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", deleteLists);
  spanLists.innerText = newTodo.text;
  deleteButton.innerText = "❌";
  lists.appendChild(spanLists);
  lists.appendChild(deleteButton);
  toDoList.appendChild(lists);
}

//폼 제출 이벤트 리스너 함수 추가.
toDoForm.addEventListener("submit", handleToDoSubmit);

//저장된 toDo 로드
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(addTodo);
}
