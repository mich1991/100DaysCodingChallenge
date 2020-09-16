(() => {
    const form = document.querySelector('.form')
    const input = document.querySelector('#inputName')
    const groceryList = document.querySelector('.list-group')


    handleDoneButton = (item) => {
        console.log(item.parentNode.removeChild(item))
    }
    createItem = (value) => {

        const item = document.createElement('li')
        item.classList.add('list-group-item', 'w-75', 'mx-auto', 'd-flex', 'justify-content-between')
        item.innerHTML = `
            <span class="ml-5">${value}.</span>
            <button class="btn btn-sm btn-success rounded-circle mr-5">
            <i class="fas fa-check"></i>
            </button>
            `
        groceryList.appendChild(item)

        // button event in li
        const button = item.querySelector('button')
        button.addEventListener('click', () => handleDoneButton(item))
    }


    form.addEventListener('submit', e => {
        e.preventDefault()
        createItem(input.value)
        input.value = ''
    })
})()