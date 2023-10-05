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



      /*
       * Programa una función que calcule el factorial de un número
       * (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n)
       * Pe. miFuncion(5) devolverá 120.
       */

      const calcFactorial = (numero) => {
          if (numero <= 0) return "¡Debes introducir un número mayor que 0!";
          if (isNaN(numero)) return "¡Debes introducir un número!";

          let cadenaNumeros = "";
          let factorial = 1;

          for (cont = 1; cont <= numero; cont++) {
            cadenaNumeros += " * " + cont;
            factorial *= cont;
          }

          cadenaNumeros = cadenaNumeros.slice(3)

          return `El factorial de ${numero} es igual a ${factorial} (${cadenaNumeros})`
      };

      console.log(calcFactorial("Hola"));



      /*
       * Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no
       * Pe. miFuncion(7) devolverá true.
       */

      const esPrimo = (numero) => {
          if (numero <= 0) return "¡Debes introducir un número mayor que 0!";
          if (isNaN(numero)) return "¡Debes introducir un número!";

          let bandera = true;
          const mitad = Math.floor(numero/2);
          let divisible = 0;

          for (cont = 2 ; cont <= mitad; cont++) {
            if (numero%cont === 0) bandera = false, divisible = cont;
          }

          if (bandera) return `El número ${numero} es primo`
          if (bandera === false) return `El número ${numero} NO es primo (es divisible entre ${divisible})`
      };

      console.log(esPrimo(57));



      /*
       * Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no
       * Pe. miFuncion(7) devolverá true.
       */

      const esPrimo = (numero) => {
          if (numero <= 0) return "¡Debes introducir un número mayor que 0!";
          if (isNaN(numero)) return "¡Debes introducir un número!";

          let bandera = true;
          const mitad = Math.floor(numero/2);
          let divisible = 0;

          for (cont = 2 ; cont <= mitad; cont++) {
            if (numero%cont === 0) bandera = false, divisible = cont;
          }

          if (bandera) return `El número ${numero} es primo`
          if (bandera === false) return `El número ${numero} NO es primo (es divisible entre ${divisible})`
      };

      console.log(esPrimo(57));



      /*
       * Programa una función que determine si un número es par o impar
       * Pe. miFuncion(29) devolverá Impar.
       */

      const esPar = (numero) => {
        if (numero <= 0) return "¡Debes introducir un número mayor que 0!";
        if (isNaN(numero)) return "¡Debes introducir un número!";

        if (numero % 2 === 0) return `El número ${numero} es par`;
        if (numero % 2 !== 0) return `El número ${numero} es impar`;
      };

      console.log(esPar(58));



      /*
       * Programa una función para convertir grados Celsius a Fahrenheit y viceversa
       * Pe. miFuncion(0,"C") devolverá 32°F.
       */

      const conversorGrados = (numero, grados) => {
        if (isNaN(numero)) return "¡Debes introducir un número!";

        switch (grados) {
          case "F":
            let conversionF = numero - 32;
            return `${numero}º${grados} => ${conversionF}ºC`;
            break;

          case "C":
            let conversionC = numero + 32;
            return `${numero}º${grados} => ${conversionC}ºF`;
            break;

          default:
            console.error("ERROR: Introduce una unidad válida");
            break;
        }
      };

      console.log(conversorGrados("32", "X"));



      /*
       * Programa una función para convertir números de base binaria a decimal y viceversa
       * Pe. miFuncion(100,2) devolverá 4 base 10.
       */

      // Definición de la función conversorBinDec que toma un número y una base como argumentos
      const conversorBinDec = (numero, base) => {
        // Verifica si el número ingresado no es un número válido
        if (isNaN(numero)) return "¡Debes introducir un número!";

        // Inicializa un array para almacenar los cálculos intermedios
        let arrayConversor = [];

        // Convertimos el número a una cadena de texto y dividimos la cadena en un array de caracteres individuales
        let numeroString = numero.toString();
        let arrayNumero = numeroString.split("");

        // Utiliza un switch para determinar la base de origen y realizar la conversión
        switch (base) {
          // Conversión binaria a decimal
          case 2:
            for (let i = arrayNumero.length - 1, j = 0; i >= 0; i--, j++) {
              // Calcula cada dígito multiplicado por la potencia de 2 correspondiente
              arrayConversor[i] = arrayNumero[i] * Math.pow(2, j);
            }

            // Suma los valores del array para obtener el resultado decimal
            let conversionBD = 0;
            for (let i = 0; i < arrayConversor.length; i++)
              conversionBD += arrayConversor[i];

            // Retorna el resultado de la conversión
            return `${numero} en base binaria es igual a ${conversionBD} en base decimal`;
            break;

          // Conversión decimal a binaria
          case 10:
            let cociente = numero,
              restos = [],
              cont = 0;

            // Realiza la división sucesiva por 2 y almacena los restos
            while (cociente != 0) {
              restos[cont] = cociente % 2;
              cont++;

              cociente = Math.floor(cociente / 2);
            }

            // Inicializa la representación binaria con un "0"
            let conversionDB = "0";

            // Concatena los restos en orden inverso para obtener el resultado binario
            for (let i = restos.length - 1; i >= 0; i--)
              conversionDB += restos[i];

            // Elimina el "0" inicial agregado
            conversionDB = conversionDB.slice(1);

            // Retorna el resultado de la conversión
            return `${numero} en base decimal es igual a ${conversionDB} en base binaria`;
            break;

          default:
            // En caso de que la base no sea 2 ni 10, muestra un mensaje de error
            console.error("ERROR: Introduce una base válida");
            break;
        }
      };

      // Ejemplo de uso de la función: convierte el número 13 de base 10 a binaria
      console.log(conversorBinDec(13, 10));



      /*
       * Programa una función que devuelva la cantidad final después de aplicar un descuento a una cantidad dada
       * Pe. miFuncion(1000, 20) devolverá 800.
       */

      const calcDescuentos = (cantidad, porcentaje) => {
        // Verifica si el número ingresado no es un número válido
        if (isNaN(cantidad) || isNaN(porcentaje)) return "¡Debes introducir un número!";

        let descuento = cantidad * (porcentaje / 100);

        let cantidadFinal = cantidad - descuento;

        return `Descontando un ${porcentaje}% a ${cantidad} nos queda ${cantidadFinal}`;
      };

      // Ejemplo de uso de la función: convierte el número 13 de base 10 a binaria
      console.log(calcDescuentos(1000, 50));



      const calcTiempo = (dia, mes, año) => {
        // Verifica si el número ingresado no es un número válido
        if (isNaN(dia) || isNaN(mes) || isNaN(año))
          return "¡Debes introducir un número!";

        let fechaActual = new Date();
        let diaActual = fechaActual.getDate();
        let mesActual = fechaActual.getMonth() + 1; // Meses en JavaScript van de 0 a 11, por lo que sumamos 1.
        let añoActual = fechaActual.getFullYear();

        // Calcula la diferencia en milisegundos entre la fecha proporcionada y la fecha actual
        let diferenciaMilisegundos = fechaActual - new Date(año, mes - 1, dia);

        // Convierte la diferencia de milisegundos a días, meses y años
        let milisegundosEnUnDia = 1000 * 60 * 60 * 24;
        let diferenciaDias = Math.floor(
          diferenciaMilisegundos / milisegundosEnUnDia
        );
        let diferenciaMeses = mesActual - mes + 12 * (añoActual - año);
        let diferenciaAños = Math.floor(diferenciaDias / 365);

        // Calcula el número de días restantes después de calcular los meses y años
        let diasRestantes = diferenciaDias - diferenciaAños * 365;

        return `Hay una diferencia de ${diferenciaAños} años, ${diferenciaMeses} meses y ${diasRestantes} días.`;
      };

      // Ejemplo de uso de la función
      console.log(calcTiempo(4, 10, 2023));



      /*
       * Programa una función que invierta las palabras de una cadena de texto
       * Pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
       */

      const invertirCadena = (cadenaOriginal) => {
        let arrayCadena = [], cadenaInvertida = "";
        arrayCadena = cadenaOriginal.split("");

        for (i = arrayCadena.length; i >= 0; i--) {
          cadenaInvertida += arrayCadena[i];
        }

        return cadenaInvertida;
      };

      console.log(invertirCadena("Hola Mundo"));



