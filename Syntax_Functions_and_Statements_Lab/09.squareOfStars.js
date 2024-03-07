/**
 * Task: Write a function that prints a rectangle made of stars with variable size, 
 * depending on an input parameter. If there is no parameter specified, 
 * the rectangle should always be of size 5. Look at the examples to get an idea.
 * 
 * The input comes as a single number argument.
 * The output is a series of lines printed on the console, forming a rectangle of variable size.
 */

/**
 * @param {number} number 
 */
function squareOfStars(number){
    if(!number){
        for(let i = 1; i <= 5; i++){
            let row = '';
            for(let j = 1; j <= 5; j++){
                row += '*' + ' ';
            }
            console.log(row);
        }
    } else {
        for(let i = 1; i <= number; i++){
            let row = '';
            for(let j = 1; j <= number; j++){
                row += '*' + ' ';
            }
            console.log(row);
        }
    }
}