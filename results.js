document.onload = bgGradient()

function bgGradient () {
    var storedColors = JSON.parse(localStorage.getItem("colors"));
    alert(storedColors[0] + " " + storedColors[1] + " " + storedColors[2] + " " + storedColors[3])
    document.getElementById('bg').style.background = "linear-gradient(to right, " + storedColors[0]+ ", " + storedColors[1]+", "+ storedColors[2]+ ", " + storedColors[3] + ")";
    //document.getElementById('currentColor').innerHTML = storedColors[0] + " " + storedColors[1] + " " + storedColors[2] + " " + storedColors[3]
}