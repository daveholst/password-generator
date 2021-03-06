// Assignment Code
var generateBtn = document.querySelector("#generate");
var textArea = document.querySelector('#password');
var criteriaBtn = document.querySelector('#criteria')
//Password class constructor -- not sure about the initialization of this.password?
class Password{
  constructor(length, useLower, useUpper, useNumbers, useSpecials){
    this.passwordLength = length;
    this.useLower = useLower;
    this.useUpper = useUpper;
    this.useNumbers = useNumbers;
    this.useSpecials = useSpecials;
    this.lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    this.upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.numberChars = '0123456789';
    this.specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    this.password = this.generate();
  }
  generate() {
    // generate charset off object properties
    let charSet = '';
    let generatedPassword = '';
    charSet += this.useLower ? this.lowerCaseChars : '';
    charSet += this.useUpper ? this.upperCaseChars : '';
    charSet += this.useNumbers ? this.numberChars : '';
    charSet += this.useSpecials ? this.specialChars : '';
    // generate password with charset & legth
    for (let i = 0; i < this.passwordLength; i++) {
      generatedPassword += charSet.charAt(Math.floor(Math.random() * charSet.length))
    }
    // assign password and return
    this.password = generatedPassword;
    return this.password;
  }
}
// Write password to the #password input -- added destructing
function writePassword() {
  const passCriteria = { raw: {}, validated: {} };
  const {raw, validated} = passCriteria
  // Collect password length.
  raw.passLength = parseInt(prompt('How long would you like password to be? (8 - 128)', 10));
  if (raw.passLength < 8 || raw.passLength > 128) {
    alert('Length must be between 8 - 128. ');
    writePassword();
  }
  validated.passLength = raw.passLength;
  //Collect case information
  raw.useCase = prompt('Did you want to use lowercase, uppercase or both?. You must choose at least one option!', 'both');
  validated.useLower = raw.useCase.match(/(low)/gi) ? true : false;
  validated.useUpper = raw.useCase.match(/(up)/gi) ? true : false;
  if (raw.useCase.match(/(both)/gi)) {
    validated.useLower = true;
    validated.useUpper = true;
  }
  //alert if both false (must beither upper or lower)
  if (!validated.useLower && !validated.useUpper) {
    alert('You have to choose at least one option!!!');
    writePassword();
  }
  //Collect number & Special information
  raw.useNumSpecial = prompt('Do you want to use numbers, symbols, both or none?', 'both');
  validated.useNumber = raw.useNumSpecial.match(/(num)/gi) ? true : false;
  validated.useSpecial = raw.useNumSpecial.match(/(sym)/gi) ? true : false;
  if (raw.useNumSpecial.match(/(both)/gi)) {
    validated.useNumber = true;
    validated.useSpecial = true;
  }
  if (raw.useNumSpecial.match(/(none)/gi)) {
    validated.useNumber = false;
    validated.useSpecial = false;
  }
  //logout object raw & validated
  console.log(passCriteria);
  //Generate Password -- added destructing
  const { passLength, useLower, useUpper, useNumber, useSpecial } = validated;
  myPass = new Password(passLength, useLower, useUpper, useNumber, useSpecial)
  //write password to textArea
  textArea.value = myPass.password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  if (!textArea.value) {
    writePassword();
  } else {
    textArea.value = myPass.generate();
  }
});
// Add event listener to criteria button
criteriaBtn.addEventListener("click", () => {
  writePassword()
});