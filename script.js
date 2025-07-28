let clbr = 270;
document.getElementById('clrrate').innerHTML = `रंगणी ${clbr}/-`;

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
const weekday = ["रविवार", "सोमवार", "मंगळवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];
let dayName = weekday[date.getDay()];
let currentDate = `${day}-${month}-${year} ${dayName}`;
document.getElementById('today').innerHTML = currentDate;

checkUndefined();

function checkUndefined() {
    const fields = ['total', 'trialTotal', 'color', 'raw', 'rate'];
    for (let i = 1; i <= 3; i++) {
        fields.forEach(f => {
            document.getElementById(`${f}${i}`).value = 0;
        });
    }
    document.getElementById('return').value = 0;
}

function calcraw1() {
    let color1 = document.getElementById('color1').value || 0;
    document.getElementById('raw1').value = (color1 / 0.75).toFixed(3);
    calctotal1();
}

function calctotal1() {
    calculateRow(1);
}
function calcraw2() {
    let color2 = document.getElementById('color2').value || 0;
    document.getElementById('raw2').value = (color2 / 0.75).toFixed(3);
    calctotal2();
}
function calctotal2() {
    calculateRow(2);
}
function calcraw3() {
    let color3 = document.getElementById('color3').value || 0;
    document.getElementById('raw3').value = (color3 / 0.75).toFixed(3);
    calctotal3();
}
function calctotal3() {
    calculateRow(3);
}

function calculateRow(i) {
    let color = parseFloat(document.getElementById(`color${i}`).value) || 0;
    let raw = parseFloat(document.getElementById(`raw${i}`).value) || 0;
    let rate = parseFloat(document.getElementById(`rate${i}`).value) || 0;

    let colorring = color === 0 ? 0 : Math.ceil((raw * clbr) / 5) * 5;
    let trialTotal = Math.ceil((raw * rate) / 5) * 5;
    let total = trialTotal + colorring;

    document.getElementById(`trialTotal${i}`).value = trialTotal;
    document.getElementById(`total${i}`).value = total.toFixed();
    document.getElementById(`clbr${i}`).innerHTML = colorring;
    calculate();
}

function calculate() {
    let total1 = parseInt(document.getElementById('total1').value) || 0;
    let total2 = parseInt(document.getElementById('total2').value) || 0;
    let total3 = parseInt(document.getElementById('total3').value) || 0;

    let myWeight1 = parseFloat(document.getElementById('color1').value) || parseFloat(document.getElementById('raw1').value) || 0;
    let myWeight2 = parseFloat(document.getElementById('color2').value) || parseFloat(document.getElementById('raw2').value) || 0;
    let myWeight3 = parseFloat(document.getElementById('color3').value) || parseFloat(document.getElementById('raw3').value) || 0;

    let grandTotal = total1 + total2 + total3;
    let totalWeight = (myWeight1 + myWeight2 + myWeight3).toFixed(3);
    let paid = parseInt(document.getElementById('return').value) || 0;
    let myReturn = paid - grandTotal;

    document.getElementById('final').innerHTML =
        `एकूण ₹ <b> ${grandTotal}/- </b> <span class='float-right'>एकूण परत ₹ ${myReturn}</span> <br>एकूण वजन ${totalWeight} कि. ग्रॅ.`;
    document.getElementById('tableFinal').innerHTML =
        `एकूण ₹ <b> ${grandTotal}/- </b> <span class='float-right'>एकूण वजन ${totalWeight} कि. ग्रॅ.</span><br><small class="float-right" style="font-size:50%"> चूक भूल देणे घेणे</small>`;
}

function printTable() {
    const rows = document.querySelectorAll("table.table-print tbody tr");
    const rowsToHide = [];

    rows.forEach((row, index) => {
        if (index < 3) {
            const color = row.querySelector(`#color${index + 1}`).value;
            const raw = row.querySelector(`#raw${index + 1}`).value;
            const rate = row.querySelector(`#rate${index + 1}`).value;

            if ((!color || color == 0) && (!raw || raw == 0) && (!rate || rate == 0)) {
                row.style.display = "none";
                rowsToHide.push(row);
            }
        }
    });

    window.print();

    // Restore rows after printing
    rowsToHide.forEach(row => {
        row.style.display = "";
    });
}
