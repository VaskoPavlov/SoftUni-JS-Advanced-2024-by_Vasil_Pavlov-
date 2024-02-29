/**
 * Task: Write a JS function that takes three string arguments 
 * as an input. Calculate the sum of the length of the strings 
 * and the average length of the strings rounded down 
 * to the nearest integer.

    The input comes as three string arguments passed to your function.
 */

/**
 * @param {string} firstString 
 * @param {string} secondString 
 * @param {string} thirdString 
 */
function stringLength(firstString, secondString, thirdString){
    let summedLength = 0;
    let length = 0;

    for(let i = 0; i < firstString.length; i++){
        length++;
    }
    summedLength += length;
    length = 0;
    for(let i = 0; i < secondString.length; i++){
        length++;
    }
    summedLength += length;
    length = 0;
    for(let i = 0; i < thirdString.length; i++){
        length++;
    }
    summedLength += length;
    length = 0;
    
    console.log(summedLength);
    console.log(Math.floor(summedLength / 3));
}