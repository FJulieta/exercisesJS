//1- Create an object with a <hello> method that writes "Hello <name> " in the console

//2- How would you make the name inmutable?

/* 3-write a function that logs the 5 cities that occur the most in the array below in order from the most number of ocurrences 
to least. */

const p ={
    name: "Julieta",
    hello: ()=>console.log(`Hello ${p.name}`)
}
p.hello()
Object.freeze(p)
p.name ="Greta"
p.hello()

function findMostCommonCities(cityList) {
    // Crear un objeto para contar las ocurrencias de cada ciudad
    const cityCount = {};
  
    // Contar las ocurrencias de cada ciudad
    for (const city of cityList) {
      if (cityCount[city]) {
        cityCount[city]++;
      } else {
        cityCount[city] = 1;
      }
    }
  
    // Convertir el objeto en un array de pares [ciudad, ocurrencias]
    const cityCountArray = Object.entries(cityCount);
  
    // Ordenar el array en orden descendente de ocurrencias
    cityCountArray.sort((a, b) => b[1] - a[1]);
  
    // Obtener las 5 ciudades más comunes
    const top5Cities = cityCountArray.slice(0, 5);
  
    // Mostrar las 5 ciudades más comunes
    for (const [city, count] of top5Cities) {
      console.log(`${city}: ${count} times`);
    }
  }
  
  const citiesList = [
    "nashville",
    "nashville",
    "los angeles",
    "memphis",
    "barcelona",
    "los angeles",
    "sevilla",
    "madrid",
    "canary islands",
    "barcelona",
    "madrid",
    "nashville",
    "barcelona",
    "madrid",
    "london",
    "madrid",
  ];
  
  findMostCommonCities(citiesList);
  