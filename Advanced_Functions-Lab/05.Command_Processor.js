/**
 * Task: Write a program that keeps a string inside its context and can execute 
 * different commands that modify or print the string on the console.
append(string) - append the given string at the end of the internal string
removeStart(n) - remove the first n characters from the string, n is an integer
removeEnd(n) - remove the last n characters from the string, n is an integer
print - print the stored string on the console
Input
Check the examples below to see how your code will be executed.
Output
Whenever you receive the command print, the output should be printed on the console.
Examples
Sample Input	                  Output
let firstZeroTest = solution();   loa

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();	   

let secondZeroTest = solution();   34
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();	

 */
/**
 * Since this function returns multiple functions i have decided to list them like this!!!
 * @returns {Function} append,
 * @returns {Function} removeStart,
 * @returns {Function} removeEnd,
 * @returns {Function} print
 */
function solution() {
    let word = '';
    function append(string) {
        word += string;
    }
    function removeStart(n) {
        word = word.slice(n);
    }
    function removeEnd(n){
        word = word.slice(0, -n);
    }
    function print(){
        console.log(word);
    }
    return {
        append,
        removeStart,
        removeEnd,
        print
    };
}