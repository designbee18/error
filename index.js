//the table
var table=document.getElementById("table");

//how many columns and rows the table should have
var cols = 1;
var rows = 1;

//the counter that counts every millisecond to determine when the table should make more columns and rows
let counter = 0;
//how many milliseconds it should take for the table to make more columns and rows
let counter_max = 100

//how many columns and rows there should eventually be
let space_max = 15;

/* generates columns and rows giving an id for each space in the table
   so that each space in the table can be selected and the color be changed.
   Per millisecond*/
function generateTable() {
    table.innerHTML = "";
    let id=0;
    for (let row = 0; row < rows; row++) {
        let row_element="<tr>"
        for (let col = 0; col < cols; col++) {
            row_element+=`<td id='${id++}'></td>`;
        }
        row_element += "</tr>"
        table.innerHTML+=row_element;
    }
}

/*Generates a random color for each table space*/
function random_color() {    
    let color_codes = Array(3);
    for (let col_num = 0; col_num < 3; col_num++) {
        color_codes[col_num] = Math.floor(Math.random() * 255) + 1;
    }
    return `rgb(${color_codes[0]}, ${color_codes[1]}, ${color_codes[2]})`;
}

/* Increases the amount of columns and rows, generates the columns and rows, selects each space
   in the table, and changes the color randomly.*/
function seizure() {
    if (cols != space_max && counter++ == counter_max) {
        cols++;
        rows++;
        counter=0;
    }
    
    generateTable();
    
    for (let cell = 0; cell < cols * rows; cell++) {
        document.getElementById(`${cell}`).style=`background: ${random_color()};`;
    }
}

//calls the seizure function every 1 millisecond
setInterval(seizure, 1);


 