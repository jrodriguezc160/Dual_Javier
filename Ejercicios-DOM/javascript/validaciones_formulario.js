const d = document;

export default function contactFormValidations() {
  const $form = d.querySelectorAll(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

  //   console.log($inputs);

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keydown", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

      //   console.log($input, pattern);

      if (pattern && $input.value !== "") {
        // console.log("El input tiene patrón");

        let regex = new RegExp(pattern);

        return !regex.exec($input.value) // Si no coincide con el patrón se activa la clase que señala el error
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
        }
        
        if (!pattern) {
            // console.log("El input no tiene patrón");
            
            return $input.value === ""
              ? d.getElementById($input.name).classList.add("is-active")
              : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });
}
