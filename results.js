var storedColors = JSON.parse(localStorage.getItem("colors"));
document.getElementById('bg').style.background = "linear-gradient(-200deg, " + storedColors[0]+ " 0%, " + storedColors[1]+" 100%)"

var movieName = []
var storedPosterName = []
var retrievedName = []



// function loadInfo() {
//     for (let i = 1; i < 1; i++) {
//         movieName[i] = document.getElementById('poster' + i).getAttribute("data-name")
//         localStorage.setItem('posterName' + i, JSON.stringify(retrievedName[i]))
//         storedPosterName[i] = JSON.parse(localStorage.getItem("posterName" + i));
//         console.log(storedPosterName[i])
//     }
// }


var name1 = document.getElementById('poster1').getAttribute("data-name")
localStorage.setItem('posterName1', JSON.stringify(name1))
var storedPosterName1 = JSON.parse(localStorage.getItem("posterName1"));
console.log(storedPosterName1)

var year = document.getElementById('poster1').getAttribute("data-year")
localStorage.setItem('posterYear', JSON.stringify(year))
var storedPosterYear = JSON.parse(localStorage.getItem("posterYear"));
console.log(storedPosterYear)

function showResults(){
    for (let i = 0; i < 17; i++) {
        console.log(`${pyscript.runtime.globals.get('output' + i)}`)
        document.getElementById('poster' + i).src = `${pyscript.runtime.globals.get('output' + i)}`
        document.getElementById('poster' + i).addEventListener('click', function() {
            localStorage.setItem('result',(i))
            localStorage.setItem('title', `${pyscript.runtime.globals.get('output' + i + 'title')}`)
            localStorage.setItem('img', `${pyscript.runtime.globals.get('output' + i)}`)
            localStorage.setItem('genre', `${pyscript.runtime.globals.get('output' + i + 'genre')}`)
            var storedResult = (localStorage.getItem("result"))
            var storedTitle = (localStorage.getItem("title"))
            var storedImg = (localStorage.getItem("img"))
            var storedGenre = (localStorage.getItem("genre"))
            console.log(storedResult)
            console.log(storedTitle)
            console.log(storedImg)
            console.log(storedGenre)
        })
    }
}

