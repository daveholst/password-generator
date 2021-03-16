// Assignment Code
let generateBtn = document.querySelector("#generate");
let lengthInput = document.querySelector('#password-length')

// Write password to the #password input
function generatePassword() {
  let passwordLength = lengthInput.value;
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

// Add event listener to range length change that updates
lengthInput.addEventListener("change", () => {
  currentSelectedLength = lengthInput.value
  generateBtn.innerText = `Generate Password [${currentSelectedLength}]`;
})