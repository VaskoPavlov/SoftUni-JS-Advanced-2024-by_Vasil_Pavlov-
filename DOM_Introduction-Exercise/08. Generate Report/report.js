/**
 * Task: You will be given a web page, containing a table and output area. 
 
When the "Generate Report" button is pressed:
•	You must generate a JSON report from the data inside the table, by only taking the columns, 
which are selected.
Each table header has a checkbox. If the checkbox is checked, then the data from this column 
must be included in the report. Unchecked columns must be omitted. 
 
For every row (excluding the header):
•	Create an object with properties for each of its columns.
•	The name of each property is the name attribute of the column’s header, 
and the value is the text content of the cell.
•	Store the result in an array and output it as a JSON string display it inside the <textarea> 
with id "output". See the example for details.
 
Input/Output
There will be input, your program must execute based on the page content. 
The output must be a JSON string, displayed in the <textarea> with id "output".
 */
function generateReport() {
    const outputElement = document.querySelector('#output');
    const result = [];
    const checks = Array.from(document.querySelectorAll('thead tr th input'));
    const trs = Array.from(document.querySelectorAll('tbody tr'));

    //* LOOP THROUGH ALL {trs}
    trs.forEach(row => {

        //* this object STORES THE DATA of the current table row
        const current = {};

        //* selecting all TABLE CELLS {tds}   loops over each {td}
        Array.from(row.querySelectorAll('td')).forEach((cell, i) => {

            //* Check if TABLE HEADER IS CHECKED
            //* if CHECKED the COLUMN is SELECTED
            if (checks[i].checked) {

                //* NAME AS KEY         TEXT.CONTENT AS VALUE
                current[checks[i].name] = cell.textContent;
            }
        });
        result.push(current);
    });
    //*  TEXTAREA VALUE      converting to JSON STRING
    outputElement.value = JSON.stringify(result);
}