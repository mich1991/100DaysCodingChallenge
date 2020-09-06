const button = document.querySelector('#button')

changeBgc = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(document.body.style.backgroundColor = `#${randomColor}`)

}
button.addEventListener('click', changeBgc)
changeBgc()