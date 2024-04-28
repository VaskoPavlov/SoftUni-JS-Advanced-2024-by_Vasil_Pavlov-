// Task: Write a program that parses a series of instructions written in postfix notation and executes 
// them (postfix means the operator is written after the operands). 
// You will receive a series of instructions – if the instruction is a number, save it; otherwise, 
// the instruction is an arithmetic operator(+-*/) and you must apply it 
// to the most two most recently saved numbers. Discard these two numbers and in their place, 
// save the result of the operation – this number is now eligible to be an operand 
// in a subsequent operation. Keep going until all input instructions have been exhausted, 
// or you encounter an error.
// In the end, if you’re left with a single saved number, 
// this is the result of the calculation and you must print it. If there are more numbers saved, 
// then the user-supplied too many instructions and you must print "Error: too many operands!". 
// If at any point during the calculation you don’t have two numbers saved, 
// the user-supplied too few instructions and you must print "Error: not enough operands!".  
// See the examples for more details.

// Input
// You will receive an array with numbers and strings – the numbers will be operands and must be saved; 
// the strings will be arithmetic operators that must be applied to the operands.
// Output
// Print on the console on a single line the final result of the calculation or an error message, 
// as instructed above.


/**
 * @param {(number|string[])} props (Not really sure how to type correctly an array of both numbers and strings)
 */
function solve(props) {
    const calculator = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }

    let res = []

    for (const p of props) {
        if (Number.isInteger(p)) {
            res.push(p)
        } else {
            let [a, b] = res.splice(-2, 2)

            if (!Number.isInteger(a) || !Number.isInteger(b)) {
                console.log("Error: not enough operands!");
                return
            }

            res.push(calculator[p](a, b))
        }
    }

    console.log(res.length == 1 ? res[0] : "Error: too many operands!");
}

solve([7,
    33,
    8,
    '-',
    '*',
    '+'])