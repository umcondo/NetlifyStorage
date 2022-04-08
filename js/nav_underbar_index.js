//변수 생성
const Target = document.querySelectorAll("nav > .item");
const Target2 = document.querySelectorAll("main > .item");

let redTarget, blueTarget;

//막대기 생성
makeDiv("colorBase");
makeDiv("colorBase2");

//클릭 시 moveBase함수 호출
Target.forEach((elm) =>
  elm.addEventListener("click", (event) => moveBase(event))
);
Target2.forEach((elm) =>
  elm.addEventListener("click", (event) => moveBase2(event))
);

// 막대기 위치의 초기값 설정
Target[0].click();
Target2[0].click();

//윈도우 창이 변화되면 현재 타겟을 다시 클릭하는 이벤트를 발생시키는 함수
window.onresize = () => {
  // console.log(redTarget, blueTarget);
  redTarget.click();
  blueTarget.click();
};

// id를 받아 body에 새로운 div생성하는 함수
function makeDiv(id) {
  let createDiv = document.createElement("div");
  createDiv.id = id;
  document.body.appendChild(createDiv);
}

// 가로 줄 막대기 이동함수
function moveBase(e) {
  redTarget = e.currentTarget;

  document.getElementById("colorBase").style.top =
    redTarget.offsetTop + redTarget.offsetHeight + "px";
  document.getElementById("colorBase").style.left = redTarget.offsetLeft + "px";
  document.getElementById("colorBase").style.width =
    redTarget.offsetWidth + "px";
}

// 세로 줄 막대기 이동함수
function moveBase2(e) {
  blueTarget = e.currentTarget;

  document.getElementById("colorBase2").style.top =
    blueTarget.offsetTop + blueTarget.offsetHeight + "px";
  document.getElementById("colorBase2").style.left =
    blueTarget.offsetLeft + "px";
  document.getElementById("colorBase2").style.width =
    blueTarget.offsetWidth + "px";
}

/* 
1. 새로운 id의 div를 만들어서 css적용 - 막대기 생성
2. 클릭하거나 화면을 움직일때 마다 이벤트함수 호출
3. currentTarget을 이용해 현재타겟의 x,y좌표를 알아내어 막대기의 좌표 설정
4. 이때 화면을 움직여도 막대기가 따라오게 하기위해 현재위치를 viewport를 기준으로 설정

*/
// //클릭 시 moveBase함수 호출
// for (let i = 0; i < Target.length; i++) {
//   Target[i].addEventListener("click", () => {
//     moveBase(event);
//   });
//   Target2[i].addEventListener("click", () => {
//     moveBase2(event);
//   });
// }

// //윈도우 화면 바뀔때 moveWindow함수 호출
// window.addEventListener("resize", moveWindow);
// window.addEventListener("resize", moveWindow2);

// // 현재 좌표를 vh,vw로 얻어내어 막대기의 좌표를 vh,vw로 입력하는 함수
// function findViewPosition(좌표, divId) {
//   let 높이 = window.innerHeight;
//   let 너비 = window.innerWidth;
//   let myVw, myVh;
//   myVw = (좌표.x / 너비) * 100; // vw로 계산한 현재위치
//   myVh = ((좌표.y + 좌표.height) / 높이) * 100; //vh로 계산한 현재위치

//   // 막대기의 좌표 설정
//   document.getElementById(divId).style.left = `${myVw}vw`;
//   document.getElementById(divId).style.top = `${myVh}vh`;
//   document.getElementById(divId).style.width = `${좌표.width}px`;
// }

// // 가로줄 막대기 이동
// function moveBase(e) {
//   redTarget = e.currentTarget;
//   let 좌표 = redTarget.getBoundingClientRect();

//   findViewPosition(좌표, "colorBase");

//   // 현재타겟의 위치를 갱신하기 위해 변수저장을 위한 리턴
//   return redTarget;
// }

// // 세로 줄 막대기 이동함수
// function moveBase2(e) {
//   blueTarget = e.currentTarget;
//   let 좌표 = blueTarget.getBoundingClientRect();

//   findViewPosition(좌표, "colorBase2");

//   return blueTarget;
// }

// // 가로 줄 막대기 이동함수
// // 윈도우가 바뀔때 막대기의 위치를 갱신시켜주기 위한 함수
// function moveWindow() {
//   let 좌표 = redTarget.getBoundingClientRect();
//   findViewPosition(좌표, "colorBase");
// }

// // 세로 줄 막대기 이동함수
// function moveWindow2() {
//   let 좌표 = blueTarget.getBoundingClientRect();
//   findViewPosition(좌표, "colorBase2");
// }
