/**
 * Task: Write a function that displays information about the arguments which are passed to it 
 * (type and value) and a summary about the number of each type in the following format: 
`{argument type}: {argument value}`
Print each argument description on a new line. At the end print a tally with counts for each 
type in descending order, each on a new line in the following format:
`{type} = {count}`
If two types have the same count, use order of appearance. 
Do NOT print anything for types that do not appear in the list of arguments.

Input
You will receive a series of arguments passed to your function.
Output
Print on the console the type and value of each argument passed into your function.

Example
Input
'cat', 42, function () { console.log('Hello world!'); }

Output
string: cat
number: 42
function: function () { console.log('Hello world!'); }
string = 1
number = 1
function = 1

 */
/**
 * @param  {...any} data // series of aruments of different types (strings, numbers, functions)
 */
function argInfo(...data) {
    let res = {};

    for (let el of data) {
        let type = typeof(el);
        console.log(`${type}: ${el}`);
        if (!res.hasOwnProperty(type)){
            res[type] = 0;
        }
        res[type] += 1;
    }
    let sortedRes = Object.entries(res).sort((a, b) => b[1] - a[1])
    
    for (let [key, value] of sortedRes) {
        console.log(`${key} = ${value}`);
    }
}