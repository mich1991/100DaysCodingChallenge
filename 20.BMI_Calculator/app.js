const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const submit = document.querySelector('#submit')
const result = document.querySelector('.result')


calcBMI = (height, weight) => {
    height /= 100
    return (weight / height ** 2).toFixed(2)
}

summary = (bmi) => {

    let output = result.children[1]
    let text = result.children[2]
    output.textContent = bmi

    resultStyle = (className) => {
        text.className = ''
        output.className = ''
        text.classList.add(className)
        output.classList.add(className)
    }

    switch (true) {
        case (+bmi < 18.5):
            text.textContent = 'Eat something skinnybone. Come on...'
            resultStyle('text-warning')
            break;
        case (+bmi >= 18.5 && bmi <= 24.9):
            text.textContent = `that's what I'm talking about babe! keep it up!`
            resultStyle('text-success')

            break;
        case (+bmi >= 25 && bmi <= 29.9):
            text.textContent = `A little bit of walk? Maybe a salad ?`
            resultStyle('text-warning')

            break;
        case (+bmi > 29.9):
            text.textContent = `Put down this burger fattie! I'm serious... Put it down.`
            resultStyle('text-danger')
            break;
        default:
            text.textContent = 'How you doing?'
            break;
    }

    result.classList.remove('d-none')
}



submit.addEventListener('click', e => {
    e.preventDefault()
    let bmi = calcBMI(height.value, weight.value)
    summary(bmi)
    console.log(bmi)

    height.value = ''
    weight.value = ''
})
