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

// document y getAttribute parecen apuntar al mismo sitio, pero no es así
console.log(document.documentElement.lang); // en
console.log(document.documentElement.getAttribute("lang")); // en

console.log(document.querySelector(".link-dom").href); // http://127.0.0.1:5500/dom.html
console.log(document.querySelector(".link-dom").getAttribute("href")); // dom.html


// Al igual que existe getAttribute, también existe setAttribute
document.documentElement.lang = "es";
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang", "fr");
console.log(document.documentElement.lang);


// Trabajamos con setAttribute...
const $linkDOM = document.querySelector(".link-dom"); // Declaramos constantes del DOM con un $ delante

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");

$linkDOM.setAttribute("rel", "noopener");
console.log($linkDOM.hasAttribute("rel")); // true

$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel")); // false
