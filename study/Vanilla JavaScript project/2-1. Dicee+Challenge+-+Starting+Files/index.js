// 랜덤으로 1- 6사이의 정수 
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomImgSrc = "images/dice" + randomNumber1 + ".png";
let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgSrc);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let randomImgSrc2 = "images/dice" + randomNumber2 + ".png";
let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImgSrc2);

// 주사위 경우에 따라 텍스트 변경
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins~";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins~";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}

