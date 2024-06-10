const images = ["0.jpeg", "1.png", "2.jpeg", "3.jpeg", "4.jpeg"]; // 이미지 파일 목록

const chosenImage = images[Math.floor(Math.random() * images.length)]; // 랜덤하게 선택된 이미지 파일

document.body.style.backgroundImage = `url('img/${chosenImage}')`; // body 요소의 배경 이미지로 설정
document.body.style.backgroundSize = "cover"; // 배경 이미지 크기를 조정
document.body.style.backgroundPosition = "center"; // 배경 이미지 위치를 중앙으로 설정
document.body.style.backgroundRepeat = "no-repeat"; // 배경 이미지 반복을 중지
