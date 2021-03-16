// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(length = 8) {
  let passwordLength = length;
  let characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let specialCharacterSet = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  let allChar = characterSet + specialCharacterSet;
  let generated = '';

  for (i = 0; i < passwordLength; i++){
    generated += allChar.charAt(Math.floor(Math.random() * allChar.length));
  }
  return generated;
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
