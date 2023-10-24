/* 1- Write a function that logs the 5 cities that occur the most in the array below in order from the most number of ocurrences 
to least. */


function findMostCommonCities(cityList) {
    // Create an object to count the ocurrences of each city
    const cityCount = {};
  
    // Count the ocurrences of each city
    for (const city of cityList) {
      if (cityCount[city]) {
        cityCount[city]++;
      } else {
        cityCount[city] = 1;
      }
    }
  
    // Convert the object to an array of [city,ocurrences]pairs
    const cityCountArray = Object.entries(cityCount);
  
    // Sort the array in descending order of ocurrences
    cityCountArray.sort((a, b) => b[1] - a[1]);
  
    // Get the 5 most common cities
    const top5Cities = cityCountArray.slice(0, 5);
  
    // Show the 5 most common cities
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
  module.exports = { findMostCommonCities };

