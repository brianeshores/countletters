// var object = {};

function countLetters(inputString) {
  var object = {};
  for (i = 0; i < inputString.length; i++) {
    if (!object[inputString[i]]) {
      object[inputString[i]] = 1;
    } else {
      object[inputString[i]] = object[inputString[i]] + 1
    }
  }
  return object;
}

console.log(countLetters("Mississipi"));
