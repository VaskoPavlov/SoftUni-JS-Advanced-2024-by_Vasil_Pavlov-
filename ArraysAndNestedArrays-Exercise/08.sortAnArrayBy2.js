/**
 * Task: Write a function that orders a given array of strings, 
 * by a length in ascending order as primary criteria, 
 * and by alphabetical value in ascending order as second criteria. 
 * The comparison should be case-insensitive.
 * 
 * The input comes as an array of strings.
 * The output is the elements of the ordered array of strings, printed each on a new line.
 */

/**
 * @param {string[]} array
 */
function sort(array){
    function compareAlphabetically(a,b){
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }
    array.sort(compareAlphabetically);
    function compareString(a, b){
        return a.length - b.length;
    }
    array.sort(compareString);
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
