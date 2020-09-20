(() => {
    const img = document.querySelector('#img')
    const name = document.querySelector('#name')
    const lastName = document.querySelector('#lastName')
    const location = document.querySelector('#location')
    const phone = document.querySelector('#phone')
    const email = document.querySelector('#email')
    const btn = document.querySelector('.btn')


    class User {
        constructor(img, name, lastName, location, phone, email) {
            this.img = img
            this.name = name
            this.lastName = lastName
            this.location = location
            this.phone = phone
            this.email = email
        }

        appendUser() {
            img.src = this.img
            name.textContent = this.name
            lastName.textContent = this.lastName
            location.textContent = this.location
            phone.textContent = this.phone
            email.textContent = this.email
        }

    }

    createUser = async () => {
        let response = await axios('https://randomuser.me/api/')
        let user = response.data.results[0]
        let newUser = new User(user.picture.large, user.name.first, user.name.last, user.location.city, user.phone, user.email)
        newUser.appendUser()
    }

    createUser()

    btn.addEventListener('click', createUser)

})()