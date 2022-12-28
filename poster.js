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
    var storedResult = (localStorage.getItem("result"))
    var storedTitle = (localStorage.getItem("title"))
    var storedImg = (localStorage.getItem("img"))
    var storedGenre = (localStorage.getItem("genre"))
    console.log(localStorage.getItem('storedLoadingStatus'))
    console.log(storedResult)
    console.log(storedTitle)
    console.log(storedImg)
    console.log(storedGenre)
    document.getElementById('movieTitle').innerHTML = storedTitle
    document.getElementById('moviePoster').src = storedImg
    document.getElementById('genre').innerHTML = storedGenre
}