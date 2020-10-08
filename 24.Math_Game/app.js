const submit = document.querySelector('#submit')
const firstNumber = document.querySelector('#firstNumber')
const operator = document.querySelector('#operator')
const secondNumber = document.querySelector('#secondNumber')
const answer = document.querySelector('#answer')

const result = document.querySelector('.result')
const questionAnswer = document.querySelector('.question-answer')

const score = document.querySelector('.score')
const time = document.querySelector('.time')
const highScore = document.querySelector('.highScore')


let correctAnswer;

const possibleOperators = ['+', '-', '*', '/']

score.textContent = 0
highScore.textContent = 0

gameTimer = (time) => {
    let tick = Number(time.textContent)
    let clock = setInterval(() => {
        tick--
        time.textContent = tick
        if (tick <= 0) {
            console.log('game over')
            youLose(correctAnswer)
            clearInterval(clock)
        }
    }, 1000)
}

gameTimer(time)

reRollNumbers = (range) => {
    firstNumber.textContent = Math.floor(Math.random() * range)
    secondNumber.textContent = Math.floor(Math.random() * range)
}

reRollOperator = () => {
    operator.textContent = possibleOperators[Math.floor(Math.random() * possibleOperators.length)]
    console.log(possibleOperators)
}

acceptableDivider = (range) => {
    let first = firstNumber.textContent = Math.floor(Math.random() * range)
    let secondPossibilities = []
    for (let i = 2; i < Number(first); i++) {
        if (+first % i === 0) {
            secondPossibilities.push(i)
        }
    }
    if (secondPossibilities.length === 0) {
        return acceptableDivider(range)
    }
    let second = secondPossibilities[Math.floor(Math.random() * secondPossibilities.length)]
    secondNumber.textContent = second

}

mathTask = (first, operant, second) => {
    switch (operant) {
        case '+':
            reRollNumbers(200)
            return +first + +second
        case '-':
            reRollNumbers(200)
            if (+first - +second < 0) {
                reRollNumbers(200)
                console.log('minus rerolled')
            }
            return +first - +second
        case '*':
            reRollNumbers(20)
            return +first * +second
        case '/':
            acceptableDivider(100)
            return +first / +second
        default:
            console.log('something went wrong')
            break;
    }
}

correctAnswer = mathTask(firstNumber.textContent, operator.textContent, secondNumber.textContent)

youLose = (correctAnswer) => {
    questionAnswer.children[0].textContent = correctAnswer
    result.textContent = 'You lose!'
    result.classList.add('text-danger')
    result.classList.remove('text-success')
    result.nextElementSibling.classList.remove('d-none')
    result.parentNode.classList.remove('d-none')
    setTimeout(() => result.parentNode.classList.add('d-none'), 3000)
}

success = () => {
    score.textContent === '0' ? score.textContent = 100 : score.textContent *= 5
    time.textContent = '20'
    result.textContent = 'Correct!'
    result.classList.add('text-success')
    result.classList.remove('text-danger')
    result.parentNode.classList.remove('d-none')
    result.nextElementSibling.classList.add('d-none')
    setTimeout(() => result.parentNode.classList.add('d-none'), 3000)
}



submit.addEventListener('click', e => {
    e.preventDefault()
    // reRollOperator()
    correctAnswer = mathTask(firstNumber.textContent, operator.textContent, secondNumber.textContent)
    if (correctAnswer === Number(answer.value)) {
        success()
    }
    else {
        youLose(correctAnswer)
    }
    answer.value = ''
})
