(() => {
    const input = document.querySelector('#todoDesc')
    const addButton = document.querySelector('#addTodo')
    const list = document.querySelector('.todoslist')
    const clearList = document.querySelector('.clear-todo-list')

    //    uuid imported from cdn is under uuid variable name.
    let todosArray = []


    // local storage part

    const setLocalStorage = function (array) {
        localStorage.setItem('todoList', JSON.stringify(array));
    }

    const getLocalStorage = function () {

        const todoStorage = localStorage.getItem('todoList');
        if (todoStorage === 'undefined' || todoStorage === null) {
            todosArray = [];
        } else {
            todosArray = JSON.parse(todoStorage);
            displayTodos();
        }
    }


    // get local storage from page
    getLocalStorage();


    class Todo {
        constructor(name) {
            this.id = uuid.v4()
            this.name = name
            this.finished = false
        }

    }

    function createTodo(name) {
        let todo = new Todo(name)
        todosArray.push(todo)
    }

    function isFinished(todo) {
        if (todo.finished === true) {
            return `<h5 class = taskDone>
            ${todo.name} 
            </h5>`
        } else {
            return `<h5>
            ${todo.name} 
            </h5>`
        }
    }

    function displayTodos() {
        todosArray.forEach(todo => {
            createListElement(todo)
        })
    }




    function updateDisplay() {
        list.innerHTML = ''
    }

    function createListElement(todo) {
        let element = document.createElement('li')
        element.classList.add('list-group-item')
        element.setAttribute(`data-id`, `${todo.id}`)
        element.innerHTML = `<div class= 'col-sm-12 d-flex justify-content-between'>
            ${isFinished(todo)}
            <div>
            <button class='finished btn btn-sm btn-success'>Done</button>
            <button class='edit btn btn-sm btn-warning ml-2 '>Edit</button>
            <button class='delete btn btn-sm btn-danger ml-2'>Delete</button>
            </div>
            </div>`
        list.appendChild(element)
        handleButtons(element, todo)
    }

    function handleButtons(element, todo) {

        const finishedButton = element.querySelector('.finished')
        const editButton = element.querySelector('.edit')
        const deleteButton = element.querySelector('.delete')

        finishedButton.addEventListener('click', () => {
            todo.finished = !todo.finished
            setLocalStorage(todosArray)
            updateDisplay()
            displayTodos()
        })

        editButton.addEventListener('click', () => {

            input.value = todo.name
            let todoIndex = todosArray.findIndex(arr => arr.id === todo.id)
            todosArray.splice(todoIndex, 1)
            updateDisplay()
            displayTodos()
        })

        deleteButton.addEventListener('click', () => {
            let todoIndex = todosArray.findIndex(arr => arr.id === todo.id)
            todosArray.splice(todoIndex, 1)
            setLocalStorage(todosArray)
            updateDisplay()
            displayTodos()
        })


    }

    addButton.addEventListener('click', e => {
        e.preventDefault()
        updateDisplay()
        createTodo(input.value)
        displayTodos()
        setLocalStorage(todosArray)
    })

    clearList.addEventListener('click', () => {

        todosArray = []
        setLocalStorage(todosArray)

        updateDisplay()
    })



})()