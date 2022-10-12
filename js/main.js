const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')

const syncCharacterAmount = (e) => {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
} 

characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)