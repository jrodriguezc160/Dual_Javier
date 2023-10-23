export default function clock(iniciarReloj, pararReloj) {
  const d = document;
  const div = d.querySelector(".relojContenedor");
  let stringHora = null;
  let intervalID = null;

  function getHora() {
    let fecha = new Date();

    let horas = fecha.getUTCHours().toString();
    if (horas < 10) horas = `0${horas}`;
    let minutos = fecha.getUTCMinutes().toString();
    if (minutos < 10) minutos = `0${minutos}`;
    let segundos = fecha.getUTCSeconds().toString();
    if (segundos < 10) segundos = `0${segundos}`;

    let timezone = fecha.getTimezoneOffset().toString();
    let difference = timezone / 60;
    horas = horas - difference;

    stringHora = `${horas}:${minutos}:${segundos}`;
    div.textContent = stringHora;
  }

  // Event Listener
  d.addEventListener("click", (e) => {
    if (e.target.matches(iniciarReloj)) {
      if (!intervalID) {
        getHora();
        intervalID = setInterval(getHora, 1000);

        console.log(intervalID);
      }
      e.target.disabled = true;
    } else if (e.target.matches(pararReloj)) {
      if (intervalID) {
        clearInterval(intervalID);
        intervalID = null;
        d.querySelector(iniciarReloj).disabled = false;
      }
    }
  });
}
