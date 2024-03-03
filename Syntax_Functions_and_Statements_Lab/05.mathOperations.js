/**
 * Task: Write a JS function that takes two numbers and 
 * a string as an input. 

 * The string may be one of the following: '+', '-', '*', '/', '%', '**'.

 * Print on the console the result of the mathematical operation between 
 * both numbers and the operator you receive as a string.
 * The input comes as two numbers and a string argument passed to your function.
 */
/**
 * @param {number} numOne 
 * @param {number} numTwo 
 * @param {string} symbol 
 */
function mathOperations(numOne, numTwo, symbol){
    let result;
    switch(symbol){
        case '+':
            result = numOne + numTwo;
            break;
        case '-':
            result = numOne - numTwo;
            break;
        case '*':
            result = numOne * numTwo;
            break;
        case '/':
            result = numOne / numTwo;
            break;
        case '**':
            result = numOne ** numTwo;
            break;
        case '%':
            result = numOne % numTwo;
            break;
    }
    console.log(result);
}