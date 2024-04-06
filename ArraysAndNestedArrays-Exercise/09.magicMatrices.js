/**
 * Task: Write a function that checks if a given matrix of numbers is magical. 
 * A matrix is magical if the sums of the cells of every row and every column are equal.
 * 
 * The input comes as an array of arrays, containing numbers (number 2D matrix). 
 * The input numbers will always be positive.
 * The output is a Boolean result indicating whether the matrix is magical or not.
 */

/**
 * @param {array[]} arrayOfArrays 
 * @returns {boolean} 
 */
function magicMatrices(arrayOfArrays) {
    const numRows = arrayOfArrays.length;
    const numCols = arrayOfArrays[0].length;
  
    // Calculate the sum of the first row
    const rowSum = arrayOfArrays[0].reduce((acc, num) => acc + num, 0);
  
    // Check if the sum of each row is equal to the first row sum
    for (let i = 1; i < numRows; i++) {
      const sumRow = arrayOfArrays[i].reduce((acc, num) => acc + num, 0);
      if (sumRow !== rowSum) {
        return false;
      }
    }
  
    // Check if the sum of each column is equal to the first row sum
    for (let j = 0; j < numCols; j++) {
      let sumColumn = 0;
      for (let i = 0; i < numRows; i++) {
        sumColumn += arrayOfArrays[i][j];
      }
      if (sumColumn !== rowSum) {
        return false;
      }
    }
  
    // If all sums are equal, return true
       return true;
  }