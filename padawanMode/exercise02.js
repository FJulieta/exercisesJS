//1- Make a function that counts the number of characters in a text
//2- Make a function that returns the text trimmed according to the number of characteres indicated
//3- Make a function that, given a string, returns an array of texts separated by a certain character, for example --> miFunction("Hello how are you", " ")will return ["Hello","how","are","you"]

//Count the number of characters in a text string:
function countCharacters(string) {
    if (typeof string === 'string') {
      return string.length;
    } else {
      return 'please enter a string valid'
    }
  }
  
  console.log(countCharacters("Hello there!"))

//Return the text trimmed according to the number of characters indicated:
function cutText(string, long) {
    if (typeof string === 'string' && typeof long === 'number' && long > 0) {
      return string.slice(0, long);
    } else {
      return 'Please enter a string valid';
    }
  }
  
  console.log(cutText("This is a long string", 8)); // output: "Esta es"
  
  //Return an array of texts separated by a certain character:
  function separateTextByCharacter(string, separator) {
    if (typeof string === 'string' && typeof separator === 'string') {
      return string.split(separator);
    } else {
      return 'Please enter a string and a separator valid.';
    }
  }
  
  console.log(separateTextByCharacter("Hello there!", " ")); // output: ["Hola", "que", "tal"]
  