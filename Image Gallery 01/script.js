initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");

  const slideButton = document.querySelectorAll(".slider-wrapper .slide-button");

  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");

  const scrollbarThumb = document.querySelector(".slider-scrollbar .scrollbar-thumb");

  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  // slide image according to the slide button clicks
  slideButton.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideButton = () => {
    slideButton[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
    slideButton[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  }

  const updateSlideThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left= `${thumbPosition}px`
  }

  imageList.addEventListener("scroll", () => {
    handleSlideButton();
    updateSlideThumbPosition();
  });
};
window.addEventListener("load", initSlider);
