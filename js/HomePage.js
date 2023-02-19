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
function hello(name) {
  console.log("play video~a", name);
}

//moving Bocchi
let isScrolling = false;
let lastScrollPos = 0;
const movingItem = document.querySelector(".moving_item");
window.addEventListener("scroll", function() {
  isScrolling = true;
});
setInterval(() => {
  if (isScrolling) {
    const currentScrollPos = window.pageYOffset;
    // console.log("win", window.pageYOffset, "last", lastScrollPos);
    if (lastScrollPos > currentScrollPos) {
      movingItem.style.transform = "rotateY(180deg)";
    } else {
      movingItem.style.transform = "";
    }
    movingItem.classList.add("moving");
    lastScrollPos = currentScrollPos;
    isScrolling = false;
  } else {
    movingItem.classList.remove("moving");
  }
}, 100);

// liveVideoEffect();
window.addEventListener("scroll", liveVideoEffect);
