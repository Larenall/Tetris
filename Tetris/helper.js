//tables sizes
var rows = 24;
var cols = 10;
var previevSize = 6
//startPoint and previevpoint based on which block are build
var startPoint = 34;
var previevPoint = 20
//points
var bestValue = 0;
var pts = 0;
var streak = 0;
//switches
var breaker = false;
var switcher = false;
var resume = true;
var lost = false;
var pauseMsg = 'GAMEPAUSED';
//block info
var block;
var color;
var previevBlock;
var previevColor;
//loops
var gear2;
var gear1;
var go;
var period;
//table related html and etc
var body = document.getElementsByTagName("body")[0];
var controls = document.getElementById('controls')
var wrapper = document.getElementById('wrapper')
var tr = document.getElementsByTagName('tr')
var td = document.getElementsByClassName('main')
var wTd = document.getElementsByClassName('window')
var intoWrapper = document.getElementsByTagName('script')
//points
var pts = document.getElementsByTagName('span')
var bestLoc = document.getElementById('points');
var best = document.createElement('p');
best.textContent = 'Session record:' + bestValue;

//builds main table
var tbl = document.createElement("table");
var tBody = document.createElement("tbody");
for (var j = 0; j < rows; j++) {
    var row = document.createElement("tr");
    for (var i = 0; i < cols; i++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode('');
        cell.appendChild(cellText);
        cell.setAttribute('class', 'main')
        row.appendChild(cell);
    }
    tBody.appendChild(row);
}
tbl.appendChild(tBody);
wrapper.insertBefore(tbl, intoWrapper[0]);
tbl.setAttribute("border", "2");

controls.insertBefore(best, bestLoc)
for (i = 0; i < td.length; i++) {
    if (i < 40) {
        td[i].hidden = 'true'
    }
    // td[i].textContent=(i+1) //for dev purposes
}
//end

// builds previev window
var wndw = document.createElement("table");
var wBody = document.createElement("tbody");
for (var j = 0; j < previevSize; j++) {
    var row = document.createElement("tr");
    for (var i = 0; i < previevSize; i++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode('');
        cell.appendChild(cellText);
        cell.setAttribute('class', 'window')
        row.appendChild(cell);
    }
    wBody.appendChild(row);
}
wndw.appendChild(wBody);
wrapper.insertBefore(wndw, tbl);
wndw.setAttribute("border", "2");
wndw.style.margin = '0 10%'
// end

//help functions
function randColor() {
    previevColor = 'hsl(' + Math.round(Math.random() * 360) + ',' + Math.round(Math.random() * 40 + 40) + '%, ' + Math.round(Math.random() * 20 + 40) + '%)';
    return previevColor;
}

function randBlock() {
    previevBlock = (Math.floor(Math.random() * 7)) * 10 + 1;
    return previevBlock
}
/*function insertAfter(newNode, referenceNode) { //not used
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}*/
previev(); //build previev block
