//to combine a message with a variable use concatenation
// given var a= "one" var b=2 var c=3 a + b + c= "one23"
// if else
//tenary operator

var generateBtn = document.querySelector("#generate");
var length=[]
//string.protoptype.concat() combines text of 2+ strings and returns new
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase="abcdefghijklmnopqrstuvwxyz"
var number="0123456789"
var symbol="   "

//using true or falsy to include in the custom array created by user when selecting 
//what to include in password
var upperCase= true
password += upperCase[Math.floor(Math.random() * upperCase.length)];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  //generate is where the concatenation of selected characters would occur, I guess?

  var passwordText = document.querySelector("#password");
//alternate        = document.getElementById("password")

  //to select all elements in a class named "example"
  //documents.querySelectorAll(".example")

  var allChars= lowerCase + upperCase + number + symbol;
  passwordText.value = password; 
} 

function generatePassword() {
  let password = "";
//if-else conditions to indicate user selections, then combine all truthy results
//if(upperCase)truthy, {}
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
//if(lowerCase)truthy, {}
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
//if(number)truthy, {}
    password += number[Math.floor(Math.random() * number.length)];
//if(symbol)truthy, {}
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while (length > password.length){
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

window.prompt ("Please enter text here")

//window.alert and window.prompt to retieve values from user for loop
//window prompt: broswer displays dialog with optional message