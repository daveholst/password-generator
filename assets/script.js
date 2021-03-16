// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(length, lower, upper, numbers, special) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  let lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  let upperCaseChars = lowerCaseChars.toUpperCase();
  let numberChars = '0123456789'
  let specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

  passwordText.value = password;
}
//Password class constructor
class Password{
  constructor(length, useLower, useUpper, useNumbers, useSpecials){
    this.passwordLength = length;
    this.useLower = useLower ? useLower : true;
    this.useUpper = useUpper ? useUpper: true;
    this.useNumbers = useNumbers ? useNumbers: true;
    this.useSpecials = useSpecials ? useSpecials: true;
    this.lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    this.upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.numberChars = '0123456789';
    this.specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    this.password = this.generate();
  }
  generate() {
    // generate charSet off arguments (true by default)
    let charSet = '';
    let generatedPassword = '';
    charSet += this.useLower ? this.lowerCaseChars : '';
    charSet += this.useUpper ? this.lowerCaseChars : '';
    charSet += this.useNumbers ? this.numberChars : '';
    charSet += this.useSpecials ? this.specialChars : '';

    for (let i = 0; i < this.passwordLength; i++) {
      generatedPassword += charSet.charAt(Math.floor(Math.random() * charSet.length))
    }
    this.password = generatedPassword;
    return this.password;
  }
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

