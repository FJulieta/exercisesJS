//Make a program in which random characters are executed through the console and the limit is 10 thousand characters
// Set the limit to 10,000 characters
const limit = 10000;

// Function to generate a random character
function getRandomCharacter() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
}

// Initialize an empty string to store the characters
let output = '';

// Keep generating random characters until the limit is reached
while (output.length < limit) {
  const randomChar = getRandomCharacter();
  
  // Add the random character to the output string
  output += randomChar;
  
  // Print the random character to the console
  process.stdout.write(randomChar);
}

console.log('\nReached the 10,000 character limit.');
