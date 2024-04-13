/* Task:

You will be given an empty rectangular space of cells. Then you will be given the position of a star. 
You need to build the orbits around it.
You will be given a coordinate of a cell, which will always be inside the matrix, 
on which you will put the value - 1. 
Then you must set the values of the cells directly surrounding that cell, including the diagonals, to 2. 
After which you must set the values of the next surrounding cells to 3 and so on. 
Check the pictures for more information.

For example, we are given a matrix that has 5 rows and 5 columns, and the star is at coordinates - 0, 0. 
Then the following should happen:
1							1	2						1	2	3	4	5
							2	2						2	2	3	4	5
   														3	3	3	4	5
														4	4	4	4	5
														5	5	5	5	5

If the coordinates of the star are somewhere in the middle of the matrix for example - 2, 2, 
then it should look like this:
														3	3	3	3	3
 								2	2	2				3	2	2	2	3
   		1						2	1	2				3	2	1	2	3
								2	2	2				3	2	2	2	3
														3	3	3	3	3

The input comes as an array of 4 numbers [width, height, x, y] which represents the dimensions of the matrix 
and the coordinates of the star.
The output is the filled matrix, with the cells separated by a space, each row on a new line.
*/

/**
 * @param {*} numsArray 
 */
function orbit(numsArray){
    let height = numsArray[0];
    let width = numsArray[1];
    let x = numsArray[2];
    let y = numsArray[3];

    //can be written shorter like this:
    // let [height, width, x, y] = numsArray;
        const matrix = Array.from({ length: height }, () => new Array(width))
    
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                matrix[i][j] = Math.max(Math.abs(y - i), Math.abs(x - j)) + 1
            }
        }
    
        console.log(matrix.map(r => r.join(' ')).join('\n'))
}
orbit([4, 4, 0, 0]);
/* Explanation:
3. **Populating the Matrix**:
   - The matrix is populated using a nested loop. The outer loop iterates over the rows (`i`), 
   and the inner loop iterates over the columns (`j`).

   - For each cell in the matrix, the value is calculated based on the 
   Manhattan distance from the cell to the star's position.

   - The Manhattan distance between two points (x1, y1) and (x2, y2) 
   is defined as |x2 - x1| + |y2 - y1|. It represents the distance between two points in a 
   grid-based system where only vertical and horizontal movements are allowed.

   - In this case, the distance from each cell to the star's position (`x`, `y`) 
   is calculated using the formula `Math.max(Math.abs(y - i), Math.abs(x - j)) + 1`.

   - `Math.abs(y - i)` calculates the vertical distance between the current cell's row `i` 
   and the star's row `y`.

   - `Math.abs(x - j)` calculates the horizontal distance between the current cell's column `j` 
   and the star's column `x`.

   - `Math.max(...)` is used to find the maximum of the two distances, 
   ensuring that we get the maximum distance in either the vertical or horizontal direction.

   - Adding 1 to the maximum distance ensures that the value starts from 1 around the star's position 
   and increases as we move away from it.

   - This value represents the orbital level around the star. 
   Cells closer to the star have lower values, while cells farther away have higher values.
*/

