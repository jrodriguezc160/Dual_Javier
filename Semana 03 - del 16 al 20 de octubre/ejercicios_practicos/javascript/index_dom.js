import alarmClock from "./alarma.js";
import hamburgerMenu from "./menu_hamburgesa.js";
import clock from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  clock("#iniciarReloj", "#pararReloj");
  alarmClock("assets/alarm.mp3", "#iniciarAlarma", "#pararAlarma");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
