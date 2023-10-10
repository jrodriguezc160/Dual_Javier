# Apuntes de JS
Apuntes de los contenidos de JavaScript aprendidos en la empresa durante la formación dual. Archivo personal para anotar los conceptos y demás material de JS.<br>

### Interpolación
Al igual que la concatenación, la interpolación sirve para usar variables dentro de una cadena de texto.<br>
Ejemplo de concatenación:<br>
```js story
let saludo = "Hola, mi nombre es " + nombre + ".";
```

Ejemplo de interpolación:<br>

```javascript
let saludo = `Hola, mi nombre es ${nombre}.`;
```
### Funciones
Importante: undefined y return<br>
```javascript
function saludar(nombre = "Eduardo", apellido = "Camavinga") {
	console.log(`Hola mundo, mi nombre es ${nombre} ${apellido}.`);
}

saludar();
```
<br>

```javascript
function saludar(nombre = "Eduardo", apellido = "Camavinga") {
	console.log(`Hola mundo, mi nombre es ${nombre} ${apellido}.`);
};

saludar("Cristiano", "Ronaldo");
```

### Arrays
Declaración de un array:

```javascript
const segundoArray = Array(10).fill(0);
const primerArray = [1, 2, 3, 4, ["A", "B", "C"]];
```

Método forEach():

```javascript
const tercerArray = ["Rojo", "Verde", "Azul"];

tercerArray?.forEach(function (el, index) {
	console.log(`<li id='${index}'>${el}</li>`)
})
```

Recordar: ```push``` , ```pop``` , ```get``` ...
