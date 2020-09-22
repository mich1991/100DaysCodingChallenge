const inputWeight = document.querySelector('#weight')
const selectMeasure = document.querySelector('#selectMeasure')
const submit = document.querySelector('#submit')
const weightAmount = document.querySelector('#weightAmount')
const weightConverted = document.querySelector('#weightConverted')
const output = document.querySelector('.output')


converter = (measureSystem) => {
    switch (measureSystem) {
        case 'kg':
            return (inputWeight.value * 2.20462262).toFixed(2)
        case 'pounds':
            return (inputWeight.value / 2.20462262).toFixed(2)
        default:
            console.log('something went wrong')
            break;
    }
}

secondMeasureSystem = (selected) => {
    const optionsArray = Array.from(selectMeasure.options)
    const filteredArray = optionsArray.filter(arr => arr.value !== selected)
    const secondMeasure = filteredArray[0].value
    return secondMeasure
}



displayResults = (input, converted) => {
    weightAmount.textContent = input + selectMeasure.value
    weightConverted.textContent = converted + secondMeasureSystem(selectMeasure.value)
    output.classList.remove('d-none')
}


submit.addEventListener('click', e => {
    e.preventDefault()
    const convertedWeight = converter(selectMeasure.value)
    displayResults(inputWeight.value, convertedWeight)
})