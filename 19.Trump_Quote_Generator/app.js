const btn = document.querySelector('.btn')
const quote = document.querySelector('.quote')


getQuote = async () => {
    let response = await axios('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
    console.log(response.data.message)
    let quote = response.data.message
    return quote
}



createQuote = async () => {
    quote.textContent = await getQuote()
}

createQuote()

btn.addEventListener('click', createQuote)