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
