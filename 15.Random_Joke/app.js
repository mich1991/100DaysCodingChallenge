const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener('click', function () {
    getRandomJoke();
})


onError = () => {
    jokeDIV.textContent = 'There was an error!';
}


getRandomJoke = async () => {
    let joke = await axios('https://api.chucknorris.io/jokes/random')
    if (joke.status === 200 || joke.statusText === 'OK') {
        jokeDIV.textContent = joke.data.value
    } else {
        onError()
    }
}

getRandomJoke()
