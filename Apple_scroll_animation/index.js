const canvas = document.getElementById("head-bob-turn");
const context = canvas.getContext("2d");
const html = document.querySelector("html");
// console.log(context);

const frameCount = 132;

const currentFrame = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/02-head-bob-turn/${index
    .toString()
    .padStart(4, "0")}.jpg`;

const frameCount2 = 88;

const currentFrame2 = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/03-flip-for-guts/${index
    .toString()
    .padStart(4, "0")}.jpg`;

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const preloadImages2 = () => {
  for (let i = 1; i < frameCount2; i++) {
    const img = new Image();
    img.src = currentFrame2(i);
  }
};
// 35번부터는 크기가 줄어듦

const img = new Image();
img.src = currentFrame(0);
canvas.width = 1458;
canvas.height = 820;

img.onload = function () {
  context.drawImage(
    img,
    canvas.width / 2 - img.width / 2,
    canvas.height / 2 - img.height / 2
  );
};

const updateImage = (index) => {
  img.src = currentFrame(index);
  context.drawImage(
    img,
    canvas.width / 2 - img.width / 2,
    canvas.height / 2 - img.height / 2
  );
};

const updateImage2 = (index) => {
  img.src = currentFrame2(index);
  context.drawImage(
    img,
    canvas.width / 2 - img.width / 2,
    canvas.height / 2 - img.height / 2
  );
};

window.addEventListener("scroll", () => {
  if (html.scrollTop <= (html.scrollHeight - window.innerHeight) / 2) {
    const scrollTop = html.scrollTop;
    // console.log(scrollTop);
    //   console.log(html.scrollHeight);
    //   console.log(window.innerHeight);
    const maxScrollTop = (html.scrollHeight - window.innerHeight) / 2;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(scrollFraction * frameCount)
    );
    // console.log(frameIndex);

    requestAnimationFrame(() => updateImage(frameIndex + 1));
  } else {
    const scrollTop =
      html.scrollTop - (html.scrollHeight - window.innerHeight) / 2;
    // console.log(scrollTop);
    const maxScrollTop = (html.scrollHeight - window.innerHeight) / 2;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      frameCount2 - 1,
      Math.floor(scrollFraction * frameCount2)
    );
    // console.log(frameIndex);

    requestAnimationFrame(() => updateImage2(frameIndex + 1));
  }
});

preloadImages();
preloadImages2();
