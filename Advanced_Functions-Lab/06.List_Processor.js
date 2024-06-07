/**
 * Task: Using a closure, create an inner object to process list commands. 
 * The commands supported should be the following:
•	add <string> - adds the following string in an inner collection.
•	remove <string> - removes all occurrences of the supplied <string> 
from the inner collection.
•	print - prints all elements of the inner collection joined by ",".

Input
The input will come as an array of strings - each string represents a command 
to be executed from the command execution engine.
Output
For every print command - you should print on the console the inner collection joined by ",".
 */
/**
 * @param {string[]} arrayOfStrings 
 */
function listProcessor(arrayOfStrings) {
    let result = [];
    for (const stringToSplit of arrayOfStrings) {
        if(stringToSplit === 'print') {
            console.log(result.join(','));
        } else {
            const [command, string] = stringToSplit.split(' ');

            switch(command) {
                case 'add':
                result.push(string);
                    break;
                case 'remove':
                    let i = 0;
                    while(result.includes(string)){
                        let index = result.indexOf(string);
                        result.splice(index, 1);
                        i++;
                    }
                    break;
            }
            
        }
    }
}