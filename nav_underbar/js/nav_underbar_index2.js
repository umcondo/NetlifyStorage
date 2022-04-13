// id를 입력받아 div생성
function makeDiv(idName) {
  let makediv = document.createElement("div");
  makediv.setAttribute("id", idName);
  document.body.appendChild(makediv);
}

makeDiv("colorBase");
makeDiv("colorBase2");

let wNav = document.querySelectorAll("nav > .item");
wNav.forEach((elm) => {
  elm.addEventListener("click", (e) => {
    changeBar(e.currentTarget);
  });
});

function moveBase(e, divId) {
  redTarget = e.currentTarget;

  document.getElementById(divId).style.top =
    redTarget.offsetTop + redTarget.offsetHeight + "px";
  document.getElementById(divId).style.left = redTarget.offsetLeft + "px";
  document.getElementById(divId).style.width = redTarget.offsetWidth + "px";
}

function moveBase2(e, divId) {
  blueTarget = e.currentTarget;

  document.getElementById(divId).style.top =
    redTarget.offsetTop + redTarget.offsetHeight + "px";
  document.getElementById(divId).style.left = redTarget.offsetLeft + "px";
  document.getElementById(divId).style.width = redTarget.offsetWidth + "px";
}

Target.forEach( (elm) => {elm.addEventListener("click", () => {moveBase(event,'colorBase3')})})
Target2.forEach( (elm) => {elm.addEventListener("click", () => {moveBase(event,'colorBase4')})})


//윈도우 창이 변화되면 현재 타겟을 다시 클릭하는 이벤트를 발생시키는 함수
window.onresize = () => {
  redTarget.click();
  blueTarget.click();
};
