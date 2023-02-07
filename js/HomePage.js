const homeNavbar = document.querySelector("#navbar");
let lastPos = 0;

document.addEventListener("scroll", function () {
  let currentPos = window.scrollY;
  // 手下滑
  if (currentPos > lastPos) {
    homeNavbar.classList.add("hide");
  } else {
    // 手上滑
    homeNavbar.classList.remove("hide");
  }
  // 根據未來位置做比較
  lastPos = currentPos;
});

window.addEventListener("scroll", function () {
  let target = document.querySelector(".slide_item");
  let targetPos = target.getBoundingClientRect().top;
  let windowHeight = window.innerHeight;

  if (targetPos < windowHeight) {
    target.classList.add("slide_in");
  }
});
