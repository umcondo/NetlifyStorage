let mainText = document.querySelector("div.picText");
let mainText2 = document.querySelector("div.picText2");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  if (value > window.innerHeight * 0.5) {
    mainText.style.transform = `translateX(510px)`;
    mainText.style.opacity = 1;
    mainText.style.transition = `2s ease-in-out`;
    mainText2.style.transform = `translateX(500px)`;
    mainText2.style.opacity = 1;
    mainText2.style.transition = `2s ease-in-out`;
  } else {
    mainText.style.transform = `translateX(-100%)`;
    mainText.style.opacity = 0;
    mainText.style.transition = `2s ease-in-out`;
    mainText2.style.transform = `translateX(100px)`;
    mainText2.style.opacity = 0;
    mainText2.style.transition = `2s ease-in-out`;
  }

  //     mainText.style.animation = "slide 2s ease-out forwards";
  //   } else {
  //     mainText.style.animation = "disappear 2s ease-out forwards";
  //   }
});
