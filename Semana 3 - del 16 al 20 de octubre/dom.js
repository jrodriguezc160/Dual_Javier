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

