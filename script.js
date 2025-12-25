const clbrRate = 270;
document.getElementById("clrrate").innerHTML = `रंगणी ${clbrRate}/-`;

// Date
const d = new Date();
const days = ["रविवार","सोमवार","मंगळवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"];
document.getElementById("today").innerHTML = `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()} ${days[d.getDay()]}`;

// Initialize all input fields as empty
for (let i = 1; i <= 3; i++) {
    document.getElementById(`color${i}`).value = '';
    document.getElementById(`raw${i}`).value = '';
    document.getElementById(`rate${i}`).value = '';
    document.getElementById(`clbr${i}`).value = '';
    document.getElementById(`trialTotal${i}`).value = '';
    document.getElementById(`total${i}`).value = '';
}
document.getElementById('return').value = '';

// Calculate raw from color
function calcraw(i){
    let color = parseFloat(document.getElementById(`color${i}`).value) || 0;
    document.getElementById(`raw${i}`).value = color ? (color / 0.75).toFixed(3) : '';
    calculateRow(i);
}

// Calculate row totals
function calculateRow(i){
    let color = parseFloat(document.getElementById(`color${i}`).value) || 0;
    let raw = parseFloat(document.getElementById(`raw${i}`).value) || 0;
    let rate = parseFloat(document.getElementById(`rate${i}`).value) || 0;
    let clbrInput = document.getElementById(`clbr${i}`);
    let clbr = parseFloat(clbrInput.value) || 0;

    // Auto-calc only if रंगीत > 0 and clbr empty
    if(color > 0 && clbr === 0){
        clbr = Math.ceil((raw * clbrRate)/5)*5;
        clbrInput.value = clbr;
    }

    // Trial total
    let trialTotal = Math.ceil((raw * rate)/5)*5;
    document.getElementById(`trialTotal${i}`).value = trialTotal || '';

    // Total
    document.getElementById(`total${i}`).value = (trialTotal + clbr) || '';

    calculate();
}
function calculate(){
    let grandTotal = 0;
    let totalWeight = 0;

    for(let i=1;i<=3;i++){
        let color = parseFloat(document.getElementById(`color${i}`).value) || 0;
        let raw = parseFloat(document.getElementById(`raw${i}`).value) || 0;
        let total = parseFloat(document.getElementById(`total${i}`).value) || 0;

        grandTotal += total;

        // Weight: if रंगीत non-empty, use रंगीत, else use raw
        totalWeight += (color > 0 ? color : raw);
    }

    let paid = parseFloat(document.getElementById('return').value) || 0;
    let balance = paid - grandTotal;

    // Swap positions: Left = Weight, Right = Total ₹
    document.getElementById('final').innerHTML =
        `एकूण वजन ${totalWeight.toFixed(3)} कि. ग्रॅ <span class='float-right'>एकूण ₹ <b>${grandTotal}/-</b></span><br>एकूण परत ₹ ${balance}`;

    document.getElementById('tableFinal').innerHTML =
        `एकूण वजन ${totalWeight.toFixed(3)} कि. ग्रॅ <span class='float-right'>एकूण ₹ <b>${grandTotal}/-</b></span>`;
}

/*
// Calculate grand totals
function calculate(){
    let grandTotal = 0;
    let totalWeight = 0;

    for(let i=1;i<=3;i++){
        let color = parseFloat(document.getElementById(`color${i}`).value) || 0;
        let raw = parseFloat(document.getElementById(`raw${i}`).value) || 0;
        let total = parseFloat(document.getElementById(`total${i}`).value) || 0;

        grandTotal += total;

        // Weight: if रंगीत non-empty, use रंगीत, else use raw
        totalWeight += (color > 0 ? color : raw);
    }

    let paid = parseFloat(document.getElementById('return').value) || 0;
    let balance = paid - grandTotal;

    document.getElementById('final').innerHTML =
        `एकूण ₹ <b>${grandTotal}/-</b> <span class='float-right'>एकूण परत ₹ ${balance}</span><br>एकूण वजन ${totalWeight.toFixed(3)} कि. ग्रॅ.`;

    document.getElementById('tableFinal').innerHTML =
        `एकूण ₹ <b>${grandTotal}/-</b> <span class='float-right'>एकूण वजन ${totalWeight.toFixed(3)} कि. ग्रॅ.</span>`;
}
*/
// Print table
function printTable(){
    document.querySelectorAll("table.table-print tbody tr").forEach((row,i)=>{
        if(i<3){
            let color = document.getElementById(`color${i+1}`).value;
            let raw = document.getElementById(`raw${i+1}`).value;
            let rate = document.getElementById(`rate${i+1}`).value;
            row.classList.toggle('empty-row', (!color && !raw && !rate));
        }
    });
    window.print();
}
