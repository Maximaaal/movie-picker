var storedColors = JSON.parse(localStorage.getItem("colors"));
document.getElementById('bg').style.background = "linear-gradient(-200deg, " + storedColors[0]+ " 0%, " + storedColors[1]+" 100%)"

function put_object(obj){
    var finishedLoading = obj.get("loadingStatus")
    if (finishedLoading == 1){
        console.log("finished loading")
        showResults()
    }
}

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

