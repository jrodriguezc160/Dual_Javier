const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    // console.log("entries", entries);

    entries.forEach((entry) => {
      // console.log(entry)
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`);
      } else {
      }
    });
  };

  const observer = new IntersectionObserver(cb, {});

  $sections.forEach((el) => observer.observe(el));
}
