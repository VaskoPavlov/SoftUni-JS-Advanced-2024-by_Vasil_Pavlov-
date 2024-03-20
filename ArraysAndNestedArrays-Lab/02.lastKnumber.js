/**
 * Task:You are given two integers n and k. 
 * Write a JS function that generates and return the following sequence:
•	The first element is 1
•	Every following element equals the sum of the previous k elements
•	The length of the sequence is n elements

 * The input comes as two number arguments. 
 * The first element represents the number n, and the second – the number k.
 * The output is the return value of your function and should be an array of numbers.

Explanation
The 2nd element (1) is the sum of the 3 elements before it, but there is only 1, so we take that. 
The third element is the sum of the first 2 (1 and 1) and the 4th – the sum of 1, 1, and 2. 
The 5th element is the sum of the 2nd, 3rd, and 4th (1, 2, and 4) and so on.
 */

/**
 * @param {number} n 
 * @param {number} k 
 * @returns {array}
 */
function lastKseq(n, k){
    let array = [1];
    for(let i = 1; i < n; i++){
        //Calculate the sum of previous k elements
        let sum = 0;
        //! CREATE A FOR LOOP where {j}:
        //!  - STRATS FROM 1 ELEMENT BACK
        //!  -         {j} >= i - k             &&      {j} >= 0 
        //! This condition ensures that we only consider the previous k elements if they exist
        //!  - SUBTRACT {j} by ONE for every iteration of the loop!!!

        for(let j = i - 1; j >= i-k && j >= 0; j--){
            sum += array[j];
        }
        array.push(sum);
    }
    return array;
}