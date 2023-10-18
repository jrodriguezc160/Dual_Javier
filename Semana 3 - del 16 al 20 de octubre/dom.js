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



// Curso JavaScript: 65. DOM: Clases CSS

console.warn("***** CSS *****");

const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);

// Añadimos la clase "rotate-45" al elemento $card y comprobamos si la contiene
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card);
console.log($card.className);

// Eliminamos la clase "rotate-45" del elemento $card y comprobamos si la contiene
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));

// Alternamos la clase "rotate-45" en el elemento $card y comprobamos si la contiene
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));

// Alternamos nuevamente la clase "rotate-45" en el elemento $card y comprobamos si la contiene
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));

// Alternamos una vez más la clase "rotate-45" en el elemento $card y comprobamos si la contiene
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));

// Reemplazamos la clase "rotate-45" por "rotate-135" en el elemento $card y comprobamos si aún contiene "rotate-45"
$card.classList.replace("rotate-45", "rotate-135");
console.log($card.classList.contains("rotate-45"));

// Añadimos las clases "opacity-80" y "sepia" al elemento $card, luego las eliminamos y las alternamos
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");



// Curso JavaScript: 66. DOM: Texto y HTML

console.warn("***** TEXTO & HTML *****");

const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `;

// $whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;


// Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM

console.warn("***** DOM TRAVERSING *****");

const $cards = document.querySelector(".cards");

setTimeout(() => {
  console.log($cards);
  console.log($cards.children);
  console.log($cards.children[2]);
  console.log($cards.parentElement);
  console.log($cards.firstElementChild);
  console.log($cards.lastElementChild);
  console.log($cards.previousElementSibling);
  console.log($cards.children[3].closest("section"));
}, 1000);



// Curso JavaScript: 68. Creando Elementos y Fragmentos

console.warn("***** CREANDO ELEMENTOS Y FRAGMENTOS *****");

//
/// ELEMENTOS
//

/// Forma 1
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Puppies"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://source.unsplash.com/random/200x200/?puppy");
$img.setAttribute("alt", "Puppies");
$figure.classList.add("card");

$figure.appendChild($img);
$figcaption.appendChild($figcaptionText);
$figure.appendChild($figcaption);
$cards.appendChild($figure);
///

/// Forma 2
$figure2.innerHTML = `
    <img src="https://source.unsplash.com/random/200x200/?kitten" alt="Kittens">
    <figcaption>Kittens</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);
///

/// Forma 3
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});
///

/// Forma 4
const continentes = ["Europa", "Asia", "Oceanía", "África", "América"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);

continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));
///

//
/// FRAGMENTOS
//

// Ejemplo 1
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);



// Curso JavaScript: 69. DOM: Templates HTML

console.warn("***** TEMPLATES HTML *****");

const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardsContent = [
    {
      title: "Tecnología",
      img: "https://source.unsplash.com/random/200x200/?tech",
    },
    {
      title: "Animales",
      img: "https://source.unsplash.com/random/200x200/?animals",
    },
    {
      title: "Arquitectura",
      img: "https://source.unsplash.com/random/200x200/?architecture",
    },
    {
      title: "Gente",
      img: "https://source.unsplash.com/random/200x200/?people",
    },
    {
      title: "Naturaleza",
      img: "https://source.unsplash.com/random/200x200/?nature",
    },
  ];

cardsContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);



// Curso JavaScript: 70/71. DOM: Modificando Elementos (Old Style vs Cool Style)

// Estilo "old style"
const targetOldStyle = document.getElementById("target");

const newDivOldStyle = document.createElement("div");
newDivOldStyle.textContent = "Este es un nuevo div (old style)";

const oldChildOldStyle = targetOldStyle.querySelector("p");
targetOldStyle.replaceChild(newDivOldStyle, oldChildOldStyle);

const removeChildOldStyle = targetOldStyle.querySelector("ul");
targetOldStyle.removeChild(removeChildOldStyle);

const pElementOldStyle = targetOldStyle.querySelector("p");
const newSpanOldStyle = document.createElement("span");
newSpanOldStyle.textContent = "Este es un nuevo span (old style)";
targetOldStyle.insertBefore(newSpanOldStyle, pElementOldStyle);

// Estilo "cool style"
const targetCoolStyle = document.getElementById("target");

const newDivCoolStyle = document.createElement("div");
newDivCoolStyle.textContent = "Este es un nuevo div (cool style)";

targetCoolStyle.insertAdjacentHTML("beforebegin", "<div>Este es un nuevo div (cool style)</div>");

targetCoolStyle.insertAdjacentHTML("afterend", "<div>Este es un nuevo div (cool style) después del elemento de destino</div>");

targetCoolStyle.insertAdjacentHTML("beforebegin", "<span>Este es un nuevo span (cool style)</span>");



// Curso JavaScript: 72/73. DOM: Manejadores de Eventos (semánticos, mútiples, con parámetros, remove...)

console.warn("***** EVENTOS *****");

function holaMundo() {
  alert("Hola mundo");
  console.log(event);
}

// 
/// Evento Semántico
//
const $eventoSemantico = document.getElementById("evento-semantico");

$eventoSemantico.onclick = holaMundo;

$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo desde el manejador de eventos semántico");
  console.log(event);
};

// 
/// Evento Múltiple
//
const $eventoMultiple = document.getElementById("evento-multiple");

function saludar(nombre = "desconocid@") {
  alert(`Hola ${nombre}`);
}

$eventoMultiple.addEventListener("click", () => {
  alert("Hola Mundo desde un Evento Múltiple");
});

$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Charlie")
});

$eventoMultiple.addEventListener("click", () => {
  console.log(event);
});

// 
/// Evento Remover
//
const $eventoRemover = document.getElementById("evento-remover");

const removerDobleClick = (e) => {
  alert("Eliminando Event Listener...");
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);
