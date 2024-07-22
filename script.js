let clbr = 270
document.getElementById('clrrate').innerHTML = `रंगणी ${clbr}/-`
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
const weekday = ["रविवार", "सोमवार", "मंगळवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];
let dayName = weekday[date.getDay()];
// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year} ${dayName}`;
document.getElementById('today').innerHTML = currentDate
checkUndefined()
function checkUndefined() {
    document.getElementById('total1').value = 0
    document.getElementById('total2').value = 0
    document.getElementById('total3').value = 0
    document.getElementById('trialTotal1').value = 0
    document.getElementById('trialTotal2').value = 0
    document.getElementById('trialTotal3').value = 0
    document.getElementById('color1').value = 0
    document.getElementById('color2').value = 0
    document.getElementById('color3').value = 0
    document.getElementById('raw1').value = 0
    document.getElementById('raw2').value = 0
    document.getElementById('raw3').value = 0
    document.getElementById('rate1').value = 0
    document.getElementById('rate2').value = 0
    document.getElementById('rate3').value = 0
    document.getElementById('return').value = 0
}

function calcraw1() {
    let color1 = document.getElementById('color1').value
    if (color1 == '')
        document.getElementById('color1').value = 0
    if (color1 == undefined)
        color1 = 0
    document.getElementById('raw1').value = (color1 / .75).toFixed(3)
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
        colorring = Math.ceil(raw1 * clbr)
    let trialTotal = Math.ceil(raw1 * rate1)
    let total = trialTotal + colorring
    total = total.toFixed()
    document.getElementById('trialTotal1').value = trialTotal
    document.getElementById('total1').value = total
    document.getElementById('clbr1').innerHTML = colorring
    calculate()
}

/////////////////////////////////
function calcraw2() {
    let color2 = document.getElementById('color2').value
    if (color2 == '')
        document.getElementById('color2').value = 0
    if (color2 == undefined)
        color2 = 0
    document.getElementById('raw2').value = (color2 / .75).toFixed(3)
    calctotal2()
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
        colorring = Math.ceil(raw2 * clbr)
    let trialTotal = Math.ceil(raw2 * rate2)    
    let total = trialTotal + colorring
    total = total.toFixed()
    document.getElementById('trialTotal2').value = trialTotal
    document.getElementById('total2').value = total
    document.getElementById('clbr2').innerHTML = colorring
    calculate()
}

/////////////////////////////////
function calcraw3() {
    let color3 = document.getElementById('color3').value
    if (color3 == '')
        document.getElementById('color3').value = 0
    if (color3 == undefined)
        color3 = 0
    document.getElementById('raw3').value = (color3 / .75).toFixed(3)
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
        colorring = Math.ceil(raw3 * clbr)
    let trialTotal = Math.ceil(raw3 * rate3)  
    let total = trialTotal + colorring
    total = total.toFixed()
    document.getElementById('trialTotal3').value = trialTotal
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
    let myWeight1 = parseFloat(document.getElementById('color1').value)
    let myWeight2 = parseFloat(document.getElementById('color2').value)
    let myWeight3 = parseFloat(document.getElementById('color3').value)
    if (myWeight1 == 0)
        myWeight1 = parseFloat(document.getElementById('raw1').value)
    if (myWeight2 == 0)
        myWeight2 = parseFloat(document.getElementById('raw2').value)
    if (myWeight3 == 0)
        myWeight3 = parseFloat(document.getElementById('raw3').value)
    grandTotal = total1 + total2 + total3
    totalWeight = myWeight1 + myWeight2 + myWeight3
    totalWeight = totalWeight.toFixed(3)
    let paid = parseInt(document.getElementById('return').value)
    let myReturn = paid - grandTotal
    document.getElementById('final').innerHTML = `एकूण ₹ <b> ${grandTotal}/- </b> <span class='float-right'>एकूण परत ₹ ${myReturn}</span> <br>एकूण वजन ${totalWeight} कि. ग्रॅ.`
}
