const left = document.querySelector('#left')
const right = document.querySelector('#right')
const slider = document.querySelector('.slider')
let currentIndex = 0
const images = [
    'contBcg-0',
    'contBcg-1',
    'contBcg-2',
    'contBcg-3',
    'contBcg-4',
]

slider.style.backgroundImage = `url(img/${images[currentIndex]}.jpeg)`

left.addEventListener('click', () => {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = images.length - 1
    }
    slider.style.backgroundImage = `url(img/${images[currentIndex]}.jpeg)`
})
right.addEventListener('click', () => {
    currentIndex++
    if (currentIndex > (images.length - 1)) {
        currentIndex = 0
    }
    slider.style.backgroundImage = `url(img/${images[currentIndex]}.jpeg)`
})