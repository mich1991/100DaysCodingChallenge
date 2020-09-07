let submit = document.querySelector('#form')
let button = document.querySelector('button')
let message = document.querySelector('#message')
let output = document.querySelector('#messageOutput')
let error = document.querySelector('#alert')

function validate(message) {
    if (message.value.length > 0) {
        output.innerText = message.value
        message.value = ''
    } else {
        // error.classList.remove('d-none')
        error.classList.remove('d-none')
        setTimeout(() => {
            error.classList.add('d-none')
        }, 3000)
    }
}

submit.addEventListener('submit', (e) => {
    e.preventDefault()
    validate(message)
})



