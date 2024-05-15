/**
 * Task: Write a function that converts a decimal number to binary and hexadecimal.
The given number will always be in decimal format. The "From" select menu will only have a 
Decimal option, but the "To" select menu will have two options: Binary and Hexadecimal. 
This means that our program should have the functionality to convert decimal to binary 
and decimal to hexadecimal. When you convert to hexadecimal it must be upper case.
Note that the "To" select menu by default is empty. You have to insert the two options 
('Binary' and 'Hexadecimal') inside before continuing. 
Also, they should have values ('binary' and 'hexadecimal').

 When the [Convert it] button is clicked, the expected result should appear in the [Result] input field.
 */
function solve() {
    const toDropdownRef = document.querySelector('#container #selectMenuTo');
    const numToConvertRef = document.getElementById('input');
    let resultRef = document.getElementById('result');
    let btnRef = document.querySelector('button');

    const option = document.createElement('option');
    option.text = 'Hexadecimal';
    option.value = 'hexadecimal';

    const option2 = document.createElement('option');
    option2.text = 'Binary';
    option2.value = 'binary';

    toDropdownRef.appendChild(option2);
    toDropdownRef.appendChild(option);

    btnRef.addEventListener('click', convertHandler)

    function convertHandler () {
        const toOption = Array.from(document.querySelector('#selectMenuTo').children);
        for (const opt of toOption) {
            console.log(opt);
            if (toDropdownRef.value == 'binary') {
                let num = Number(numToConvertRef.value);
                let convertedNum = num.toString(2);
                resultRef.value = convertedNum;
            } else if (toDropdownRef.value == 'hexadecimal') {
                let num = Number(numToConvertRef.value);
                let convertedNum = (num.toString(16)).toUpperCase();
                resultRef.value = convertedNum;
            } else {
                continue;
            }
        }
    }
    resultRef.value = '';
}