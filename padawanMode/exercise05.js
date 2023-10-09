/*You must write a function that finds the frequency with which different characters appear within a text string. 

The result is returned as an array of objects. 

Each of these objects has 2 fields: character (character) and number of times it appears (times). */

function characterFrequency(text) {
    // Crear un objeto para almacenar la frecuencia de caracteres
    const charFrequency = {};
  
    // Recorrer la cadena de texto y contar la frecuencia de cada caracter
    for (const char of text) {
      if (charFrequency[char]) {
        charFrequency[char]++;
      } else {
        charFrequency[char] = 1;
      }
    }
  
    // Convertir el objeto en un array de objetos
    const result = Object.entries(charFrequency).map(([char, veces]) => ({
      caracter: char,
      veces,
    }));
  
    return result;
  }
  
  // Ejemplo de uso:
  const texto = "Hello, World!";
  const resultado = characterFrequency(texto);
  console.log(resultado);
  