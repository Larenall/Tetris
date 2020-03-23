var body = document.getElementsByTagName("body")[0];
var tbl = document.createElement("table");
var tBody = document.createElement("tbody");
var controls = document.getElementById('controls')
var wrapper = document.getElementById('wrapper')
var rows = 24;
var cols = 10;
var startPoint = 34;
var color;
var pts = 0;
var streak = 0;
var breaker = false;
var switcher = false;
var resume = true;
var pauseMsg = 'GAMEPAUSED';
var block;
var bestValue = 0;
var gear2;
var gear1;
var go;
var period;
var tr = document.getElementsByTagName('tr')
var td = document.getElementsByTagName('td')
var pts = document.getElementsByTagName('span')
var bestLoc = document.getElementById('points');
var best = document.createElement('p');
best.textContent = 'Session record:' + bestValue;

for (var j = 0; j < rows; j++) {
    var row = document.createElement("tr");
    for (var i = 0; i < cols; i++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode('');
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    tBody.appendChild(row);
}
tbl.appendChild(tBody);
wrapper.insertBefore(tbl, controls);
tbl.setAttribute("border", "2");

controls.insertBefore(best, bestLoc)
for (i = 0; i < td.length; i++) {
    if (i < 40) {
        td[i].setAttribute('class', 'hide')
    }
   // td[i].textContent=(i+1)
}

function randColor() {
    color = 'hsl(' + Math.round(Math.random() * 360) + ',' + Math.round(Math.random() * 20 + 40) + '%, ' + Math.round(Math.random() * 20 + 40) + '%)';
    return color;
}

function randBlock() {
    block = (Math.floor(Math.random() * 7)) * 10 + 1;
    return block
}