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
### Estilos y Variables CSS



<br><br>
### Clases CSS
