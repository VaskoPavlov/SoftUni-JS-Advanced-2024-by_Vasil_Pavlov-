/**
 * Task: A square matrix of numbers comes as an array of arrays, each array holding numbers.
 * Write a function that finds the sum at the main and the secondary diagonals.
 * 
 * The input comes as an array of arrays, containing number elements (2D matrix of numbers).
 * The output is printed on the console, on a single line separated by space. 
 * First print the sum at the main diagonal, then the sum at the secondary diagonal.
 */

/**
 * @param {Array[]} arrayOfStrings ArrayOfArrays actually xD
 */
function diagonalSum(arrayOfStrings){ //? ArrayOfArrays actually xD
    let startingArray = arrayOfStrings;
    //! MAIN DIAGONAL = [0][0] + [1][1] + [2][2] AND SO ON....
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < startingArray.length; i++){
        mainDiagonal += startingArray[i][i];
    //? SECONDARY DIAGONAL = [i][ARRAY.LENGTH - i - 1] FOR THE WHOLE LENGTH;
        secondaryDiagonal += startingArray[i][startingArray.length - i - 1];
    }
    
    console.log(mainDiagonal, secondaryDiagonal);
}