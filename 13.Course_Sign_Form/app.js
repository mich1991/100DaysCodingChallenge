(() => {
    const courseForm = document.querySelector('.courseForm')
    const name = document.querySelector('#name')
    const course = document.querySelector('#course')
    const instructorChoice = document.querySelector('#instructorChoice')
    const display = document.querySelector('.display')



    async function fetchImg() {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        const image = data.results[0].picture['large']
        return image
    }
    fetchImg()

    async function createCard(name, course, instructor) {
        let image = await fetchImg()
        const cardBody = `<div class="col-12 mx-auto col-md-6 col-lg-4 my-3">
        <div class="card text-left">
            <img src="${image}" class="card-img-top" alt="Happy face">
            <div class="card-body">

                <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name </span><span
                        id="customer-name"> ${name}</span></h6>

                <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course </span><span
                        id="customer-course">
                        ${course}
                    </span></h6>

                <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author </span><span
                        id="course-author"> ${instructor}</span></h6>

            </div>
        </div>
    </div>`

        return cardBody
    }



    courseForm.addEventListener('submit', async e => {
        e.preventDefault()
        if (name.value.length > 0) {
            display.innerHTML += await createCard(name.value, course.value, instructorChoice.value)
            name.value = ''
        } else return
    })

})()