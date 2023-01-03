const pickr = Pickr.create({
    el: '.colorBox',
    theme: 'monolith', // or 'monolith', or 'nano'
    default: '#4B74E2',
    
    components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,
        opacity: false,
        // Input / output Options
        interaction: {
            hex: false,
            rgba: false,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: false,
            clear: false,
            save: true
        }
    }
});

const pickr1 = Pickr.create({
    el: '.colorBox1',
    theme: 'monolith', // or 'monolith', or 'nano'
    default: '#DE5457',
    components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,
        opacity: false,
        // Input / output Options
        interaction: {
            hex: false,
            rgba: false,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: false,
            clear: false,
            save: true
        }
    }
});

const colorVals = ['#4B74E2', '#DE5457']
var color1

var check1 = 0
var check2 = 0

var storedColors = JSON.parse(localStorage.getItem("colors"));

pickr.on('init', instance => {
    pickr.setColor(storedColors[0])
})

pickr1.on('init', instance => {
    pickr1.setColor(storedColors[1])
})

pickr.on('save',(color, instance) => {
    const newColor1 =  color.toHEXA().toString()
    const newRGB1 = color.toRGBA().toString()
    console.log(newColor1)
    var n_match1 = ntc.name(newColor1);
    n_name1 = n_match1[1]; // Text string: Color name
    document.getElementById('colorText1').innerHTML = newColor1 + "<br>" + n_match1[1]
    colorVals[0] = newColor1
    check1 = 1
    document.getElementById('bg').style.background = "linear-gradient(-200deg, " + colorVals[0]+ " 0%, " + colorVals[1]+" 90%)"
})

pickr1.on('save',(color, instance) => {
    const newColor2 =  color.toHEXA().toString()
    const newRGB2 = color.toRGBA().toString()
    console.log(newColor2)
    var n_match2 = ntc.name(newColor2);
    n_name2 = n_match2[1]; // Text string: Color name
    document.getElementById('colorText2').innerHTML = newColor2 + "<br>" + n_match2[1]
    colorVals[1] = newColor2
    check2 = 1
    document.getElementById('bg').style.background = "linear-gradient(-200deg, " + colorVals[0]+ " 0%, " + colorVals[1]+" 90%)"
})

document.getElementById('showResults').addEventListener('click', () => {
    console.log(colorVals)
    localStorage.setItem('colors', JSON.stringify(colorVals));
    localStorage.setItem('tolerance', slider.value) 
})


function results() {
    if (check1 == 1 && check2 == 1){
        window.location.assign('results.html');
        return false;
    }
    alert("Please make your color selection before proceeding")
}

document.getElementById('helpButton').addEventListener('click', () => {
    document.getElementById('helpModal').style.display = "block"
    console.log("help")
})

document.getElementById('modalCloseButton').addEventListener('click', () => {
    document.getElementById('helpModal').style.display = "none"
})

function showTolerance(){
    if (document.getElementById('toleranceCheck').checked == true) {
        document.getElementById('toleranceSlider').style.display = 'block'
        document.getElementById('toleranceOutput').style.display = 'block'
        console.log('checked')
    } else {
        document.getElementById('toleranceSlider').style.display = 'none'
        document.getElementById('toleranceOutput').style.display = 'none'
        console.log('unchecked')
    }
}

var slider = document.getElementById("toleranceSlider")
var output = document.getElementById("toleranceOutput")
output.innerHTML = slider.value + "%" 

slider.oninput = function() {
  output.innerHTML = this.value + "%"
}