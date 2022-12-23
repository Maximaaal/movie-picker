var storedColors = JSON.parse(localStorage.getItem("colors"));
document.getElementById('bg').style.background = "linear-gradient(-200deg, " + storedColors[0]+ " 0%, " + storedColors[1]+" 100%)"


// var storedPosterName1 = JSON.parse(localStorage.getItem("posterName1"));
// console.log(storedPosterName1)
// document.getElementById('movieTitle').innerHTML = storedPosterName1

// var storedPosterYear = JSON.parse(localStorage.getItem("posterYear"));
// console.log(storedPosterYear)
// document.getElementById('movieYear').innerHTML = storedPosterYear

window.onload = loadInfo()

function loadInfo() {
    var storedResult = JSON.parse(localStorage.getItem("result"))
    var storedTitle = (localStorage.getItem("title"))
    var storedImg = (localStorage.getItem("img"))
    var storedGenre = (localStorage.getItem("genre"))
    console.log(storedResult)
    document.getElementById('movieTitle').innerHTML = storedTitle
    document.getElementById('moviePoster').src = storedImg
    document.getElementById('genre').innerHTML = storedGenre
}