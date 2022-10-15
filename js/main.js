const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const uppercaseCharCodes = arrayOfCharacters(65, 90)
const lowercaseCharCodes = arrayOfCharacters(97, 122)
const numbersCharCodes = arrayOfCharacters(48, 57)
const symbolsCharCodes = arrayOfCharacters(33, 47).concat(
    arrayOfCharacters(58, 64)
).concat(
    arrayOfCharacters(91, 96)
).concat(
    arrayOfCharacters(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})


function generatePassword(characterAmount, includeNumbers, includeUppercase, includeSymbols) {
    let charCodes = lowercaseCharCodes
    if(includeNumbers) charCodes = charCodes.concat(numbersCharCodes)
    if(includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes)
    if(includeSymbols) charCodes = charCodes.concat(symbolsCharCodes)

    const passwordCharacters = []
    for(let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function arrayOfCharacters(start, end) {
    const array = []
    for(let i = start; i <= end; i++) {
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
  }