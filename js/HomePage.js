import createCarousel from "./homeBanner.js";

const homeNavbar = document.querySelector("#header");
let lastPos = 0;

document.addEventListener("scroll", function () {
  let currentPos = window.scrollY;
  const selectList = document.querySelector("#slide_selects");
  const selectBtn = document.querySelector("#select_btn");
  // 頁面下滑
  if (currentPos > lastPos) {
    selectList.classList.remove("show");
    selectBtn.ariaExpanded = false;
    homeNavbar.classList.add("hide");
  } else {
    // 頁面上滑
    homeNavbar.classList.remove("hide");
  }
  // 根據未來位置做比較
  lastPos = currentPos;
});

// swiper
createCarousel();

//live effect
function liveVideoEffect() {
  const videoBox = document.querySelector(".videobox");
  const scrollPosition = window.scrollY;
  const viewHeight = window.innerHeight;
  const vbPositon = videoBox.offsetTop;
  if (scrollPosition + viewHeight >= vbPositon + viewHeight * 0.2) {
    videoBox.classList.add("video_effect");
  } else {
    videoBox.classList.remove("video_effect");
  }
}
// liveVideoEffect();
window.addEventListener("scroll", liveVideoEffect);
