/**
 * Task: Write a JS function that takes two numbers n and m as an input and 
 * prints the sum of all numbers from n to m.
 * The input comes as two string elements that need to be parsed as numbers.
 * The output should return the sum.
 */

/**
 * @param {number} n 
 * @param {number} m 
 */
function sumOfNandM(n, m){
    const first = Number(n);
    const second = Number(m);
    let sum = 0;
    for (let i = first; i <= second; i++){
        sum += i;
    }
    console.log(sum);
}