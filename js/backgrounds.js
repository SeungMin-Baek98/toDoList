const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const randomImages = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${randomImages}')`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.objectFit = "cover";
