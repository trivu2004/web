function formatMoner(value){
    value = Math.ceil(value*100) / 100
    value = value.toFixed(2);
    return "$" + value;
}
function formatSplit(value){
    if(value == "1") return value + " Person";
    return value+ "People"
}

function update(){
    let bill = Number(document.getElementById("yourBill").value)
    let tipPercent = document.getElementById("tipInput").value;
    let split = document.getElementById("splitInput").value;
    let tipValue = bill * (tipPercent/100)
    let tipEach = tipValue/split;
    let newbillEach = (bill+tipValue)/split;

    let people = 
    document.getElementById("tipPercent").innerHTML = tipPercent + "%";
    document.getElementById("tipValue").innerHTML = formatMoner(tipValue);
    document.getElementById("totalWithTip").innerHTML = formatMoner(bill+tipValue);
    document.getElementById("spliyValue").innerHTML = formatSplit(split);
    document.getElementById("billEach").innerHTML = formatMoner(newbillEach);
    document.getElementById("tipEach").innerHTML = formatMoner(tipValue/split)
}
let container = document.getElementById("container");
container.addEventListener("input",update)