# Apuntes de JS
Apuntes de los contenidos de JavaScript aprendidos en la empresa durante la formación dual. Archivo personal para anotar los conceptos y demás material de JS.<br><br>

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
<rb>
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

### Objetos
Los objetos son colecciones de propiedades (clave-valor). Un objeto puede contener cualquier tipo de propiedad (cadena de texto, número, array, funciones, otros objetos…).
<br>
Entre los métodos de los objetos destacan Object.keys, Object.values y hasOwnProperty. El siguiente ejemplo muestra un objeto completo:
```javascript
const jugador = {
  nombre: "Eduardo",
  apellido: "Camavinga",
  posicion: ["Lateral Izquierdo", "Centrocampista"],
  dorsal: 12,
  compromisos: {
    equipo: "Real Madrid",
    seleccion: "Francia",
  },
  cantar: function () {
    console.log("Cama ohhh");
  },
  decirMiNombre: function () {
    console.log(
      `Mi nombre es ${this.nombre} ${this.apellido} y juego en el ${this.compromisos.equipo}`
    );
  },
};

console.log(jugador);
console.log(jugador["nombre"]);
console.log(jugador.apellido);
console.log(jugador.posicion[1]);
console.log(jugador.compromisos.equipo);
jugador.cantar();
jugador.decirMiNombre();

console.log(Object.keys(jugador));
console.log(Object.values(jugador));

console.log(jugador.hasOwnProperty("nombre"));
console.log(jugador.hasOwnProperty("trofeos"));
```
