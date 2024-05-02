/**
 * Task: Write a JS function that reads two numbers from input fields in a web page and puts 
 * their sum in another field when the user clicks on a button.
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
 */
function calc() {
    const fNumRef = document.getElementById('num1');
    const sNumRef = document.getElementById('num2');
    const sumRef = document.getElementById('sum');

    sumRef.value = Number(fNumRef.value) + Number(sNumRef.value);
}
