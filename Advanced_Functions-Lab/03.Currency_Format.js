/**
 * Task: Write a higher-order function createFormatter that fixes some of the parameters 
 * of another function. Your program will receive four parameters: three values and a 
 * function that takes 4 parameters and returns a formatted string (a monetary value 
 * with currency symbol). 
Your task is to return a partially applied function, based on the input function that 
has its first three parameters fixed and only takes one parameter.

You will receive the following function: 
currencyFormatter
function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

Receive and set the following parameters to fixed values:
separator
symbol
symbolFirst
The final parameter value is the one that the returned function must receive.

Input
You will receive four parameters:
•	separator (string)
•	symbol (string)
•	symbolFirst (Boolean)
•	formatter (function)
Output
You need to return a function that takes one parameter - value
 */
/**
 * @param {string} separator 
 * @param {string} symbol 
 * @param {boolean} symbolFirst 
 * @param {function currencyFormatter(separator, symbol, symbolFirst, value) {}} currencyFormatter 
 * @returns {Function} currencyFormatter
 */
function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
        /**
         * @param {number} value
         */
    return function(value) {
        return currencyFormatter(separator, symbol, symbolFirst, value);
    };
}