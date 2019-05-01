function charPosition(inputString) {
  var position = {};
  for (i = 0; i < inputString.length; i++) {
    if (!position[inputString[i]]) {
      position[inputString[i]] = [i];
    } else {
      position[inputString[i]].push(i);
    }
  }
  return position;
}

console.log(charPosition("Mississipi"));