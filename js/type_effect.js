let target = document.querySelector("#dynamic");

function randomString() {
  let stringArr = [
    "Learn to HTML",
    "Learn to CSS",
    "Learn to Javascript",
    "Learn to Python",
    "Learn to Ruby",
  ];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

//타이핑 리셋
function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    // () => {}은 함수호출 자체를 예약하기 위함, 함수호출결과를 예약하는것이 아니라
    setTimeout(() => {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString());
// 커서 깜빡임 효과
function blink() {
  target.classList.toggle("active");
}

setInterval(blink, 500);
