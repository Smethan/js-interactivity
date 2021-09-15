var message = document.querySelector('#message')
function addMovie(event) {
    event.preventDefault()
    var inputField = document.querySelector('input').value
    var movie = document.createElement("li")
    var movieTitle = document.createElement("span")
    movieTitle.textContent = inputField
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    var deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie)
    document.querySelector('input').value = ''
}
function deleteMovie(event) {
    message.textContent = `${event.target.parentNode.querySelector('span').textContent} deleted!`
    event.target.parentNode.remove()
    revealMessage()
}
function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent }... unwatched?`
    }
    revealMessage()
}
function revealMessage() {
    message.classList.remove('hide')
    setTimeout(() => {message.classList.add('hide')}, 1000)
}
document.querySelector('form').addEventListener("submit", addMovie)