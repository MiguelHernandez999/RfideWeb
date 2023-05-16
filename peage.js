
var table = document.querySelector('table tbody');


var newRow = table.insertRow();

// Insertar las celdas en la fila
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell4 = newRow.insertCell(3);
var cell5 = newRow.insertCell(4);


cell1.textContent = '12345';
cell2.textContent = 'uid123';
cell3.textContent = new Date().toLocaleString();
cell4.textContent = '$100.00';
cell5.textContent = '$1,000.00';