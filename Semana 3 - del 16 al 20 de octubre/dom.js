// Curso JavaScript: 61. DOM: Introducción

console.warn("***** ELEMENTOS DEL DOM *****");

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);



// Curso JavaScript: 62. DOM: Nodos, Elementos y Selectores

// Deprecated
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

// Usable
console.log(document.getElementById("menu")); // Faster than querySelector
console.log(document.querySelector(".card"));
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelectorAll("#menu li"));



// Curso JavaScript: 63. DOM: Atributos y Data-Attributes

console.warn("***** ATRIBUTOS & DATA-ATTRIBUTES *****");

// Acceso a atributos y Data Attributes
console.log(document.documentElement.lang); // Accede al atributo 'lang' del elemento raíz (<html>) directamente.
console.log(document.documentElement.getAttribute("lang")); // Utiliza getAttribute para obtener el valor del atributo 'lang'.
console.log(document.querySelector(".link-dom").href); // Accede a la propiedad 'href' del elemento seleccionado con querySelector.
console.log(document.querySelector(".link-dom").getAttribute("href")); // Utiliza getAttribute para obtener el valor del atributo 'href'.

// Cambio de valor de atributos
document.documentElement.lang = "es"; // Cambia el valor del atributo 'lang' directamente.
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "fr"); // Utiliza setAttribute para cambiar el valor del atributo 'lang'.
console.log(document.documentElement.lang);

// Trabajo con setAttribute y otros métodos
const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target", "_blank"); // Agrega el atributo 'target' con el valor '_blank'.
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha"); // Cambia el valor del atributo 'href'.
$linkDOM.setAttribute("rel", "noopener"); // Agrega el atributo 'rel' con el valor 'noopener'.
console.log($linkDOM.hasAttribute("rel")); // Comprueba si el elemento tiene el atributo 'rel'.
$linkDOM.removeAttribute("rel"); // Elimina el atributo 'rel'.
console.log($linkDOM.hasAttribute("rel"));

// Data-Attributes
console.log($linkDOM.getAttribute("data-description")); // Accede al valor del Data Attribute 'data-description'.
console.log($linkDOM.dataset); // Accede a todos los Data Attributes del elemento a través de la propiedad 'dataset'.
console.log($linkDOM.dataset.description); // Accede a un Data Attribute específico ('description') a través de 'dataset'.
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento"); // Cambia el valor del Data Attribute 'data-description'.
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscríbete al canal de Jon MirCha"; // Cambia el valor de 'description' utilizando 'dataset'.
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id")); // Comprueba si el elemento tiene el Data Attribute 'data-id'.
$linkDOM.removeAttribute("data-id"); // Elimina el Data Attribute 'data-id'.
console.log($linkDOM.hasAttribute("data-id"));



// Curso JavaScript: 64. DOM: Estilos y Variables CSS

console.warn("***** CSS *****");

const $linkDOM = document.querySelector(".link-dom"); // Declaramos constantes del DOM con un $ delante

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));

// Variables CSS - Custom properties
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varWhiteColor = getComputedStyle($html).getPropertyValue("--white-color"),
  varBlueColor = getComputedStyle($html).getPropertyValue("--light-blue");

console.log(varDarkColor, varWhiteColor, varBlueColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varWhiteColor;
$linkDOM.style.backgroundColor = varBlueColor;
$linkDOM.style.color = varWhiteColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.backgroundColor = varDarkColor;
