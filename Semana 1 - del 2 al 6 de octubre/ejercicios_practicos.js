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

      function contarCaracteres(cadena, recorte) {
        if (typeof cadena !== "string") {
          console.error(`¡Debes introducir una cadena!`);
        } else {
          cadena = cadena.slice(0, recorte);
          console.log(`-> ${cadena}`);
        }
      }

      contarCaracteres("Hola mundo", 4);



      /*
       * Programa una función que dada un String te devuelva un Array de textos separados por cierto caracter
       * Pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
       */

      function contarCaracteres(cadena, separacion) {
        if (typeof cadena !== "string") {
          console.error(`¡Debes introducir una cadena!`);
        } else {
          const arrayTexto = cadena.split(separacion);
          console.log(arrayTexto);
        }
      }

      contarCaracteres(
        "Hola mundo, esto es una cadena convertida en array",
        " "
      );



