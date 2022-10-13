const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')

const syncCharacterAmount = (e) => {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
} 

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
})

characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)