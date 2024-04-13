function spiralMatrices(width, height) {
                                                                        //this makes CONST variable!!!
    const matrix = Array.from({ length: height }, () => new Array(width)), lastVal = width * height;
    // you can create variables like this 
    let i = 0, j = 0, n = 1, w = width, h = height
    // another example
    // const a = 0, b = 0, c = 8
    // ----------------------------------
    while (n <= lastVal) {
        circle()
    }
    
    function circle() {
        while(n <= lastVal) {
            matrix[i][j] = n++;

            if (j < w - 1){
                j++;
            } else if (i < h - 1){
                i++;
            } else {
                h--;
                j--;
                break;
            }
        }
        while (n <= lastVal) {
            matrix[i][j] = n++;

            if (j > width - w){
                j--;
            } else if (i > height - h) {
                i--;
            } else {
                w--;
                j++;
                break;
            }
        }
    }
    console.log(matrix.map(r => r.join(' ')).join('\n'));
}

spiralMatrices(2,3)
/*
Circle Function:
- The circle function fills one circular path of the spiral.

- It consists of two nested while loops, each responsible for filling one side of the spiral path.

- The first while loop fills the top row of the current circle, 
moving from left to right until reaching the end (j < w - 1).

- After the first loop completes, the function checks if there's still space to move down 
(i < h - 1). If yes, it moves to the next row.

- If there's no space to move down, it means the top row of the circle is filled, 
and the height (h) of the remaining matrix is decremented, 
and the column (j) is decremented to move back to the previous column.

- The second while loop fills the rightmost column of the current circle, 
moving from top to bottom until reaching the end (i < height - h).

- After the second loop completes, similar to the first loop, it checks if there's space to move left 
(j > width - w). If yes, it moves to the previous column.

- If there's no space to move left, it means the rightmost column of the circle is filled, 
and the width (w) of the remaining matrix is decremented, 
and the column (j) is incremented to move back to the next column.
*/