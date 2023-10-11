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

<br>

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

<br>

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

<br>

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

<br>

### Operador ternario
Variable que funciona como if:

```javascript
let edad = 15;

let mayorDeEdad = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

console.log(mayorDeEdad);
// La salida será "Eres mayor de edad"
```

<br>

### For
for in:

```javascript
const camaOh = {
  nombre: "Eduardo",
  apellido: "Camavinga",
  dorsal: 12,
};

for (const propiedad in camaOh) {
  console.log(`Key: ${propiedad}, Propiedad: ${camaOh[propiedad]}`);
}
```

for of:

```javascript
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (const elemento of numeros) {
  console.log(elemento);
}

// Salida:
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90

let cadena = "Camavinga";
for (const caracter of cadena) {
  console.log(caracter);
}

// Salida:
// C
// a
// m
// a
// v
// i
// n
// g
// a
```

<br>

### Try-Catch
Ejemplo de try-catch:

```javascript
try {
  let numero = " y";

  if (isNaN(numero)) {
    throw new Error("El carácter introducido no es un número");
  }
  console.log(numero);
} catch (error) {
  console.log(`Se ha producido el siguiente error -> ${error}`);
}
```

Salida: "Se ha producido el siguiente error -> Error: El carácter introducido no es un número"

<br>

### Break & Continue
Ejemplo de continue en un bucle for (imprimimos solo los impares):

```javascript
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    continue;
  }

  console.log(numeros[i]);
}
```

Salida: 1 3 5 7 9

<br>

### Desestructuración
Con arrays:

```javascript
let numeros = [1, 2, 3];

// Desestructuración
const [uno, dos, tres] = numeros;

console.log(numeros);
```

<br>

Con objetos:

```javascript
const camaOh = {
  nombre: "Eduardo",
  apellido: "Camavinga",
  dorsal: 12,
};

// Desestructuración
let { nombre, apellido, dorsal } = camaOh;

console.log(nombre, apellido, dorsal);
```

<br>

### Objetos literales
Ejemplo:

```javascript
let nombre = "Eduardo",
  apellido = "Camavinga";

const camaOh = {
  nombre,
  apellido,
  dorsal: 12,
  cantar() {
    console.log("Cama oh, Cama ohhh");
  },
};

console.log(camaOh);
camaOh.cantar();
```

<br>

### Rest & Spread operator
Ejemplo 1 · Función sumar():

```javascript
function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n;
  });

  console.log(resultado);
}

sumar(1, 2, 3, 4);
```

<br>

Ejemplo 2 · Arrays:

```javascript
const array1 = [1, 2, 3, 4, 5],
  array2 = [6, 7, 8, 9, 0];

const array3 = [...array1, ...array2];
console.log(array3);
```

<br>

### Arrow ⇒ functions
Comparación 1:

```javascript
/*
const sumar = function (a, b) {
	return a + b;
};
*/

const sumar = (a, b) => alert(`La suma de ${a} + ${b} es igual a ${a + b}`);

sumar(8, 6);
```

<br>

Comparación 2:

```javascript
const numeros = [1, 2, 3, 4, 5];

/*
numeros.forEach(function (element, index) {
	console.log(`${index} - Número ${element}`);
});
*/

numeros.forEach((element, index) => {
  console.log(`${index} - Número ${element}`);
});
```

<br>

### Prototipos
Símil con la clase Jugadores del programa de Java que hice con Isabel <b>(muy importante el this.)</b>:

```javascript
function Jugador(nombre, apellido, dorsal) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.dorsal = dorsal;
}

Jugador.prototype.frase = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

const camavinga = new Jugador("Eduardo", "Camavinga", 12);

console.log(camavinga);
camavinga.frase();
```

<br>

### Herencia prototípica
Ejemplo de Personas y Futbolistas:

```javascript
// Prototipo Persona
function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

// Definimos un método "frase" en el prototipo de Persona
Persona.prototype.frase = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

// Prototipo Futbolista
function Futbolista(nombre, apellido, dorsal) {
  // Llamamos al constructor de Persona con los nombres y apellidos dados
  this.super = Persona;
  this.super(nombre, apellido);
  this.dorsal = dorsal;
}

// Establecemos la herencia de Futbolista desde Persona
Futbolista.prototype = new Persona();
Futbolista.prototype.constructor = Futbolista;

// Redefinimos el método "frase" en el prototipo de Futbolista
Futbolista.prototype.frase = function () {
  console.log(
    `Mi nombre es ${this.nombre} ${this.apellido} y llevo el dorsal ${this.dorsal}`
  );
};

// Agregamos un nuevo método "celebracion" al prototipo de Futbolista
Futbolista.prototype.celebracion = function () {
  console.log(
    `Sensational! Absolutely sensational! What a goal for ${this.apellido}`
  );
};

// Creamos una instancia de Persona llamada javier
const javier = new Persona("Javier", "Rodríguez");

console.log(javier);
javier.frase();

// Creamos una instancia de Futbolista llamada camavinga
const camavinga = new Futbolista("Eduardo", "Camavinga", "12");

console.log(camavinga);
camavinga.frase();
camavinga.celebracion();
```

<br>

### Clases y herencia
Herencia prototípica muyyy simplificada:

```javascript
// Clase Persona
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  // Definimos un método "frase" en la clase de Persona
  frase() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }
}

// Clase Futbolista
class Futbolista extends Persona {
  constructor(nombre, apellido, dorsal) {
    super(nombre, apellido);
    this.dorsal = dorsal;
  }

  // Redefinimos el método "frase" en la clase de Futbolista
  frase() {
    console.log(
      `Mi nombre es ${this.nombre} ${this.apellido} y llevo el dorsal ${this.dorsal}`
    );
  }

  // Agregamos un nuevo método "celebracion" a la clase de Futbolista
  celebracion() {
    console.log(
      `Sensational! Absolutely sensational! What a goal for ${this.apellido}`
    );
  }
}

// Creamos una instancia de Persona llamada javier
const javier = new Persona("Javier", "Rodríguez");

console.log(javier);
javier.frase();

// Creamos una instancia de Futbolista llamada camavinga
const camavinga = new Futbolista("Eduardo", "Camavinga", "12");

console.log(camavinga);
camavinga.frase();
camavinga.celebracion();
```

<br>

### Getter & Setter
Con el ejemplo de Futbolistas y utilizándose para una posible opción de menú que permita modificar parámetros de la instancia de la clase:

```javascript
// Clase Persona
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  // Definimos un método "frase" en la clase de Persona
  frase() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }
}

// Clase Futbolista
class Futbolista extends Persona {
  constructor(nombre, apellido, dorsal) {
    super(nombre, apellido);
    this.dorsal = dorsal;
  }

  // Redefinimos el método "frase" en la clase de Futbolista
  frase() {
    console.log(
      `Mi nombre es ${this.nombre} ${this.apellido} y llevo el dorsal ${this.dorsal}`
    );
  }

  // Agregamos un nuevo método "celebracion" a la clase de Futbolista
  celebracion() {
    console.log(
      `Sensational! Absolutely sensational! What a goal for ${this.apellido}`
    );
  }

  get getDorsal() {
    return this.dorsal;
  }

  set setDorsal(dorsal) {
    this.dorsal = dorsal;
  }
}

// Creamos una instancia de Persona llamada javier
const javier = new Persona("Javier", "Rodríguez");

console.log(javier);
javier.frase();

// Creamos una instancia de Futbolista llamada camavinga
const camavinga = new Futbolista("Eduardo", "Camavinga", "12");

console.log(camavinga);
camavinga.frase();
camavinga.celebracion();

// Getter y setter
console.log(camavinga.getDorsal);
camavinga.setDorsal = 7;
console.log(camavinga.getDorsal);
```

<br>

### Console
Lista de métodos que se usan con el objeto console:
- .log
- .error
- .warning
- .info
- .clear
- .dir
- .group/groupCollapsed/groupEnd
- .table
- .time/timeEnd
- .count
- .assert

<br>

### Funciones Anónimas Autoejecutables
En este programa tenemos una Función Anónima Autoejectuable que contiene una variable contador y dos funciones para incrementar su valor y retornarlo. Además, cuenta con un return que devuelve estas funciones para poder usarlas fuera de la IIFE.

```javascript
let contador = (function () {
  let count = 0;

  function increment() {
    count++;
  }

  function getCount() {
    return count;
  }

  return {
    increment: increment,
    getCount: getCount,
  };
})();

console.log(contador.getCount());

while (contador.getCount() < 5) {
  contador.increment();
  console.log(contador.getCount());
}
```

<br>

### Asincronía en JavaScript

JavaScript es un lenguaje de programación que admite la programación asíncrona. Esto significa que puede realizar tareas que no bloquean la ejecución principal del programa, lo que es esencial para aplicaciones web y otras tareas que requieren manejar eventos y operaciones en segundo plano.

#### `setTimeout` y `setInterval`

`setTimeout` y `setInterval` son funciones que permiten ejecutar código de manera asíncrona después de un cierto período de tiempo.

<b>Ejemplo con `setInterval`</b>

El siguiente ejemplo muestra cómo utilizar `setInterval` para imprimir la hora actual cada segundo y luego detenerlo usando `clearInterval`:

```javascript
let temporizador = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
  clearInterval(temporizador);
  console.log("Después del clearInterval");
}, 5000);
```

En este ejemplo, `setInterval` ejecuta la función proporcionada cada segundo, mostrando la hora actual. Luego, después de 5 segundos, se utiliza `clearInterval` para detener la ejecución del temporizador.

#### Callbacks

Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que esa función haya completado su tarea. Son esenciales para manejar la asincronía en JavaScript.

<b>Ejemplo de Callback</b>

El siguiente ejemplo muestra el uso de callbacks para calcular el cuadrado de varios números de forma asíncrona:

```javascript
function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0);
}

cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log(`Callback: ${value}, ${result}`);
  
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
  });

  cuadradoCallback(2, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
  });

  cuadradoCallback(3, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
  });

  cuadradoCallback(4, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
  });

  cuadradoCallback(5, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
  });
});
```

En este ejemplo, la función `cuadradoCallback` toma un valor y un callback como argumentos. Calcula el cuadrado del valor de manera asíncrona y luego llama al callback con el resultado. Luego, se muestra el resultado de cada cálculo en la consola.

Los callbacks son útiles para gestionar operaciones asíncronas como solicitudes HTTP, lectura de archivos y otros eventos que pueden ocurrir en segundo plano en aplicaciones JavaScript.

<br>

### Promesas en JavaScript

Las promesas son una forma poderosa de manejar la asincronía en JavaScript. Proporcionan una estructura más clara y fácil de leer para el código asíncrono, en lugar de anidar múltiples callbacks. Las promesas se utilizan para representar valores que pueden no estar disponibles de inmediato y permiten una gestión más eficiente de errores.

#### Ejemplo de Promesas

El siguiente ejemplo muestra cómo utilizar promesas para calcular el cuadrado de varios números de manera asíncrona y manejar errores si el valor no es un número.

```javascript
function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(`ERROR: El valor enviado no es un número.`);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

cuadradoPromise(0)
  .then((obj) => {
    console.log(`Inicio Promise`);
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log(`Fin Promise`);
  })
  .catch((err) => console.error(err));
```

En este ejemplo, la función `cuadradoPromise` devuelve una promesa que calcula el cuadrado de un número después de un tiempo aleatorio simulado. Utiliza `resolve` para devolver el resultado exitoso y `reject` para manejar errores.

El uso de `.then` permite encadenar las promesas, lo que hace que el código sea más legible y estructurado. Si se encuentra un error (por ejemplo, si el valor no es un número), se captura utilizando `.catch`.

Las promesas son una forma eficaz de gestionar la asincronía y mejorar la legibilidad del código en situaciones donde es necesario realizar operaciones asíncronas.

<br>

### Funciones Asíncronas en JavaScript

Las funciones asíncronas en JavaScript, también conocidas como funciones `async`, son una característica poderosa para trabajar con código asincrónico de manera más legible y estructurada. Permiten que las operaciones asíncronas se vean más como código síncrono, lo que facilita la comprensión y el mantenimiento del código.

#### Función Asíncrona Declarada

Una función asíncrona declarada se define utilizando la palabra clave `async` antes de la palabra clave `function`. A continuación, se muestra un ejemplo de una función asíncrona que utiliza la función `cuadradoPromise` definida anteriormente para calcular el cuadrado de varios números:

```javascript
function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(`ERROR: El valor enviado no es un número.`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

async function funcionAsincronaDeclarada() {
  try {
    console.log(`Inicio Async Function`);

    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(3);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.log(`Fin Async Function`);
  } catch (err) {
    console.error(err);
  }
}

funcionAsincronaDeclarada();
```

En este ejemplo, la función `funcionAsincronaDeclarada` utiliza `await` para esperar que se resuelvan las promesas devueltas por `cuadradoPromise`. Esto hace que el código sea más legible y se comporte de manera similar a una ejecución síncrona. También se maneja cualquier error que pueda ocurrir con un bloque `try-catch`.

#### Función Asíncrona Expresada

También es posible definir funciones asíncronas utilizando expresiones de función arrow (`=>`). Aquí tienes un ejemplo similar al anterior, pero utilizando una función asíncrona expresada:

```javascript
const funcionAsincronaExpresada = async () => {
  try {
    console.log(`Inicio Async Function`);

    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(3);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.log(`Fin Async Function`);
  } catch (err) {
    console.error(err);
  }
};

funcionAsincronaExpresada();
```

En este caso, la función asíncrona se asigna a la variable `funcionAsincronaExpresada` y se utiliza de la misma manera que la función declarada anteriormente.

Ambos ejemplos ilustran cómo las funciones asíncronas simplifican la escritura y el manejo de código asíncrono en JavaScript, lo que mejora la legibilidad y el mantenimiento del código.

<br>

### Conjuntos (Sets) en JavaScript

Los conjuntos en JavaScript son estructuras de datos que almacenan valores únicos sin duplicados. Aquí hay un resumen de su uso:

- **Creación de un Set**: Puedes crear un conjunto utilizando `new Set()`, y automáticamente eliminará los duplicados de los valores que le proporcionas.

- **Operaciones con Sets**:
  - **Agregar elementos**: Utiliza el método `add()` para agregar elementos al conjunto. Los duplicados se ignoran.
  - **Recorrer un Set**: Puedes utilizar un bucle `for...of` o el método `forEach()` para recorrer los elementos del conjunto.
  - **Convertir un Set en un Array**: Utiliza `Array.from()` para convertir un conjunto en un array si necesitas realizar operaciones específicas de array.
  - **Eliminar elementos**: Usa `delete()` para eliminar elementos específicos y `clear()` para borrar todo el conjunto.

Los conjuntos son útiles cuando necesitas almacenar una colección de valores únicos y deseas realizar operaciones como agregar, eliminar y verificar la existencia de elementos de manera eficiente.
<br>
Ejemplo:

```javascript
// Creación de un conjunto con valores únicos
const miSet = new Set();

// Agregar elementos al conjunto
miSet.add(1);
miSet.add(2);
miSet.add(3);
miSet.add(2); // Los duplicados se ignoran

console.log(miSet); // Salida: Set { 1, 2, 3 }
console.log(`Tamaño del conjunto: ${miSet.size}`); // Salida: Tamaño del conjunto: 3

// Recorrer un conjunto utilizando un bucle for...of
console.warn("Recorriendo el conjunto:");
for (const elemento of miSet) {
  console.log(elemento);
}
// Salida:
// 1
// 2
// 3

// Verificar la existencia de un elemento en el conjunto
console.log(miSet.has(2)); // Salida: true
console.log(miSet.has(4)); // Salida: false

// Eliminar elementos del conjunto
miSet.delete(3);
console.log(miSet); // Salida: Set { 1, 2 }

// Borrar todo el conjunto
miSet.clear();
console.log(miSet); // Salida: Set {}
```

<br>

### Mapas (Maps) en JavaScript

Los mapas en JavaScript son estructuras de datos que permiten almacenar pares clave-valor, donde las claves son únicas y los valores pueden ser cualquier tipo de datos. A continuación, se presenta una descripción general de su uso:

- **Creación de un Mapa**: Puedes crear un mapa utilizando `new Map()`, y puedes asignar pares clave-valor al mapa utilizando el método `set()`.

- **Operaciones con Mapas**:
  - **Agregar elementos**: Utiliza el método `set()` para asignar pares clave-valor al mapa.
  - **Recuperar elementos**: Puedes obtener el valor asociado a una clave utilizando el método `get()`.
  - **Verificar la existencia de una clave**: Utiliza el método `has()` para comprobar si una clave existe en el mapa.
  - **Eliminar elementos**: Usa el método `delete()` para eliminar una entrada específica por clave, o `clear()` para borrar todo el mapa.
  - **Tamaño del Mapa**: Puedes obtener el número de pares clave-valor en el mapa utilizando la propiedad `size`.

Los mapas son útiles cuando necesitas almacenar datos relacionados en una estructura de clave-valor y desear realizar operaciones como agregar, recuperar y eliminar elementos de manera eficiente.

#### Ejemplo:

```javascript
// Creación de un mapa y asignación de valores
const miMapa = new Map();

miMapa.set("clave1", "valor1");
miMapa.set("clave2", "valor2");
miMapa.set("clave3", "valor3");

console.log(miMapa); // Salida: Map { 'clave1' => 'valor1', 'clave2' => 'valor2', 'clave3' => 'valor3' }
console.log(`Tamaño del mapa: ${miMapa.size}`); // Salida: Tamaño del mapa: 3

// Recuperar un valor por clave
const valor = miMapa.get("clave2");
console.log(`Valor asociado a 'clave2': ${valor}`); // Salida: Valor asociado a 'clave2': valor2

// Verificar la existencia de una clave
console.log(miMapa.has("clave1")); // Salida: true
console.log(miMapa.has("clave4")); // Salida: false

// Eliminar una entrada por clave
miMapa.delete("clave3");
console.log(miMapa); // Salida: Map { 'clave1' => 'valor1', 'clave2' => 'valor2' }

// Borrar todo el mapa
miMapa.clear();
console.log(miMapa); // Salida: Map {}
```

Este ejemplo muestra cómo crear un mapa, asignar pares clave-valor, recuperar valores por clave, verificar la existencia de claves y eliminar entradas específicas o borrar todo el mapa. Los mapas son útiles para gestionar datos estructurados en JavaScript.

<br>

### WeakSets (Conjuntos Débiles) en JavaScript

Los conjuntos débiles (`WeakSet`) en JavaScript son estructuras de datos similares a los conjuntos, pero con algunas diferencias clave:

- **Referencias débiles**: A diferencia de los conjuntos regulares, los `WeakSet` solo pueden contener objetos y no valores primitivos. Además, las referencias a los objetos en un `WeakSet` son débiles, lo que significa que no impiden que los objetos sean recogidos por el recolector de basura si ya no están siendo utilizados en otros lugares de tu código.

- **No iterable**: Los `WeakSet` no son iterables, lo que significa que no puedes recorrer sus elementos como lo harías con un conjunto normal utilizando un bucle `for...of` o métodos como `forEach`.

- **Operaciones básicas**: Los `WeakSet` admiten operaciones básicas como `add()`, `has()` y `delete()` para agregar elementos, verificar la existencia de elementos y eliminar elementos específicos.

Los `WeakSets` son útiles cuando necesitas almacenar conjuntos de objetos de manera que no eviten que los objetos se eliminen de la memoria cuando ya no son necesarios, como en casos de implementación de sistemas de caché o gestión de referencias débiles.

#### Ejemplo:

```javascript
// Creación de un WeakSet y asignación de objetos
const miWeakSet = new WeakSet();

const obj1 = { nombre: "Objeto 1" };
const obj2 = { nombre: "Objeto 2" };
const obj3 = { nombre: "Objeto 3" };

miWeakSet.add(obj1);
miWeakSet.add(obj2);

console.log(miWeakSet); // Salida: WeakSet { [items unknown] }

// Verificar la existencia de un objeto en el WeakSet
console.log(miWeakSet.has(obj1)); // Salida: true
console.log(miWeakSet.has(obj3)); // Salida: false

// Eliminar un objeto del WeakSet
miWeakSet.delete(obj2);
console.log(miWeakSet); // Salida: WeakSet { [items unknown] }
```

Este ejemplo muestra cómo crear un `WeakSet`, agregar objetos, verificar la existencia de objetos y eliminar objetos del conjunto. Recuerda que los objetos en un `WeakSet` pueden ser recogidos por el recolector de basura si ya no tienen referencias fuertes en tu código.

<br>

### WeakMaps (Mapas Débiles) en JavaScript

Los mapas débiles (`WeakMap`) en JavaScript son similares a los mapas regulares, pero también tienen referencias débiles a las claves. Aquí hay una descripción general de su uso:

- **Referencias débiles en claves**: A diferencia de los mapas regulares, las claves en un `WeakMap` son referencias débiles, lo que significa que no impiden que los objetos se eliminen de la memoria si ya no están siendo utilizados en otros lugares de tu código.

- **Operaciones básicas**: Los `WeakMap` admiten operaciones básicas como `set()`, `get()`, `has()` y `delete()` para asignar valores, recuperar valores por clave, verificar la existencia de claves y eliminar entradas específicas.

- **Solo objetos como claves**: Solo puedes utilizar objetos como claves en un `WeakMap`, no se permiten valores primitivos como claves.

Los `WeakMaps` son útiles cuando necesitas asociar datos específicos con objetos sin prevenir que los objetos sean eliminados de la memoria cuando ya no se utilizan en otros lugares de tu código.

#### Ejemplo:

```javascript
// Creación de un WeakMap y asignación de valores a objetos
const miWeakMap = new WeakMap();

const obj1 = { nombre: "Objeto 1" };
const obj2 = { nombre: "Objeto 2" };

miWeakMap.set(obj1, "Valor para Objeto 1");
miWeakMap.set(obj2, "Valor para Objeto 2");

console.log(miWeakMap); // Salida: WeakMap { [items unknown] }

// Recuperar valores por clave
const valor1 = miWeakMap.get(obj1);
const valor2 = miWeakMap.get(obj2);

console.log(valor1); // Salida: Valor para Objeto 1
console.log(valor2); // Salida: Valor para Objeto 2

// Verificar la existencia de claves en el WeakMap
console.log(miWeakMap.has(obj1)); // Salida: true
console.log(miWeakMap.has({ nombre: "Objeto 1" })); // Salida: false (no es la misma referencia)

// Eliminar una entrada por clave
miWeakMap.delete(obj2);
console.log(miWeakMap); // Salida: WeakMap { [items unknown] }
```

Este ejemplo muestra cómo crear un `WeakMap`, asignar valores a objetos, recuperar valores por clave, verificar la existencia de claves y eliminar entradas específicas. Los objetos en un `WeakMap` pueden ser eliminados por el recolector de basura si ya no tienen referencias fuertes en tu código.

<br>

### Iterables e Iteradores en JavaScript y Generadores

En JavaScript, los iterables, iteradores y generadores son conceptos que nos permiten trabajar con secuencias de datos de manera efectiva. Aquí tienes una descripción general de su uso con ejemplos:

#### Iterables e Iteradores:

- **Iterables**: Son objetos que tienen un método `Symbol.iterator` que devuelve un objeto iterador. Los iterables pueden ser recorridos con un bucle `for...of`.

- **Iteradores**: Son objetos que implementan el método `next()`, que devuelve un objeto con dos propiedades: `value` (el valor actual) y `done` (un indicador de finalización).

**Ejemplo**:

```javascript
// Creamos un arreglo llamado 'iterable' con números del 1 al 5.
const iterable = [1, 2, 3, 4, 5];

// Accedemos al iterador del iterable.
const iterador = iterable[Symbol.iterator]();

console.warn("Recorremos el iterable con el iterador:");

// Obtenemos el primer elemento del iterable y su estado de finalización.
let next = iterador.next();

while (!next.done) { // Iniciamos un bucle mientras haya elementos en el iterable.
  // Imprimimos el valor actual del elemento del iterable.
  console.log(next.value);

  // Obtenemos el siguiente elemento del iterable y su estado de finalización.
  next = iterador.next();
}
```

Este ejemplo muestra cómo crear un iterable a partir de un arreglo y cómo acceder a su iterador. Luego, recorremos el iterable utilizando el iterador y mostramos los valores en la consola.

#### Generadores:

Los generadores son una característica poderosa que permite crear secuencias de datos de manera eficiente. Facilitan la manipulación y recorrido de estos datos de forma controlada.

##### Ejemplo 1: Generador Simple

```javascript
// Definimos una función generadora llamada 'iterable'
function* iterable() {
  // 'yield' pausa la ejecución y devuelve el valor "hola"
  yield "hola";
  console.log("Hola consola"); // Se muestra en la consola

  yield "hola 2";
  console.log("Seguimos con más instrucciones de código"); // Se muestra en la consola

  yield "hola 3";

  yield "hola 4";
}

// Creamos un iterador a partir de la función generadora
let iterador = iterable();

// Utilizamos un bucle 'for...of' para iterar a través del generador
for (let y of iterador) {
  console.log(y); // Muestra los valores en la consola
}

// Creamos un array 'arr' a partir de los valores generados por la función generadora
const arr = [...iterable()];
console.log(arr); // Muestra el array en la consola
```

##### Ejemplo 2: Generador con Función Asíncrona

```javascript
function cuadrado(valor) {
  setTimeout(() => {
    return console.log({ valor, resultado: valor * valor });
  }, Math.random() * 1000);
}

function* generador() {
  console.warn("Inicio Generator");
  yield cuadrado(0);
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  yield cuadrado(5);
  console.warn("Fin Generator");
}

let gen = generador();

for (let y of gen) {
  console.log(y);
}
```

Estos ejemplos muestran cómo utilizar generadores en conjunto con funciones asíncronas. El generador controla la ejecución secuencial de tareas asíncronas, lo que permite manejarlas de manera legible y controlada.

Los generadores, iterables e iteradores son fundamentales para el manejo de secuencias y tareas asíncronas en JavaScript, lo que facilita la escritura de código más eficiente y legible.

<br>

### Proxies en JavaScript

Los proxies en JavaScript son objetos que permiten controlar y personalizar el comportamiento de otros objetos. Se utilizan para interceptar y modificar operaciones en un objeto objetivo, como la lectura, escritura y eliminación de propiedades. Aquí tienes una descripción general de su uso con un ejemplo:

```javascript
// Definimos un objeto 'persona' con propiedades nombre, apellido y edad
const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

// Creamos un manejador para el objeto persona usando Proxy
const manejador = {
  set(obj, prop, valor) {
    // Verificamos si la propiedad existe en el objeto persona
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(
        `La propiedad ${prop} no existe en el objeto persona.`
      );
    }

    // Validamos que las propiedades nombre y apellido solo contengan letras y espacios
    if (
      (prop === "nombre" || prop === "apellido") &&
      !/^[A-Za-zÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor)
    ) {
      return console.error(
        `La propiedad ${prop} sólo acepta letras y espacios en blanco.`
      );
    }

    obj[prop] = valor; // Asignamos el valor a la propiedad del objeto
  },
};

// Creamos un objeto 'bisbal' que es un Proxy de 'persona' con el manejador personalizado
const bisbal = new Proxy(persona, manejador);

// Asignamos valores a las propiedades de 'bisbal'
bisbal.nombre = "David123"; // Error de validación
bisbal.apellido = "Bisbal";
bisbal.edad = 40;
bisbal.twitter = "@bisbal"; // Error, la propiedad no existe en 'persona'

console.log(bisbal); // Muestra 'bisbal' con las modificaciones
console.log(persona); // Muestra 'persona' sin cambios
```

Este ejemplo demuestra cómo utilizar un proxy para controlar las operaciones de escritura en un objeto `persona`. El manejador personalizado `manejador` intercepta y valida las asignaciones de propiedades, garantizando que se cumplan ciertas condiciones. Los proxies son útiles para implementar lógica de seguridad, validación y control de acceso en objetos JavaScript, lo que permite un manejo más seguro y personalizado de los datos.

<br>

### Propiedades dinámicas de los objetos
En JavaScript, las propiedades dinámicas permiten la creación y modificación de propiedades de objetos de manera flexible y dinámica. A continuación, se muestra un ejemplo que ilustra cómo trabajar con propiedades dinámicas en objetos:

```javascript
// Genera un número aleatorio entre 0 y 100
let aleatorio = Math.round(Math.random() * 100);

// Crea un objeto 'objUsuarios' con una propiedad dinámica
const objUsuarios = {
  [`id${aleatorio}`]: "Valor aleatorio",
};
console.log(objUsuarios);

const usuarios = ["Pirlo", "Gatusso", "Shevchenko", "Kaká"];

// Agrega dinámicamente propiedades al objeto 'objUsuarios' a partir del arreglo 'usuarios'
usuarios.forEach(
  (usuario, index) => (objUsuarios[`id${index}`] = usuario)
);

console.log(objUsuarios);
```

Las propiedades dinámicas son útiles cuando necesitas agregar o manipular propiedades de objetos de manera dinámica, como cuando trabajas con datos variables o generados aleatoriamente. Este enfoque proporciona flexibilidad en la estructura de tus objetos y es comúnmente utilizado en situaciones donde las propiedades no son conocidas de antemano.

<br>

