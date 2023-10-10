# Apuntes de JS
Apuntes de los contenidos de JavaScript aprendidos en la empresa durante la formación dual. Archivo personal para anotar los conceptos y demás material de JS.<br><br>

[[TOC]]

<br><br>

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
