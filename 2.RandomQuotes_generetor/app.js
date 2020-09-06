const quoteText = document.querySelector('#quoteText')
const quoteAuthor = document.querySelector('#quoteAuthor')
const button = document.querySelector('button')
class Quotes {
    constructor() {
        this.text = ''
        this.author = ''
        this.randomQuote = ''
    }
    getQuotesList = async () => {
        let quote = await fetch('./quotes.json').then(res => res.json())
            .then(data => this.randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)])
    }
    makeQuote = async () => {
        await this.getQuotesList()
        this.text = this.randomQuote.quote
        this.author = this.randomQuote.author
        quoteText.innerHTML = this.text
        quoteAuthor.innerHTML = this.author
    }


}

let quote = new Quotes

quote.makeQuote()

button.addEventListener('click', quote.makeQuote)


