//1- Programa una funcion que cuente la cantidad de caracteres en una cadena de texto
//2- Programa una funcion que te devuelva el texto recortado según el número de caracteres indicados
//3- Programa una funcion que dada una string te devuelva un array de textos separados por cierto caracter, por ejemplo --> miFuncion("hola que tal", " ") devolverá ["hola","que ", "tal"]


//Contar la cantidad de caracteres en una cadena de texto:
function contarCaracteres(cadena) {
    if (typeof cadena === 'string') {
      return cadena.length;
    } else {
      return 'Por favor, ingresa una cadena de texto válida.';
    }
  }
  
  console.log(contarCaracteres("Hola, mundo")); // output: 11

//Devolver el texto recortado según el número de caracteres indicados:
function recortarTexto(cadena, longitud) {
    if (typeof cadena === 'string' && typeof longitud === 'number' && longitud > 0) {
      return cadena.slice(0, longitud);
    } else {
      return 'Por favor, ingresa una cadena de texto válida y una longitud positiva.';
    }
  }
  
  console.log(recortarTexto("Esta es una cadena larga", 8)); // output: "Esta es"
  
  //Devolver un array de textos separados por cierto caracter:
  function separarTextoPorCaracter(cadena, separador) {
    if (typeof cadena === 'string' && typeof separador === 'string') {
      return cadena.split(separador);
    } else {
      return 'Por favor, ingresa una cadena de texto y un caracter separador válidos.';
    }
  }
  
  console.log(separarTextoPorCaracter("Hola que tal", " ")); // output: ["Hola", "que", "tal"]
  