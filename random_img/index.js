const img_arr = ["rain_1", "rain_2", "rain_3", "rain_4"];

let img = document.getElementById("img_main");
let imgPath = "img/";
let imgExtension = ".jpg";
let randomIndex = Math.floor(Math.random() * img_arr.length);

// 화면을 불러올때 이미지 변환
window.onload = randomImg;

// 2초마다 랜덤으로 이미지 변환
setInterval(randomImg, 2000);

// 함수선언식으로 호이스팅
function randomImg() {
  randomIndex = Math.floor(Math.random() * img_arr.length);
  img.src = imgPath + img_arr[randomIndex] + imgExtension;
}
