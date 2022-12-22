var storedColors = JSON.parse(localStorage.getItem("colors"));
document.getElementById('bg').style.background = "linear-gradient(-200deg, " + storedColors[0]+ " 18%, " + storedColors[1]+" 48%, "+ storedColors[2]+ " 59%, " + storedColors[3] + " 100%)";


var storedPosterName1 = JSON.parse(localStorage.getItem("posterName1"));
console.log(storedPosterName1)
document.getElementById('movieTitle').innerHTML = storedPosterName1

var storedPosterYear = JSON.parse(localStorage.getItem("posterYear"));
console.log(storedPosterYear)
document.getElementById('movieYear').innerHTML = storedPosterYear