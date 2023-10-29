const d = document;

export default function slider() {
  const $nextBtn = d.querySelector(".slider-btns .next"),
  $nextBtnSVG = d.querySelector(".slider-btns .next svg"),
    $prevBtn = d.querySelector(".slider-btns .prev"),
    $prevBtnSVG = d.querySelector(".slider-btns .prev svg"),
    $slides = d.querySelectorAll(".slider-slide");

  let i = 0;

  // Prev
  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn || e.target === $prevBtnSVG) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i--;

      if (i < 0) {
        i = $slides.length - 1;
      }

      $slides[i].classList.add("active");
    }
  });

  // Next
  d.addEventListener("click", (e) => {
    if (e.target === $nextBtn || e.target === $nextBtnSVG) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;

      if (i >= $slides.length) {
        i = 0;
      }

      $slides[i].classList.add("active");
    }
  });
}