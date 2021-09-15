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
    event.target.parentNode.remove()
    message.textContent = "Movie deleted!"
}
function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains('checked')) {
        message.textContent = "Movie watched!"
    } else {
        message.textContent = "Movie... unwatched?"
    }
}
document.querySelector('form').addEventListener("submit", addMovie)