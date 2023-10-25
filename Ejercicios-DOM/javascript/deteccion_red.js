const d = document,
  w = window,
  n = navigator;

export default function networkStatus() {
  const $divContenedor = d.createElement("div");
  const $div = d.createElement("div");

  $divContenedor.classList.add("panel-aviso-red");

  const isOnLine = () => {
    if (n.onLine) {
      $div.textContent = "Conexión restablecida";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.textContent = "Conexión perdida";
      $div.classList.remove("online");
      $div.classList.add("offline");
    }

    $divContenedor.appendChild($div);
    d.body.insertAdjacentElement("afterbegin", $divContenedor);

    setTimeout(() => {
      d.body.removeChild($divContenedor);
    }, 2000);
  };

  w.addEventListener("online", (e) => {
    isOnLine();
  });
  w.addEventListener("offline", (e) => {
    isOnLine();
  });
}
