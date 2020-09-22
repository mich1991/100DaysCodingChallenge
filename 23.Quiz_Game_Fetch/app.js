const answersButtons = document.querySelectorAll('.answers button')
const question = document.querySelector('.question')
const result = document.querySelector('.result')
const questionAnswer = document.querySelector('.question-answer')

let score = document.querySelector('.score')
let questionsArray = []
let questionNumber = 0
let correctAnswer;

score.textContent = 0
getQuestionsList = async () => {
    await fetch('./questions.json')
        .then(res => res.json())
        .then(data => questionsArray = data.games[Math.floor(Math.random() * data.games.length)].questions)
}



gameStart = async () => {
    await getQuestionsList()
    firstRound()
}

nextRound = () => {
    correctAnswer = questionsArray[questionNumber].correct

    answersButtons.forEach((button, index) => {
        button.textContent = questionsArray[questionNumber].content[index]
    })
}


firstRound = () => {
    question.textContent = questionsArray[questionNumber].question
    correctAnswer = questionsArray[questionNumber].correct

    answersButtons.forEach((button, index) => {
        button.textContent = questionsArray[questionNumber].content[index]

        button.addEventListener('click', e => {
            if (correctAnswer === Number(e.target.value)) {
                score.textContent === '0' ? score.textContent = 100 : score.textContent *= 5
                questionNumber += 1
                result.textContent = 'Correct!'
                result.classList.add('text-success')
                result.classList.remove('text-danger')
                result.parentNode.classList.remove('d-none')
                result.nextElementSibling.classList.add('d-none')
                setTimeout(() => result.parentNode.classList.add('d-none'), 3000)

                nextRound()
            } else {
                questionAnswer.children[0].textContent = questionsArray[questionNumber].content[correctAnswer]
                result.textContent = 'You lose!'
                result.classList.add('text-danger')
                result.classList.remove('text-success')
                result.nextElementSibling.classList.remove('d-none')
                result.parentNode.classList.remove('d-none')
                setTimeout(() => result.parentNode.classList.add('d-none'), 3000)
            }
        })
    })
}

gameStart()