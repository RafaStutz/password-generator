const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const form = document.getElementById('passwordGeneratorForm')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')

const syncCharacterAmount = (e) => {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
} 

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
})

characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)