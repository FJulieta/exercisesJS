//Create a function that reads two words and determines whether they are anagrams of each other.

function isAnagram(word1, word2) {
    // Eliminar espacios en blanco y convertir las palabras a minúsculas
    word1 = word1.replace(/\s/g, "").toLowerCase();
    word2 = word2.replace(/\s/g, "").toLowerCase();
    
    // Verificar si las palabras son idénticas
    if (word1 === word2) {
      return false;
    }
    
    // Verificar si las palabras tienen la misma longitud
    if (word1.length !== word2.length) {
      return false;
    }
    
    // Convertir las palabras en arreglos de caracteres
    const arreglo1 = word1.split("");
    const arreglo2 = word2.split("");
    
    // Contar la frecuencia de cada letra en ambas palabras
    const frecuencia1 = {};
    const frecuencia2 = {};
    
    for (let letra of arreglo1) {
      frecuencia1[letra] = (frecuencia1[letra] || 0) + 1;
    }
    
    for (let letra of arreglo2) {
      frecuencia2[letra] = (frecuencia2[letra] || 0) + 1;
    }
    
    // Comparar las frecuencias de las letras
    for (let letra in frecuencia1) {
      if (frecuencia1[letra] !== frecuencia2[letra]) {
        return false;
      }
    }
    
    return true;
  }
  
  // Ejemplos de uso
  console.log(isAnagram("amor", "roma"));  // true
  console.log(isAnagram("rota", "otra"));  // true
  console.log(isAnagram("otra", "otra"));  // false
  console.log(isAnagram("pescado", "calamardo")); //false
  console.log(isAnagram("poder", "pedro")); //true

  