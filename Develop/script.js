//to combine a message with a variable use concatenation
// given var a= "one" var b=2 var c=3 a + b + c= "one23"
// if else
//tenary operator



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
