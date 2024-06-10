const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours} 시 ${minutes} 분 ${seconds}`;
}

//이 function이 없으면 사이트를 새로고침 하면 시분초가 0으로 초기화 된 후 함수를 실행하지만
//function생성후 다시 새로고침해보면 초기화가 되지않고 바로 함수가 적용된다.
getClock();
//1초마다 getClock 함수를 실행하기때문에 실시간으로 변경되는걸 보여준다.
setInterval(getClock, 1000);
