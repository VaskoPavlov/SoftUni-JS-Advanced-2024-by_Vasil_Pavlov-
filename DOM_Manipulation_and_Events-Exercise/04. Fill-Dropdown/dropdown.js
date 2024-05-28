/**
 * Task: Your task is to take values from input fields with ids "newItemText" and "newItemValue". 
 * Then you should create and append an <option> to the <select> with id "menu".
 */
function addItem() {
    const dropdownRef = document.getElementById('menu');
    const textRef = document.getElementById('newItemText');
    const valueRef = document.getElementById('newItemValue');

    const option = document.createElement('option')
    option.text = textRef.value;
    option.value = valueRef.value;
    dropdownRef.appendChild(option);

    textRef.value = '';
    valueRef.value = '';
}