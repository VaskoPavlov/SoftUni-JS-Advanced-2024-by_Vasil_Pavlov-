/**
 * Task: Write a function that prints the two smallest elements from an array of numbers.
 * 
 * The input comes as an array of number elements.
 * The output is printed on the console on a single line, separated by space.
 */

/**
 * @param {number[]} array 
 */
function smallestTwo(array){
    let finalArray = '';
    function compareNumbers(a,b){
        return a - b;
    }
    let sortedArr = array.sort(compareNumbers);
    
    let first = (sortedArr.shift());
    let second = (sortedArr.shift());

    finalArray += first + ' ';
    finalArray += second;
    
    console.log(finalArray);
}