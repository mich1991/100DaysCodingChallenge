(() => {
    const items = document.querySelectorAll('[data-item]')
    const modal = document.querySelector('.my-modal')
    const bgImage = document.querySelector('.my-modal>img')
    const imagesList = document.querySelectorAll('.card-img-top')
    const closeBtn = document.querySelector('#close')
    const nextBtn = document.querySelector('#next')
    const prevBtn = document.querySelector('#prev')

    let imagesArray = []
    imagesList.forEach(image => imagesArray.push(image.attributes['src'].value))

    items.forEach(item => item.addEventListener('click', (e) => {
        modal.style.display = 'block'
        let itemSrc = e.target.attributes['src'].value

        bgImage.attributes['src'].value = itemSrc
    }))

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    nextBtn.addEventListener('click', () => {
        let currentIndex = imagesArray.findIndex((ar) => ar === bgImage.attributes['src'].value)

        currentIndex++
        if (currentIndex > imagesArray.length - 1) {
            currentIndex = 0
        }
        bgImage.attributes['src'].value = imagesArray[currentIndex]
    })

    prevBtn.addEventListener('click', () => {
        let currentIndex = imagesArray.findIndex((ar) => ar === bgImage.attributes['src'].value)

        currentIndex--
        if (currentIndex < 0) {
            currentIndex = imagesArray.length - 1
        }
        bgImage.attributes['src'].value = imagesArray[currentIndex]
    })


})()