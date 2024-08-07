const calendar = document.querySelector("#calendar");

function getTodayDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const date = String(currentDate.getDate()).padStart(2, "0");
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const daysOfWeek = week[currentDate.getDay()];
  calendar.innerText = `${year}년  ${month}월  ${date}일 (${daysOfWeek})`;
}

getTodayDate();
