/**
 * Task: Write a function that takes an integer number as an input 
 * and checks if all the digits in a given number are the same or not.
 * 
 * Print on the console true if all numbers are the same and false if not. 
 * On the next line, print the sum of all digits.
 * 
 * The input comes as an integer number.
 * The output should be printed on the console.
 */

/**
 * @param {number} number 
 */
function sameNumbers(number){
    let strNumber = String(number);
    let first = strNumber[0]
    let sum = Number(first);
    let isSame = true;
    
    for(let i = 1; i < strNumber.length; i++){
        sum += Number(strNumber[i]);
        if (strNumber[i] !== first){
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}