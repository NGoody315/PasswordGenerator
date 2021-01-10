// Assignment code here
const characterAmountRange= document.getElementById ('characterAmountRange')
const characterAmountNumber = document.getElementById ('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById ('includeSymbols')
const password = document.getElementById('password')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)
).concat(arrayFromLowToHigh(91, 96)
).concat(arrayFromLowToHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

generate.addEventListener ('click', e => {
  e.preventDefault()
const characterAmount = characterAmountNumber.value
const includeUppercase = includeUppercaseElement.checked
const includeNumbers = includeNumbersElement.checked
const includeSymbols = includeSymbolsElement.checked
const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
})

password.addEventListener(
  password.innerText = password, )


function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  console.log(LOWERCASE_CHAR_CODES);

  const passwordCharacters = []
  for (let i = 0; i <characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random()* characterAmount)]
    passwordCharacters.push (String.fromCharCode(characterCode))
  }
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (i= low; i <= high; i++) {
    array.push(i)
  }
  return array
}

//make sliding scale work
function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}