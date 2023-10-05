      /*
       * Programa una función que cuente el número de caracteres de una cadena de texto
       * Pe. miFuncion("Hola Mundo") devolverá 10
       */

      function contarCaracteres(cadena) {
        if (typeof cadena !== "string") {
          console.error(`¡Debes introducir una cadena!`);
        } else {
          console.log(`Hay un total de ${cadena.length} caracteres`);
        }
      }

      contarCaracteres("Hola");



      /*
       * Programa una función que te devuelva el texto recortado según el número de caracteres indicados
       * Pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
       */

      function recortarTexto(cadena, recorte) {
        if (typeof cadena !== "string") {
          console.error(`¡Debes introducir una cadena!`);
        } else {
          cadena = cadena.slice(0, recorte);
          console.log(`-> ${cadena}`);
        }
      }

      recortarTexto("Hola mundo", 4);



      /*
       * Programa una función que dada un String te devuelva un Array de textos separados por cierto caracter
       * Pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
       */

      function stringToArray(cadena, separacion) {
        if (typeof cadena !== "string") {
          console.error(`¡Debes introducir una cadena!`);
        } else {
          const arrayTexto = cadena.split(separacion);
          console.log(arrayTexto);
        }
      }

      stringToArray(
        "Hola mundo, esto es una cadena convertida en array",
        " "
      );



      /*
       * Programa una función que repita un texto X veces
       * Pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
       */

      const repetirTexto = (cadena, repeticion) => {
        if (typeof cadena !== "string") return console.error(`¡Debes introducir una cadena!`);
        if (isNaN(repeticion)) return console.error(`¡Debes introducir un número!`);
        if (repeticion <= 0) return console.error(`¡Debes introducir un número mayor que 0!`);

        for (i = 1; i <= repeticion; i++) console.log(`${i} - ${cadena}`)
      };
    
      repetirTexto("Hola mundo", 3);



      /*
       * Programa una función que obtenga un numero aleatorio entre 501 y 600
       */

      const numAleatorio = () => {return Math.round(Math.random() * (100 - 0)) + 501}

      console.log(numAleatorio());



      /*
       * Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro)
       * Pe. miFuncion(2002) devolverá true
       */

      const esCapicua = (numero) => {
        if (numero < 100) return `Debes introducir un número de más de 2 cifras` 
        
        const stringNumeros = numero.toString();
        const arrayNumeros = stringNumeros.split("");

        // return arrayNumeros;

        const mitad = Math.floor(arrayNumeros.length / 2);
        let inicio = 0, final = (arrayNumeros.length - 1);
        let bandera = true;

        console.log(mitad)

        for (cont = 0; cont < mitad; cont ++, inicio ++, final --) {
          if (arrayNumeros[inicio] !== arrayNumeros[final]) bandera = false;
        }

        if (bandera === true) {
          return `El número ${numero} es capicúa.`
        } else {
          return `El número ${numero} NO es capicúa`
        }
      }

      console.log(esCapicua(10003430001));
