/**
 * Task: Write a function that finds the number of equal neighbor pairs inside a matrix of 
 * variable size and type (numbers or strings).
 * 
 * The input comes as an array of arrays, containing string elements (2D matrix of strings).
 * The output is the return value of your function. Save the number of equal pairs you find and return it.
 */

/**
 * @param {Array[]} arrayOfArrays 
 */
function equalNeighbors(arrayOfArrays) {
    let pair = 0;
  
    for (let i = 0; i < arrayOfArrays.length; i++) {
      for (let j = 0; j < arrayOfArrays[i].length; j++) {
        // Check right neighbor
      if (j < arrayOfArrays[i].length - 1 && arrayOfArrays[i][j] === arrayOfArrays[i][j + 1]) {
        pair++;
      }
        // Check bottom neighbor
        if (i < arrayOfArrays.length - 1 && arrayOfArrays[i][j] === arrayOfArrays[i + 1][j]) {
          pair++;
        }
      }
    }
  
    console.log(pair);
}