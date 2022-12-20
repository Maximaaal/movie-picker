document.onload = bgGradient()

function bgGradient () {
    var storedColors = JSON.parse(localStorage.getItem("colors"));
    document.getElementById('bg').style.background = "linear-gradient(-200deg, " + storedColors[0]+ " 18%, " + storedColors[1]+" 48%, "+ storedColors[2]+ " 59%, " + storedColors[3] + " 100%)";
}