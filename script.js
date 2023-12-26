let clbr = 270
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
const weekday = ["रविवार", "सोमवार", "मंगळवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"];
let dayName = weekday[date.getDay()];
// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year} ${dayName}`;
document.getElementById('today').innerHTML = currentDate
document.getElementById('total1').value = 0
document.getElementById('total2').value = 0
document.getElementById('total3').value = 0
document.getElementById('color1').value = 0
document.getElementById('color2').value = 0
document.getElementById('color3').value = 0
document.getElementById('raw1').value = 0
document.getElementById('raw2').value = 0
document.getElementById('raw3').value = 0
function calcraw1() {
    let color1 = document.getElementById('color1').value
    if (color1 == undefined)
        color1 = 0
    document.getElementById('raw1').value = (color1 / .75).toFixed(2)
    calctotal1()
}

function calctotal1() {
    let colorring = 0
    let color1 = document.getElementById('color1').value
    let raw1 = document.getElementById('raw1').value
    let rate1 = document.getElementById('rate1').value
    if (rate1 == undefined)
        rate1 = 0
    if (color1 == undefined || color1 == 0) {
        color1 = 0
        colorring = 0
    }
    else
        colorring = raw1 * clbr
    let total = raw1 * rate1 + colorring
    total = total.toFixed()
    document.getElementById('total1').value = total
    document.getElementById('clbr1').innerHTML = colorring
    calculate()
}

/////////////////////////////////
function calcraw2() {
    let color2 = document.getElementById('color2').value
    if (color2 == undefined)
        color2 = 0
    document.getElementById('raw2').value = (color2 / .75).toFixed(2)
    calctotal1()
}

function calctotal2() {
    let colorring = 0
    let color2 = document.getElementById('color2').value
    let raw2 = document.getElementById('raw2').value
    let rate2 = document.getElementById('rate2').value
    if (rate2 == undefined)
        rate2 = 0
    if (color2 == undefined || color2 == 0) {
        color2 = 0
        colorring = 0
    }
    else
        colorring = raw2 * clbr
    let total = raw2 * rate2 + colorring
    total = total.toFixed()
    document.getElementById('total2').value = total
    document.getElementById('clbr2').innerHTML = colorring
    calculate()
}

/////////////////////////////////
function calcraw3() {
    let color3 = document.getElementById('color3').value
    if (color3 == undefined)
        color3 = 0
    document.getElementById('raw3').value = (color3 / .75).toFixed(2)
    calctotal3()
}

function calctotal3() {
    let colorring = 0
    let color3 = document.getElementById('color3').value
    let raw3 = document.getElementById('raw3').value
    let rate3 = document.getElementById('rate3').value
    if (rate3 == undefined)
        rate3 = 0
    if (color3 == undefined || color3 == 0) {
        color3 = 0
        colorring = 0
    }
    else
        colorring = raw3 * clbr
    let total = raw3 * rate3 + colorring
    total = total.toFixed()
    document.getElementById('total3').value = total
    document.getElementById('clbr3').innerHTML = colorring
    calculate()
}

/////////////////////////////////
function calculate() {
    let totalWeight = 0
    let grandTotal = 0
    let total1 = parseInt(document.getElementById('total1').value)
    let total2 = parseInt(document.getElementById('total2').value)
    let total3 = parseInt(document.getElementById('total3').value)
    let myWeight1 = parseInt(document.getElementById('color1').value)
    let myWeight2 = parseInt(document.getElementById('color2').value)
    let myWeight3 = parseInt(document.getElementById('color3').value)
    console.log(myWeight1, myWeight2, myWeight3)
    if (myWeight1 == 0)
        myWeight1 = parseInt(document.getElementById('raw1').value)
    if (myWeight2 == 0)
        myWeight2 = parseInt(document.getElementById('raw2').value)
    if (myWeight3 == 0)
        myWeight3 = parseInt(document.getElementById('raw3').value)
    grandTotal = total1 + total2 + total3
    totalWeight = myWeight1 + myWeight2 + myWeight3
    document.getElementById('final').innerHTML = `एकूण रुपये ${grandTotal} एकूण वजन ${totalWeight}`
}
