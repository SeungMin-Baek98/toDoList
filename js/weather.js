const API_KEY = "377a6baf5db97ef62b4b455710879659";

//입력인자로 자바스크립트가 현재 나의 위치와 관련된 geolocationPosition object를 전닳해 준다.
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  const cityName = document.querySelector("#weather span:first-child");
  const weatherStatus = document.querySelector("#weather span:last-child");
  //url로 부터 정보를 가져오는 로직
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      const humdi = data.main.humidity;
      cityName.innerText = name;
      weatherStatus.innerText = `${weather} / ${temp}도 / 습도 : ${humdi}`;
    });
}

function onGeoErr() {
  alert("I can't find you~~ ");
}

//아래 작성한 함수는 인자를 2개 받는다 , 1개는 실행이 됐을떄의 경우 나머지 1개는 에러가 발생했을떄의 경우이다.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
