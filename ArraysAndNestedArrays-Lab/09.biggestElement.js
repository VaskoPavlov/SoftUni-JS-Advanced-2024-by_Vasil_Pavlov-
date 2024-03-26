/**
 * Task: Write a function that finds the biggest element inside a matrix.
 * 
 * The input comes as an array of arrays, containing number elements (2D matrix of numbers).
 * The output is the return value of your function. Find the biggest element and return it.
 */

/**
 * @param {Array[]} arrayOfArrays MATRIX |NESTED ARAAY|
 * @returns {number} 
 */
function biggestEl(arrayOfArrays){
    function compareNumbers (a, b){
        return a - b;
    }
    let finalArray = [];
    for(let i = 0; i < arrayOfArrays.length; i++){
        for(let j = 0; j < arrayOfArrays[i].length; j++){
            finalArray.push(arrayOfArrays[i][j]);
        }
    }
    finalArray.sort(compareNumbers);

    return finalArray.pop();
}