const { findMostCommonCities } = require('./exercise01.js')


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

  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

  findMostCommonCities(citiesList);

  expect(consoleSpy).toHaveBeenCalledWith('madrid: 4 times');
  expect(consoleSpy).toHaveBeenCalledWith('barcelona: 3 times');
  expect(consoleSpy).toHaveBeenCalledWith('nashville: 3 times');
  expect(consoleSpy).toHaveBeenCalledWith('los angeles: 2 times');
  expect(consoleSpy).toHaveBeenCalledWith('memphis: 1 times');

  consoleSpy.mockRestore();
});
