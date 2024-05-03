/**
 * Task: Write a JS function that changes the color of all even rows when the user clicks a button. 
 * Apply the color "Teal" to the target rows.
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
 */
function colorize() {
    const trsRef = document.querySelectorAll('tbody tr');
    let lines = '';
    for (let index = 0; index < trsRef.length; index++) {
        if (index % 2 !== 0){
            lines += trsRef[index].style.backgroundColor = 'teal';

        }
    }
}