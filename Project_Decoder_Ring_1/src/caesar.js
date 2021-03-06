// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift > 25 || shift < -25 || shift == 0) return false;
    if (encode === false) shift = -shift;

    let output = "";
    let lowerCaseInput = input.toLowerCase();

    for (let i = 0; i < input.length; i++) {
      let temp = lowerCaseInput.charCodeAt(i);
      if (temp >= 97 && temp <= 122) {
        temp += shift;
        temp < 97 ? temp += 26 : null;
        temp > 122 ? temp -= 26 : null;  
      }
      output += String.fromCharCode(temp);
    }
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
