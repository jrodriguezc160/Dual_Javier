const d = document,
  w = window;

export default function scrollTopButton(btn) {
  const $scrollTopBtn = d.querySelector(btn);

  addEventListener("scroll", (e) => {
    let scrollTop = w.scrollY || d.documentElement.scrollTop;

    if (scrollTop > 600) {
      $scrollTopBtn.classList.remove("hidden");
    } else {
      $scrollTopBtn.classList.add("hidden");
    }
  });

  addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
