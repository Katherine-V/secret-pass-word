//to combine a message with a variable use concatenation
// given var a= "one" var b=2 var c=3 a + b + c= "one23"
// if else
//tenary operator



var generateBtn = document.querySelector("#generate");
var length=[]
var upperCase="ABCDEFGH"
var lowerCase="abcdefgh"
var number="0123456789"
var symbol="   "



// Write password to the #password input
//function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var allChars= lowerCase + upperCase + number + symbol;
  passwordText.value = password; 
  
  //[Math.floor(Math.random())]
 
  function writePassword() {
  let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while (length > password.length){
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
