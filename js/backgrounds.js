const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${randomImage}')`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
