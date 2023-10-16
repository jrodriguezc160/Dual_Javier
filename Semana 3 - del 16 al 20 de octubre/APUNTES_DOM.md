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
### Nodos, Elementos y Selectores



<br><br>
### Atributos y Data-Attributes



<br><br>
### Estilos y Variables CSS



<br><br>
### Clases CSS
