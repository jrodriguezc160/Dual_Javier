const d = document;

export default function countdown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countdownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
      minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

    $countdown.innerHTML = `${days} DIAS, ${hours} HORAS, ${minutes} MINUTOS y ${seconds} SEGUNDOS.`;

    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = "FELIZ CUMPLEANOS FERXXO, TE PIRATEAMOS EL ALBUM";
    }
  }, 1000);
}
