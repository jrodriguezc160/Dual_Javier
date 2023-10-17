# Apuntes DOM
Apuntes sobre el DOM y su implementación con código JavaScript. Contiene ejemplos prácticos comentados y explicaciones de cada apartado.
<br><br>
### Introducción al Document Object Model (DOM) en JavaScript

El Document Object Model, o DOM, es una representación en memoria de una página web. Te permite acceder y manipular los elementos de una página web utilizando JavaScript. A continuación, exploraremos algunos de los elementos y propiedades más comunes del DOM:

```javascript
console.warn("***** ELEMENTOS DEL DOM *****");

// Acceso a objetos del DOM
console.log(document);

// Acceso a elementos específicos del DOM
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
```

- **`document`**: Representa el punto de entrada al DOM y proporciona acceso a diferentes propiedades y métodos para interactuar con la página web.

- **`document.head`**: Accede al elemento `head` del documento, que generalmente contiene metadatos, enlaces a hojas de estilo y scripts.

- **`document.body`**: Accede al elemento `body` del documento, que contiene el contenido principal de la página.

- **`document.documentElement`**: Accede al elemento `html` del documento, que engloba todo el contenido de la página.

- **`document.doctype`**: Accede al tipo de documento (DTD) que define la estructura válida del documento.

- **`document.characterSet`**: Accede al conjunto de caracteres utilizado en la página.

- **`document.title`**: Accede al título de la página, que se muestra en la pestaña del navegador.

- **`document.links`**: Accede a los enlaces (`<a>`) presentes en la página.

- **`document.images`**: Accede a las imágenes (`<img>`) presentes en la página.

- **`document.forms`**: Accede a los formularios presentes en la página, permitiendo interactuar con los campos y realizar validaciones.

- **`document.styleSheets`**: Accede a las hojas de estilo vinculadas en la página, lo que permite modificar el aspecto de los elementos.

- **`document.scripts`**: Accede a los scripts incluidos en la página, lo que facilita la manipulación y ejecución de código JavaScript.

- **`document.getSelection()`**: Permite acceder a la selección de texto realizada por el usuario en la página, lo que puede ser útil para realizar acciones específicas con el texto seleccionado.

El DOM es una parte esencial de la programación web en JavaScript y te permite interactuar dinámicamente con elementos de una página, modificar su contenido, estructura y estilo, y responder a eventos del usuario.
<br><br>
### Nodos, Elementos y Selectores en el DOM

En el DOM, los elementos HTML se organizan en una estructura jerárquica como un árbol, y cada parte de esta estructura se conoce como un nodo. Para acceder a los elementos y nodos del DOM, puedes utilizar distintos métodos y selectores. A continuación, se presentan ejemplos de estos métodos:

```javascript
// Deprecated (no se recomienda su uso)
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

// Usable (métodos y selectores modernos)
console.log(document.getElementById("menu"));
console.log(document.querySelector(".card"));
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelectorAll("#menu li"));
```

- **`document.getElementsByTagName("tagname")`**: Obtiene todos los elementos con un nombre de etiqueta específico (como "li" para elementos de lista). Este método está obsoleto y no se recomienda su uso.

- **`document.getElementsByClassName("classname")`**: Obtiene todos los elementos que tienen una clase CSS específica. Este método también está obsoleto.

- **`document.getElementsByName("name")`**: Obtiene elementos por su atributo "name". Al igual que los anteriores, este método se considera obsoleto.

- **`document.getElementById("id")`**: Obtiene un elemento por su ID, lo que es más eficiente que el uso de `querySelector` para esta tarea.

- **`document.querySelector("selector")`**: Obtiene el primer elemento que coincide con un selector CSS específico. Es útil cuando necesitas seleccionar elementos de una manera más precisa.

- **`document.querySelectorAll("selector")`**: Obtiene todos los elementos que coinciden con un selector CSS y devuelve una lista (NodeList). Puedes recorrer esta lista para acceder a los elementos individuales.

- **`document.querySelectorAll("element selector")`**: Permite seleccionar elementos específicos dentro de un elemento padre. En el ejemplo, se seleccionan todos los elementos `<li>` dentro del elemento con el ID "menu".

Es importante utilizar los métodos y selectores modernos (como `getElementById`, `querySelector` y `querySelectorAll`) en lugar de los métodos obsoletos para un código más eficiente y mantenible.
<br><br>
### Atributos y Data-Attributes en el DOM

En el DOM, puedes acceder y manipular los atributos de los elementos HTML, así como los Data-Attributes que se utilizan para almacenar información personalizada en un elemento. A continuación, se explican estos conceptos con ejemplos:

```javascript
console.warn("***** ATRIBUTOS & DATA-ATTRIBUTES *****");

// Acceso a atributos
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang")); 
console.log(document.querySelector(".link-dom").href); 
console.log(document.querySelector(".link-dom").getAttribute("href"));

// Cambio de valor de atributos
document.documentElement.lang = "es"; 
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "fr"); 
console.log(document.documentElement.lang);

// Trabajo con setAttribute y otros métodos
const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target", "_blank"); 
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
$linkDOM.setAttribute("rel", "noopener");
console.log($linkDOM.hasAttribute("rel")); 
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

// Data-Attributes
console.log($linkDOM.getAttribute("data-description")); 
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento"); 
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscríbete al canal de Jon MirCha";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));
```

- **Acceso a atributos**: Puedes acceder a los atributos de los elementos directamente o utilizando `getAttribute()` para obtener el valor de un atributo específico.

- **Cambio de valor de atributos**: Puedes cambiar el valor de un atributo directamente o utilizando `setAttribute()` para asignar un nuevo valor.

- **Trabajo con `setAttribute` y otros métodos**: Puedes agregar, modificar, comprobar y eliminar atributos utilizando métodos como `setAttribute()`, `hasAttribute()`, y `removeAttribute()`.

- **Data-Attributes**: Los Data-Attributes permiten almacenar información personalizada en elementos HTML. Se acceden a través de la propiedad `dataset` y se pueden utilizar para almacenar datos relacionados con el elemento sin afectar la validación del HTML.

El acceso y manipulación de atributos es fundamental en la interacción con el DOM, ya que te permite personalizar la forma en que los elementos se comportan y se presentan en la página web.
<br><br>
### Estilos y Variables CSS en el DOM

En el DOM, puedes acceder y modificar los estilos de elementos HTML, además de utilizar variables CSS personalizadas (custom properties). A continuación, se muestra cómo trabajar con estilos y variables CSS:

```javascript
console.warn("***** CSS *****");

const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style); // Accede a los estilos inline del elemento.
console.log($linkDOM.getAttribute("style")); // Obtiene el atributo 'style' del elemento.
console.log($linkDOM.style.backgroundColor); // Accede a una propiedad de estilo específica.
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM)); // Obtiene todos los estilos computados.
console.log(getComputedStyle($linkDOM).getPropertyValue("color")); // Obtiene el valor de una propiedad específica.

// Modificación de estilos
$linkDOM.style.setProperty("text-decoration", "none"); // Establece una propiedad de estilo.
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%"; // Modifica el ancho del elemento.
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style); // Muestra los estilos modificados.
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));

// Variables CSS - Custom properties
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"), // Accede al valor de una variable CSS personalizada.
  varWhiteColor = getComputedStyle($html).getPropertyValue("--white-color"),
  varBlueColor = getComputedStyle($html).getPropertyValue("--light-blue");

console.log(varDarkColor, varWhiteColor, varBlueColor);

$body.style.backgroundColor = varDarkColor; // Aplica el valor de la variable a los estilos.
$body.style.color = varWhiteColor;
$linkDOM.style.backgroundColor = varBlueColor;
$linkDOM.style.color = varWhiteColor;

$html.style.setProperty("--dark-color", "#000"); // Cambia el valor de una variable CSS personalizada.
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.backgroundColor = varDarkColor; // Aplica el nuevo valor de la variable a los estilos.
```

- **Estilos del DOM**: Puedes acceder y modificar los estilos de un elemento HTML utilizando la propiedad `style`. Para obtener estilos computados, utiliza `getComputedStyle()`.

- **Variables CSS personalizadas**: Puedes definir variables CSS personalizadas en tu hoja de estilo y acceder a ellas con JavaScript para personalizar el aspecto de tu página de manera dinámica.

Trabajar con estilos y variables CSS te brinda un mayor control sobre la apariencia de tu página y la capacidad de cambiar dinámicamente los estilos en función de eventos o acciones del usuario.
<br><br>
### Clases CSS en el DOM

El DOM te permite manipular las clases CSS de los elementos HTML. A continuación, se muestra cómo trabajar con clases en JavaScript:

```javascript
console.warn("***** CSS *****");

const $card = document.querySelector(".card");
console.log($card);
console.log($card.className); // Accede y muestra la lista de clases del elemento.

// Añadir una clase
$card.classList.add("rotate-45"); // Añade la clase "rotate-45" al elemento.
console.log($card.classList.contains("rotate-45")); // Comprueba si el elemento contiene la clase "rotate-45".
console.log($card);

// Eliminar una clase
$card.classList.remove("rotate-45"); // Elimina la clase "rotate-45" del elemento.
console.log($card.classList.contains("rotate-45"));

// Alternar una clase
$card.classList.toggle("rotate-45"); // Agrega o elimina la clase "rotate-45" según su estado actual.
console.log($card.classList.contains("rotate-45"));

// Reemplazar una clase
$card.classList.replace("rotate-45", "rotate-135"); // Reemplaza la clase "rotate-45" por "rotate-135".
console.log($card.classList.contains("rotate-45"));

// Trabajar con múltiples clases
$card.classList.add("opacity-80", "sepia"); // Agrega múltiples clases.
$card.classList.remove("opacity-80", "sepia"); // Elimina múltiples clases.
$card.classList.toggle("opacity-80", "sepia"); // Alterna múltiples clases.
```

- `classList` proporciona métodos para agregar, eliminar, comprobar y alternar clases CSS en elementos HTML.

- Puedes agregar, eliminar, comprobar o alternar una sola clase o múltiples clases al mismo tiempo.

Manipular clases en el DOM es útil para cambiar el aspecto y comportamiento de elementos HTML en respuesta a eventos o interacciones del usuario, lo que facilita la creación de aplicaciones web dinámicas.
<br><br>
### Texto e HTML en el DOM

El DOM permite trabajar con el contenido textual y HTML de elementos HTML. A continuación, se muestra cómo manipular texto e HTML en JavaScript:

```javascript
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

$whatIsDOM.innerText = text; // Establece el contenido de texto del elemento, evitando la interpretación de etiquetas HTML.
$whatIsDOM.textContent = text; // Similar a innerText, pero más estándar y con mejor soporte.
$whatIsDOM.innerHTML = text; // Establece el contenido HTML del elemento, interpretando las etiquetas HTML.
$whatIsDOM.outerHTML = text; // Reemplaza completamente el elemento con el contenido proporcionado (incluyendo su propia etiqueta).
```

- `innerText` establece el contenido de texto de un elemento sin interpretar etiquetas HTML, lo que lo hace seguro contra ataques XSS.

- `textContent` funciona de manera similar a `innerText` pero es más estándar y compatible con más navegadores.

- `innerHTML` permite establecer y obtener contenido HTML dentro de un elemento, lo que permite la manipulación de elementos y estilos.

- `outerHTML` reemplaza completamente un elemento y su contenido con el HTML proporcionado, lo que puede usarse para modificar o reemplazar elementos enteros en el DOM.

Estos métodos son esenciales para cambiar dinámicamente el contenido de una página web y crear interacciones más atractivas para los usuarios.
<br><br>
### Traversing del DOM: Recorriendo el DOM

Recorrer y explorar la estructura del DOM es una parte fundamental de la manipulación de elementos HTML. Aquí te mostramos cómo navegar por el DOM en JavaScript:

```javascript
console.warn("***** DOM TRAVERSING *****");

const $cards = document.querySelector(".cards");

setTimeout(() => {
  console.log($cards); // Selecciona el elemento con la clase "cards".
  console.log($cards.children); // Obtiene todos los elementos hijos de "cards".
  console.log($cards.children[2]); // Accede al tercer hijo de "cards".
  console.log($cards.parentElement); // Accede al elemento padre de "cards".
  console.log($cards.firstElementChild); // Accede al primer hijo de "cards".
  console.log($cards.lastElementChild); // Accede al último hijo de "cards".
  console.log($cards.previousElementSibling); // Accede al elemento hermano anterior de "cards".
  console.log($cards.children[3].closest("section")); // Busca el elemento "section" más cercano que contiene al cuarto hijo de "cards".
}, 1000);
```

- `$cards` es un elemento que representa la selección de un elemento con la clase "cards".

- `$cards.children` devuelve una lista de todos los elementos hijos de `$cards`.

- `$cards.children[2]` accede al tercer elemento hijo de `$cards`.

- `$cards.parentElement` obtiene el elemento padre de `$cards`.

- `$cards.firstElementChild` obtiene el primer elemento hijo de `$cards`.

- `$cards.lastElementChild` obtiene el último elemento hijo de `$cards`.

- `$cards.previousElementSibling` accede al elemento hermano anterior de `$cards`.

- `$cards.children[3].closest("section")` busca el elemento "section" más cercano que contiene al cuarto hijo de `$cards`.

Recorrer el DOM es útil para acceder a elementos específicos y realizar operaciones de manipulación en ellos. Estos métodos te ayudarán a explorar y modificar el contenido de tus páginas web.
<br><br>
### Creando Elementos y Fragmentos en el DOM

En JavaScript, puedes crear elementos y fragmentos para construir y manipular el DOM. Aquí se muestran diferentes ejemplos de cómo hacerlo:

```javascript
console.warn("***** CREANDO ELEMENTOS Y FRAGMENTOS *****");

// Creación de elementos
const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figcaption = document.createElement("figcaption");
const $figcaptionText = document.createTextNode("Puppies");
const $cards = document.querySelector(".cards");
const $figure2 = document.createElement("figure");

// Establecer atributos y contenido de elementos
$img.setAttribute("src", "https://source.unsplash.com/random/200x200/?puppy");
$img.setAttribute("alt", "Puppies");
$figure.classList.add("card");
$figure.appendChild($img);
$figcaption.appendChild($figcaptionText);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
    <img src="https://source.unsplash.com/random/200x200/?kitten" alt="Kittens">
    <figcaption>Kittens</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

// Creación de elementos a partir de arreglos
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
const $ul = document.createElement("ul");
document.write("<h3>Estaciones del año</h3");
document.body.appendChild($ul);
estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

// Creación de elementos a partir de arreglos con forma simplificada
const continentes = ["Europa", "Asia", "Oceanía", "África", "América"];
const $ul2 = document.createElement("ul");
document.write("<h3>Continentes del mundo</h3");
document.body.appendChild($ul2);
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

// Creación de fragmentos
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
  ];
const $ul3 = document.createElement("ul");
const $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
```

En estos ejemplos, hemos creado elementos y fragmentos y los hemos añadido al DOM. La creación y manipulación de elementos y fragmentos son tareas comunes cuando trabajas con el DOM en JavaScript. Esto te permite construir dinámicamente la estructura de tu página web.
<br><br>
### Templates HTML en el DOM

En JavaScript, puedes utilizar plantillas HTML para crear contenido dinámicamente y luego insertarlo en el DOM. Aquí se muestra un ejemplo de cómo usar plantillas HTML:

```javascript
console.warn("***** TEMPLATES HTML *****");

const $cards = document.querySelector(".cards");
const $template = document.getElementById("template-card").content;
const $fragment = document.createDocumentFragment();
const cardsContent = [
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
  // Clonamos la plantilla y la modificamos
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true); // Importamos el nodo de la plantilla
  $fragment.appendChild($clone); // Añadimos el clon al fragmento
});

$cards.appendChild($fragment); // Agregamos el fragmento al DOM
```

En este ejemplo, hemos utilizado una plantilla HTML en el documento con el ID "template-card". Luego, hemos clonado esta plantilla, modificado su contenido y agregado los clones al fragmento. Finalmente, hemos insertado el fragmento en el DOM. Las plantillas HTML son una forma efectiva de crear y agregar contenido dinámicamente a tu página web.
<br><br>
### Modificando Elementos en el DOM: Estilo Antiguo vs. Estilo Moderno

En JavaScript, hay varias formas de modificar elementos en el DOM. A continuación, se muestra un ejemplo que compara el estilo antiguo con el estilo moderno:

```javascript
// Estilo "old style"
const targetOldStyle = document.getElementById("target");

// Reemplazar un elemento con un nuevo div (old style)
const newDivOldStyle = document.createElement("div");
newDivOldStyle.textContent = "Este es un nuevo div (old style)";
const oldChildOldStyle = targetOldStyle.querySelector("p");
targetOldStyle.replaceChild(newDivOldStyle, oldChildOldStyle);

// Eliminar un elemento de tipo lista ul (old style)
const removeChildOldStyle = targetOldStyle.querySelector("ul");
targetOldStyle.removeChild(removeChildOldStyle);

// Insertar un nuevo span antes de un párrafo (old style)
const pElementOldStyle = targetOldStyle.querySelector("p");
const newSpanOldStyle = document.createElement("span");
newSpanOldStyle.textContent = "Este es un nuevo span (old style)";
targetOldStyle.insertBefore(newSpanOldStyle, pElementOldStyle);

// Estilo "cool style"
const targetCoolStyle = document.getElementById("target");

// Insertar un nuevo div antes y después del elemento de destino (cool style)
targetCoolStyle.insertAdjacentHTML("beforebegin", "<div>Este es un nuevo div (cool style)</div>");
targetCoolStyle.insertAdjacentHTML("afterend", "<div>Este es un nuevo div (cool style) después del elemento de destino</div>");

// Insertar un nuevo span antes del elemento de destino (cool style)
targetCoolStyle.insertAdjacentHTML("beforebegin", "<span>Este es un nuevo span (cool style)</span>");
```

En el estilo "old style," hemos utilizado métodos como `createElement`, `replaceChild`, `removeChild`, y `insertBefore` para modificar el DOM. En contraste, el estilo "cool style" utiliza el método `insertAdjacentHTML`, que proporciona una forma más concisa y moderna de realizar las mismas operaciones. Ambos estilos logran los mismos resultados, pero el estilo moderno puede ser más legible y eficiente en muchos casos.
<br><br>
### Manejadores de Eventos en JavaScript

En JavaScript, los manejadores de eventos son una parte fundamental para interactuar con elementos del DOM y responder a las acciones del usuario, como clics, movimientos del mouse, pulsaciones de teclas, entre otros. A continuación, se muestra un ejemplo que ilustra diferentes aspectos relacionados con los manejadores de eventos:

```javascript
console.warn("***** EVENTOS *****");

// Función que se ejecuta al hacer clic en el elemento con id "evento-semantico"
function holaMundo() {
  alert("Hola mundo");
  console.log(event);
}

// Obtener el elemento con id "evento-semantico"
const $eventoSemantico = document.getElementById("evento-semantico");

// Evento semántico: Asignar la función holaMundo al evento onclick
$eventoSemantico.onclick = holaMundo;

// Evento semántico: Reemplazar la función asociada al evento onclick
$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo desde el manejador de eventos semántico");
  console.log(event);
};

// Obtener el elemento con id "evento-multiple"
const $eventoMultiple = document.getElementById("evento-multiple");

// Evento múltiple: Agregar un escuchador de eventos "click" que muestra un alert
$eventoMultiple.addEventListener("click", () => {
  alert("Hola Mundo desde un Evento Múltiple");
});

// Evento múltiple: Agregar otro escuchador de eventos "click" que interactúa con el usuario
$eventoMultiple.addEventListener("click", () => {
  let estado = prompt("¿Cómo estás?", "Bien/Mal");
  if (estado === "Bien") alert("Me alegro por ti;)");
  if (estado === "Mal") alert("Alégrate bro:P");
});

// Evento múltiple: Agregar un escuchador de eventos "click" que muestra información del evento en la consola
$eventoMultiple.addEventListener("click", () => {console.log(event)});
```

Este ejemplo incluye:

1. Un **evento semántico** que asigna una función directamente al evento `onclick` de un elemento.
2. Eventos múltiples agregados con `addEventListener` que responden a clics en un elemento. Estos eventos pueden ser independientes y ejecutar diferentes acciones.
3. El uso de `prompt` para interactuar con el usuario.
4. La visualización de información del evento en la consola.

El manejo de eventos es una parte fundamental en la programación web para crear interacciones dinámicas y enriquecer la experiencia del usuario.
