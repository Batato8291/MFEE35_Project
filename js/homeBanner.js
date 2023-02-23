function createCarousel() {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.querySelector("#banner_cover img");
  // const banner = document.querySelector("#banner");
  const bannerBk = document.querySelector(".banner_background");
  console.log(bannerBk);
  // change slide
  let currentThumbnail = 0;
  function changeSlide(n) {
    // 主圖透明
    mainImage.style.opacity = 0.5;
    thumbnails[currentThumbnail].classList.remove("active");
    thumbnails[n].classList.add("active");
    const img = thumbnails[n].querySelector("img");
    const imgSrc = img.getAttribute("src");
    const imgBkUrl = thumbnails[n].dataset.img;

    setTimeout(() => {
      mainImage.setAttribute("src", imgSrc);
      bannerBk.style.backgroundImage = `url(img/${imgBkUrl})`;
      mainImage.style.opacity = 1;
    }, 200);
    currentThumbnail = n;
  }

  // next slide
  function nextThumbnail() {
    let next =
      currentThumbnail + 1 < thumbnails.length ? currentThumbnail + 1 : 0;
    changeSlide(next);
  }

  thumbnails.forEach((thumbnail, thumbnailIndex) => {
    thumbnail.addEventListener("click", function () {
      const index = thumbnailIndex;

      changeSlide(index);
      clearInterval(changeTimer);
      changeTimer = setInterval(nextThumbnail, 5000);
    });
  });
  let changeTimer = setInterval(nextThumbnail, 5000);
}

createCarousel();
