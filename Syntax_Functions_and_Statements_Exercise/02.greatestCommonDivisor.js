/**
 * Task: Write a function that takes two positive numbers as input and computes the greatest common divisor.	
 * 
 * The input comes as two positive integer numbers.
 * The output should be printed on the console.
 */

/**
 * @param {number} firstnum 
 * @param {number} secondnum 
 */
function GCD (firstnum, secondnum) {
    let GCD = firstnum % secondnum;

    while(GCD !== 0) {
        firstnum = secondnum;
        secondnum = GCD;
        GCD = firstnum % secondnum;
    }
    
    console.log(secondnum);
}

//----------- V2 Solution --------------
/**
 * @param {number} num 
 * @param {number} divisible
 */
function divisor(num, divisible){
    let commonDivNum = 0;
    for(let i = 1; i <= divisible; i++){
        if(num % i === 0 && divisible % i === 0){
            commonDivNum = i;
        }
    }
    console.log(commonDivNum);
}