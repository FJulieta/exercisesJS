const { findMostCommonCities } = require('./exercise01.js')
const p = {
  name: "Julieta",
  hello: () => console.log(`Hello ${p.name}`)
};

test('Test immutability of "name" property', () => {
  Object.freeze(p);

  // Intenta cambiar el valor de "name" después de congelar el objeto
  expect(() => {
    p.name = "Greta";
  }).toThrow();
});

test('Test findMostCommonCities function', () => {
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

  // Capturar la salida de consola para verificarla
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

  findMostCommonCities(citiesList);

  // Verificar si las ciudades más comunes se han registrado en la consola
  expect(consoleSpy).toHaveBeenCalledWith('madrid: 4 times');
  expect(consoleSpy).toHaveBeenCalledWith('barcelona: 3 times');
  expect(consoleSpy).toHaveBeenCalledWith('nashville: 3 times');
  expect(consoleSpy).toHaveBeenCalledWith('los angeles: 2 times');
  expect(consoleSpy).toHaveBeenCalledWith('memphis: 1 times');

  // Restaurar la función console.log original después de las pruebas
  consoleSpy.mockRestore();
});
