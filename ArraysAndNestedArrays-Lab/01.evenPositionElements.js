/**
 * Task: Write a function that finds the elements at even positions in an array.
 * 
 * The input comes as an array of string elements.
 * The output is printed on the console. Collect all elements in a string, separated by space.
 */

/**
 * @param {string[]} array 
 */
function even (array){
    let result = '';
    for (let i = 0; i < array.length; i++){
        if(i % 2 === 0){
            result += array[i] + ' ';
        }
    }
    console.log(result);
}