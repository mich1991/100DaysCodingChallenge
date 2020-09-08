const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const starWars = document.querySelector('#starWars')
const avatar = document.querySelector('#avatar')
const customerName = document.querySelector('#name')
const description = document.querySelector('#description')
const star = document.querySelector('#star')
const starImg = `<img id="star" src="./img/star.svg" alt="*" style="height: 1rem;">`
let customers = []
let currentIndex = 3

class Customer {
    constructor(img, name, stars, desc) {
        this.img = img
        this.name = name
        this.stars = stars
        this.desc = desc
    }
}

function createCustomer(img, name, stars, desc) {
    let fullImg = `./img/boy_${img}.ico`

    let customer = new Customer(fullImg, name, stars, desc)

    customers.push(customer)
}

createCustomer(1, 'Charlie', 4, 'Dissuade ecstatic and properly saw entirely sir why laughter endeavor.')
createCustomer(2, 'Andrew', 3, 'Your it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many')
createCustomer(3, 'Brad', 5, 'Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal')
createCustomer(4, 'Ed', 2, 'Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction.')
createCustomer(5, 'Mark', 1, 'Old there any widow law rooms. Agreed but expect repair she nay sir silent person.')
createCustomer(6, 'Huawei', 5, 'Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight')
createCustomer(7, 'Hope', 4, 'Lorem ipsum blabalabla')


function customerDisplay(img, name, stars, desc) {

    avatar.src = img
    customerName.innerText = name
    starWars.innerHTML = starImg.repeat(stars)
    description.innerText = desc

}
customerDisplay(customers[currentIndex].img, customers[currentIndex].name, customers[currentIndex].stars, customers[currentIndex].desc)

function displayTransformer() {
    customerDisplay(customers[currentIndex].img, customers[currentIndex].name, customers[currentIndex].stars, customers[currentIndex].desc)
}

prev.addEventListener('click', e => {
    e.preventDefault()
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = customers.length - 1
    }
    displayTransformer()

})

next.addEventListener('click', e => {
    e.preventDefault()
    currentIndex++
    if (currentIndex > customers.length - 1) {
        currentIndex = 0
    }
    displayTransformer()
})


