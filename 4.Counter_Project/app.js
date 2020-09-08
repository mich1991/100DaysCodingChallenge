const counter = document.querySelector('#counter')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')

minus.addEventListener('click', () => {
    counter.innerText -= 1
})

plus.addEventListener('click', () => {
    counter.innerText = +counter.innerText + 1
})