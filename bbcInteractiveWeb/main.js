(() => {
  const actions = {
    birdFlies(key) {
      //   document.querySelector('[data-index="2"].bird').style.transform = `translateX(${window.innerWidth}px)`;
      if (key) {
        document.querySelector(
          '[data-index="2"] .bird'
        ).style.transition = `1.5s 0.5s linear`;
        document.querySelector(
          '[data-index="2"] .bird'
        ).style.transform = `translateX(${window.innerWidth}px)`;
      } else {
        document.querySelector(
          '[data-index="2"] .bird'
        ).style.transform = `translateX(-100%)`;
        document.querySelector(
          '[data-index="2"] .bird'
        ).style.transition = `0s`;
      }
    },
    birdFlies2(key) {
      //   document.querySelector('[data-index="2"].bird').style.transform = `translateX(${window.innerWidth}px)`;
      if (key) {
        document.querySelector(
          '[data-index="5"] .bird'
        ).style.transition = `1.5s 0.5s linear`;
        document.querySelector(
          '[data-index="5"] .bird'
        ).style.transform = `translate(${window.innerWidth}px, ${
          -window.innerHeight * 0.7
        }px)`;
      } else {
        document.querySelector(
          '[data-index="5"] .bird'
        ).style.transform = `translateX(-100%)`;
        document.querySelector(
          '[data-index="5"] .bird'
        ).style.transition = `0s 1s`;
      }
    },
  };
  // 특정값을 가지는 html객체를 변수로 저장
  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");
  let currentItem = graphicElems[0]; // 현재 활성화된 (visible 클래스가 붙은) .graphic-item을 지정
  let ioIndex;

  // IntersectionObserver로 관찰한 객체가 사라지거나 없어질때마다 콜백함수가 실행됨
  const io = new IntersectionObserver((entries, observer) => {
    ioIndex = entries[0].target.dataset.index * 1; // 반환되는 인덱스가 문자열. 자바스크립트가 동적타입 변수임을 이용해 인덱스를 숫자로 변환
  });

  //   step과 graphic에 인덱스를 포함한 class추가 - 객체 프로퍼티에 새로운 키값을 넣으면 추가된다.
  for (let i = 0; i < stepElems.length; i++) {
    io.observe(stepElems[i]);
    // stepElems[i].setAttribute("data-index", 1);
    stepElems[i].dataset.index = i;
    graphicElems[i].dataset.index = i;
  }
  // graphic에 visible클래스 추가 함수
  function activate(action) {
    currentItem.classList.add("visible");
    if (action) {
      //함수호출할때 data-action이 있으면 새를 날아가게하는 함수를 호출
      actions[action](true); //birdFlies가 들어오면 birdFlies메소드를 호출
    }
  }
  // graphic에 visible클래스 삭제 함수
  function inactivate(action) {
    currentItem.classList.remove("visible");
    if (action) {
      //함수호출할때 data-action이 있으면 새를 날아가게하는 함수를 호출
      actions[action](false); //birdFlies가 들어오면 birdFlies메소드를 호출
    }
  }

  //   스크롤에 반응하는 이벤트 객체 - 스크롤이 ~때 마다 반응하겠다. ~때를 콜백함수가 설명
  window.addEventListener("scroll", () => {
    let step;
    let boundingRect;
    let temp = 0;

    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      // 옵저버로 얻은 인덱스 +1,-1 구간 탐색
      step = stepElems[i];
      if (!step) continue; // 현재 인덱스가 0이면 -1부터 탐색하게 되는데 배열엔 인덱스가 0부터 시작해서 오류뜬다. 그래서 step값이 undefined로 나와 에러뜨는 상황 처리
      boundingRect = step.getBoundingClientRect(); // 현재 높이 확인하기 위한 객체 생성

      if (
        boundingRect.top > window.innerHeight * 0.1 && // 높이가 아래 10%부터 위 80%까지 해당할때 visible클래스 추가
        boundingRect.top < window.innerHeight * 0.8
      ) {
        inactivate(currentItem.dataset.action); // 들어있던 값 삭제.
        currentItem = graphicElems[step.dataset.index];
        activate(currentItem.dataset.action); // data-action(즉 날아다니는 새)클래스를 매개변수로 받음 , 함수호출할때 data-action이 있으면 새를 날아가게하는 함수를 호출시키기 위함
      }
    }
  });

  window.addEventListener("load", () => {
    setTimeout(() => scrollTo(0, 0), 100);
  });
  activate(); // 첫화면은 기본적으로 보여야하므로 visible추가 함수 호출
})();
