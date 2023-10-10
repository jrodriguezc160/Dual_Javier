# Apuntes de JS
Apuntes de los contenidos de JavaScript aprendidos en la empresa durante la formación dual. Archivo personal para anotar los conceptos y demás material de JS.<br>

### Interpolación
Al igual que la concatenación, la interpolación sirve para usar variables dentro de una cadena de texto.<br>
Ejemplo de concatenación:<br>
```js story
let saludo = "Hola, mi nombre es " + nombre + ".";
```
<br>
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

saludar()
```
<br>
```javascript
function saludar(nombre = "Eduardo", apellido = "Camavinga") {
	console.log(`Hola mundo, mi nombre es ${nombre} ${apellido}.`);
}

saludar("Cristiano", "Ronaldo")
```
