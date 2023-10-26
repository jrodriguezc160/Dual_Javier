import alarmClock from "./javascript/alarma.js";
import scrollTopButton from "./javascript/boton_scroll.js";
import slider from "./javascript/carrusel.js";
import countdown from "./javascript/countdown.js";
import userDeviceInfo from "./javascript/deteccion_dispositivos.js";
import networkStatus from "./javascript/deteccion_red.js";
import webCam from "./javascript/deteccion_webcam.js";
import searchFilters from "./javascript/filtro_busquedas.js";
import getGeolocation from "./javascript/geolocalizacion.js";
import hamburgerMenu from "./javascript/menu_hamburgesa.js";
import responsiveMedia from "./javascript/objeto_responsive.js";
import responsiveTester from "./javascript/prueba_responsive.js";
import clock from "./javascript/reloj.js";
import scrollSpy from "./javascript/scroll_espia.js";
import draw from "./javascript/sorteo.js";
import { moveBall, shortcuts } from "./javascript/teclado.js";
import darkTheme from "./javascript/tema_oscuro.js";
import smartVideo from "./javascript/video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  clock("#iniciarReloj", "#pararReloj");
  alarmClock("assets/alarm.mp3", "#iniciarAlarma", "#pararAlarma");
  countdown(
    "cuentaRegresivaContenedor",
    "October 2 2024, 9:49:00",
    "Feliz cumpleaños Ferxxo"
  );
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/embed/6IwUl-4pAzc?si=VF8vSmE8NQWAHMb3" target="_blank">Ver vídeo</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=VF8vSmE8NQWAHMb3" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: 1rem"></iframe>`
  );

  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://www.google.com/maps/place/El+Rodeo/@39.4698717,-6.3818323,15z/data=!4m6!3m5!1s0xd15dfce0eb5ad23:0xa1895cab1b17d123!8m2!3d39.4663324!4d-6.3708228!16s%2Fg%2F11b6hw4498?entry=ttu 
    target="_blank">Ver mapa</a>`,
    `<div style="border-radius: 1rem; overflow: hidden; height="315"; width="560"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12320.422056324322!2d-6.3758094!3d39.46694495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd15dfce0eb5ad23%3A0xa1895cab1b17d123!2sEl%20Rodeo!5e0!3m2!1ses!2ses!4v1698133865661!5m2!1ses!2ses" 
    width="560" height="315" style="border:0;" allowfullscreen="" loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe></div>`
  );

  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
});

darkTheme(".dark-theme-btn", "dark-mode");

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

networkStatus();
