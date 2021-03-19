// Assignment Code
var generateBtn = document.querySelector("#generate");
var textArea = document.querySelector('#password');
var lengthInput = document.querySelector('#password-length')
var lengthHeading = document.querySelector('#length-heading')
  // checkboxes
var uppercaseCheck = document.querySelector('#uppercase')
var lowercaseCheck = document.querySelector('#lowercase')
var specialsCheck = document.querySelector('#symbols')
var numbersCheck = document.querySelector('#numbers')

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
  validated.passLength = lengthInput.value;
  //Collect case information
  if (!lowercaseCheck.checked && !uppercaseCheck.checked) {
    lowercaseCheck.checked = true;
  }
  validated.useLower = lowercaseCheck.checked;
  validated.useUpper = uppercaseCheck.checked;
  validated.useSpecial = specialsCheck.checked;
  validated.useNumber = numbersCheck.checked;
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
    writePassword();
  }
);

 // update password lenfth in UI
lengthInput.addEventListener('input', () => {
  lengthHeading.textContent = `Length - ${lengthInput.value} characters`
})


// Add event listener to criteria button
// criteriaBtn.addEventListener("click", () => {
//   writePassword()
// });