/**
 * Task: Write a JS function that reads a given matrix of numbers and checks if both 
 * main diagonals have equal sums. If they do, set every element that is NOT part of 
 * the main diagonals to that sum, alternatively just print the matrix unchanged.
 * 
 * The input comes as an array of strings. Each element represents a string of numbers, 
 * with spaces between them. Parse it into a matrix of numbers, so you can work with it.
 * The output is either the new matrix, with all cells not belonging to a main diagonal 
 * are changed to the diagonal sum, or the original matrix if the two diagonals have different sums. 
 * You need to print every row on a new line, with cells separated by a space. 
 */

/**
 * @param {string[]} array 
 */
function diagonalAttack(array){
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let finalArr = [];
    for (let index = 0; index < array.length; index++) {
        let row = array[index].split(' ');
        for (let i = 0; i < row.length; i++) {
            let element = row[i];
            if(index === i){
                firstDiagonal += Number(element);
            } 
            if (index + i === (array.length - 1)){
                secondDiagonal += Number(element);
            }
        }
    }

    for (let k = 0; k < array.length; k++) {
        let row = array[k].split(' ');
        let finalRow = [];
        for (let j = 0; j < row.length; j++) {
            let element = row[j];

            if(firstDiagonal === secondDiagonal){
                if (k !== j && k + j !== (array.length - 1)){
                    finalRow.push(firstDiagonal);
                } else {
                    if(k === j){
                        finalRow.push(Number(element));
                        continue;
                    }
                    if (k + j === (array.length - 1)){
                        finalRow.push(Number(element));
                    }
                }
            } else {
                finalRow.push(Number(element));
            }
        }
        let finalRowJoined = finalRow.join(' ');
        finalArr.push(finalRowJoined);
    } 
    console.log(finalArr.join('\n'));
}
diagonalAttack(
    ['1 1 1',
    '1 1 1',
    '1 1 0']
    );