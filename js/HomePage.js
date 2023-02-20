// navbar effect
const homeNavbar = document.querySelector("#header");
let lastPos = 0;

document.addEventListener("scroll", function() {
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

// intro effect
function addAnimate(targetEl, bottomDistance, className) {
  window.addEventListener("scroll", function() {
    const viewHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const taEl = document.querySelector(targetEl);
    const taElPos = taEl.offsetTop;
    if (scrollPosition + viewHeight >= taElPos + viewHeight * bottomDistance) {
      taEl.classList.add("animate__animated", className);
    } else {
      taEl.classList.remove("animate__animated", className);
    }
  });
}
addAnimate("#intro1", 0.05, "animate__fadeInUp");
addAnimate("#intro2", 0.05, "animate__fadeInLeft");
addAnimate("#intro3", 0.05, "animate__fadeInRight");

//live effect
function liveVideoEffect() {
  const viewHeight = window.innerHeight;
  const videoBoxs = document.querySelectorAll(".videobox");
  const scrollPosition = window.scrollY;
  videoBoxs.forEach(box => {
    const vbPositon = box.offsetTop;
    if (scrollPosition + viewHeight >= vbPositon + viewHeight * 0.1) {
      box.classList.add("video_effect");
    } else {
      box.classList.remove("video_effect");
    }
  });
}
window.addEventListener("scroll", liveVideoEffect);

//moving Bocchi
let isScrolling = false;
let lastScrollPos = 0;
//        Bocchi DOM
const movingItem = document.querySelector(".moving_item");

window.addEventListener("scroll", function() {
  isScrolling = true;
});
setInterval(() => {
  if (isScrolling) {
    const currentScrollPos = window.pageYOffset;
    // console.log("win", window.pageYOffset, "last", lastScrollPos);
    if (lastScrollPos > currentScrollPos) {
      movingItem.classList.add("up");
    } else {
      movingItem.classList.remove("up");
    }
    movingItem.classList.add("moving");
    lastScrollPos = currentScrollPos;
    isScrolling = false;
  } else {
    movingItem.classList.remove("moving");
  }
}, 100);

function hello(name) {
  console.log("play video~a", name);
}

// moveing item reaction

function movingItemPath(targetEl, referenceEl, option) {
  window.addEventListener("scroll", function() {
    let scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    const viewHeight = window.innerHeight;
    // offsetTop的值是固定的
    const taEl = document.querySelector(targetEl);
    const taElPos = taEl.getBoundingClientRect();
    const refElPos = document.querySelector(referenceEl).offsetTop;
    console.log(taElPos);
    if (option === "start") {
      // console.log("ta", scrollPosition + taElPos.top, "ref", refElPos + 100);
      if (scrollPosition + taElPos.top <= refElPos + 100) {
        taEl.classList.add("hide");
      } else {
        taEl.classList.remove("hide");
      }
    } else if (option === "turnLeft") {
      // console.log("ta", scrollPosition + taElPos.top, "ref", refElPos);
      // console.log(refElPos);
      if (
        scrollPosition + taElPos.top >= refElPos - 150 &&
        scrollPosition + taElPos.top <= refElPos + 50
      ) {
        taEl.classList.add("turn-left");
      } else {
        taEl.classList.remove("turn-left");
      }
    }
  });
}
movingItemPath(".moving_item", "#intro_selection", "start");
// movingItemPath(".moving_box", "#intro_selection .turn_left", "turnLeft");
