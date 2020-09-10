

const filters = document.querySelectorAll('[data-filter]')
const items = document.querySelectorAll('[data-item]')
const searchForm = document.querySelector('#search-item')

filters.forEach(filter => {
    let filterValue = filter.attributes['data-filter'].value
    filter.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(filter.attributes['data-filter'])
        displayFiltered(filterValue)
    })
})

function displayFiltered(filterValue) {

    items.forEach(item => {
        console.log(item.attributes['data-item'].value)
        if (filterValue === 'all') {
            item.style.display = 'block'
        }
        else if (item.attributes['data-item'].value === filterValue) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}

searchForm.addEventListener('input', (e) => {
    let value = e.target.value.toLowerCase().trim()

    items.forEach(item => {
        item.innerHTML.includes(value) ? item.style.display = 'block' : item.style.display = 'none'
    })


})


