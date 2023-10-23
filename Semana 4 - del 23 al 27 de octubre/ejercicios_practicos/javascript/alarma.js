export default function alarmClock(sound, iniciarAlarma, pararAlarma) {
  const d = document;
  let alarmTempo;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;

  d.addEventListener("click", (e) => {
    if (e.target.matches(iniciarAlarma)) {
      alarmTempo = setTimeout(() => {
        $alarm.play();
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(pararAlarma)) {
      clearTimeout(alarmTempo);
      $alarm.pause();

      d.querySelector(iniciarAlarma).disabled = false;
    }
  });
}
