var storedColors = JSON.parse(localStorage.getItem("colors"));
document.getElementById('bg').style.background = "linear-gradient(-200deg, " + storedColors[0]+ " 18%, " + storedColors[1]+" 48%, "+ storedColors[2]+ " 59%, " + storedColors[3] + " 100%)";

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
    console.log(`output0 = ${pyscript.runtime.globals.get('output0')}`)
    console.log(`output1 = ${pyscript.runtime.globals.get('output1')}`)
    console.log(`output2 = ${pyscript.runtime.globals.get('output2')}`)
    console.log(`output3 = ${pyscript.runtime.globals.get('output3')}`)
    console.log(`output4 = ${pyscript.runtime.globals.get('output4')}`)
    console.log(`output5 = ${pyscript.runtime.globals.get('output5')}`)
    console.log(`output6 = ${pyscript.runtime.globals.get('output6')}`)
    
    document.getElementById('poster0').src = `${pyscript.runtime.globals.get('output0')}`
    document.getElementById('poster1').src = `${pyscript.runtime.globals.get('output1')}`
    document.getElementById('poster2').src = `${pyscript.runtime.globals.get('output2')}`
    document.getElementById('poster3').src = `${pyscript.runtime.globals.get('output3')}`
    document.getElementById('poster4').src = `${pyscript.runtime.globals.get('output4')}`
    document.getElementById('poster5').src = `${pyscript.runtime.globals.get('output5')}`
    document.getElementById('poster6').src = `${pyscript.runtime.globals.get('output6')}`

}

