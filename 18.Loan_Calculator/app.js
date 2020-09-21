
const feedback = document.querySelector('.feedback')
const loanAmount = document.querySelector('#loanAmount')
const interestRate = document.querySelector('#interestRate')
const monthsPay = document.querySelector('#monthsPay')
const submit = document.querySelector('#submit')
const output = document.querySelector('#output')



calcLoan = (loan, interes, months) => {
    return ((+loan + +(loan * (interes / 100))) / months).toFixed(2)
}

validate = (loan, interes, months) => {

    feedback.innerHTML = ''
    let inValid = false

    if (loan <= 0) {
        feedback.innerHTML += `<p>loan amount cannot be 0 or less </p>`
        inValid = true
    }
    if (interes <= 0) {
        feedback.innerHTML += `<p>interes rate amount cannot be 0 or less </p>`
        inValid = true
    }
    if (months <= 0) {
        feedback.innerHTML += `<p>months to pay amount cannot be 0 or less </p>`
        inValid = true
    }

    if (inValid) {
        feedback.classList.remove('d-none')
        setTimeout(() => feedback.classList.add('d-none'), 4000)
    }
    else {
        feedback.innerHTML = ''
        feedback.classList.add('d-none')
    }

    return !!!inValid
}

submit.addEventListener('click', e => {
    e.preventDefault()
    let valid = validate(loanAmount.value, interestRate.value, monthsPay.value)
    //  if valid calc loan
    if (valid) {
        let calc = calcLoan(loanAmount.value, interestRate.value, monthsPay.value)
        output.textContent = calc + '$'
    }

})



