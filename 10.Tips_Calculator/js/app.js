(() => {
    const form = document.querySelector('#tip-form')
    const bill = document.querySelector('#input-bill')
    const users = document.querySelector('#input-users')
    const serviceRate = document.querySelector('#input-service')
    const feedback = document.querySelector('.feedback')
    const tipAmount = document.querySelector('#tip-amount')
    const totalAmount = document.querySelector('#total-amount')
    const perPerson = document.querySelector('#person-amount')
    const results = document.querySelector('.results')

    function inValid() {

        if (bill.value <= 0) {
            feedback.classList.add('showItem', 'alert-danger')
            feedback.innerHTML += `<p> Bill value cannot be lower than or equal to 0 </p>`
        }
        if (users.value <= 0) {
            feedback.classList.add('showItem', 'alert-danger')
            feedback.innerHTML += `<p> Number of people cannot be lower than or equal to 0 </p>`
        }
        if (serviceRate.value <= 0) {
            feedback.classList.add('showItem', 'alert-danger')
            feedback.innerHTML += `<p> You have to choose your service rate </p>`
        }
        if (serviceRate <= 0 || users.value <= 0 || bill.value <= 0) {
            setTimeout(clearFeedback, 3000)
            return true
        } else {
            return false
        }
    }

    clearFeedback = () => {
        feedback.classList.remove('showItem', 'alert-danger')
        feedback.innerHTML = ``
    }

    clearResult = () => {
        results.classList.remove('showItem')
        tipAmount.innerHTML = ''
        totalAmount.innerHTML = ''
        perPerson.innerHTML = ''
    }

    form.addEventListener('submit', e => {
        e.preventDefault()
        if (inValid() === false) {
            const tip = bill.value * serviceRate.value

            results.classList.add('showItem')
            tipAmount.innerText = tip.toFixed(2)
            totalAmount.innerHTML = (+tip + +bill.value).toFixed(2)
            perPerson.innerHTML = ((+tip + +bill.value) / users.value).toFixed(2)
            setTimeout(clearResult, 5000)
        }
    })


})()
