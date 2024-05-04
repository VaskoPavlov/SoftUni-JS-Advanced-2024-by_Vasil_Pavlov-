/**
 * Task: Write a JS function that finds the first table in a document and sums the values in the 
 * last column. The result is then displayed in an element with ID "sum".
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
 */
function sumTable() {
    const trs = document.querySelectorAll('table tbody tr');
    let sum = document.getElementById('sum');
    let result = 0

    for (let index = 1; index < trs.length-1; index++) {
        result += Number(trs[index].children[1].textContent);
        
    }
    sum.textContent = result;
}