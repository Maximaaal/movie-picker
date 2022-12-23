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

// const pickr2 = Pickr.create({
//     el: '.colorBox2',
//     theme: 'monolith', // or 'monolith', or 'nano'
//     default: '#F77D41',
//     components: {
//         // Main components
//         preview: true,
//         opacity: true,
//         hue: true,
//         opacity: false,
//         // Input / output Options
//         interaction: {
//             hex: false,
//             rgba: false,
//             hsla: false,
//             hsva: false,
//             cmyk: false,
//             input: false,
//             clear: false,
//             save: true
//         }
//     }
// });

// const pickr3 = Pickr.create({
//     el: '.colorBox3',
//     theme: 'monolith', // or 'monolith', or 'nano'
//     default: '#089BA3',
//     components: {
//         // Main components
//         preview: true,
//         opacity: true,
//         hue: true,
//         opacity: false,
//         // Input / output Options
//         interaction: {
//             hex: false,
//             rgba: false,
//             hsla: false,
//             hsva: false,
//             cmyk: false,
//             input: false,
//             clear: false,
//             save: true
//         }
//     }
// });


const colorVals = ['#4B74E2', '#DE5457', '#F77D41', '#089BA3']
var color1

var check1 = 0
var check2 = 0
var check3 = 0
var check4 = 0


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
    //localStorage.setItem('color2', newColor2)
})

// pickr2.on('save',(color, instance) => {
//     const newColor3 =  color.toHEXA().toString()
//     const newRGB3 = color.toRGBA().toString()
//     console.log(newColor3)
//     var n_match3 = ntc.name(newColor3);
//     n_name3 = n_match3[1]; // Text string: Color name
//     document.getElementById('colorText3').innerHTML = newColor3 + "<br>" + n_match3[1]
//     colorVals[2] = newColor3
//     check3 = 1
//     document.getElementById('bg').style.background = "linear-gradient(-200deg, " + colorVals[0]+ " 18%, " + colorVals[1]+" 48%, "+ colorVals[2]+ " 59%, " + colorVals[3] + " 100%)"
//     //localStorage.setItem('color3', newColor3)
// })

// pickr3.on('save',(color, instance) => {
//     const newColor4 =  color.toHEXA().toString()
//     const newRGB4 = color.toRGBA().toString()
//     console.log(newColor4)
//     document.getElementById('colorText4').innerHTML = newColor4
//     var n_match4 = ntc.name(newColor4);
//     n_name4 = n_match4[1]; // Text string: Color name
//     document.getElementById('colorText4').innerHTML = newColor4 + "<br>" + n_match4[1]
//     colorVals[3] = newColor4
//     check4 = 1
//     document.getElementById('bg').style.background = "linear-gradient(-200deg, " + colorVals[0]+ " 18%, " + colorVals[1]+" 48%, "+ colorVals[2]+ " 59%, " + colorVals[3] + " 100%)"
//     //localStorage.setItem('color4', newColor4)
    
// })

// when clicking on the showResults button the colorVals array is passed to the results page
document.getElementById('showResults').addEventListener('click', () => {
    console.log(colorVals)
    //alert(colorVals)
    localStorage.setItem('colors', JSON.stringify(colorVals)); 
})


function results() {
    if (check1 == 1 && check2 == 1){
        window.location.assign('results.html');
        return false;
    }
    alert("Please make your color selection before proceeding")
}


