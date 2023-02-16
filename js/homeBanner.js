function createCarousel() {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.querySelector("#banner_cover img");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      // 主圖透明
      mainImage.style.opacity = 0.5;
      // 移除其它縮圖上的 active class
      thumbnails.forEach((t) => {
        t.classList.remove("active");
      });
      const img = thumbnail.querySelector("img");
      // 為當前縮圖添加 active class
      thumbnail.classList.add("active");
      const imgSrc = img.getAttribute("src");
      setTimeout(() => {
        mainImage.setAttribute("src", imgSrc);
        mainImage.style.opacity = 1;
      }, 200);
    });
  });
}

export default createCarousel;
