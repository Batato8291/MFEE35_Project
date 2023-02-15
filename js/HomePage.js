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
const bannerSwiper = document.getElementById("banner_swiper");
const params = {
  pagination: {
    clickable: true,
  },
};

Object.assign(bannerSwiper, params);

bannerSwiper.initialize();
function changeBannerImg() {
  console.dir(bannerSwiper);
  // bannerSwiper.on("slideChange", function () {
  //   console.log("slide changed");
  // });
}
