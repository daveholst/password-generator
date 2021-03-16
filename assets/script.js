// Assignment Code
let generateBtn = document.querySelector("#generate");
let lengthInput = document.querySelector('#password-length')

// Generate password of desired length
function generatePassword(length) {
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

// Write password to the #password input
function writePassword() {
  let password = generatePassword(lengthInput.value);
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to range length change that updates
lengthInput.addEventListener("change", () => {
  currentSelectedLength = lengthInput.value
  generateBtn.innerText = `Generate Password [${currentSelectedLength}]`;
})