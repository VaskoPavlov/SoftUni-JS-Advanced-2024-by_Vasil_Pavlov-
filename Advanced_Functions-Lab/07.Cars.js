/**
 * Task: Write a closure that can create and modify objects. All created objects should be kept 
 * and be accessible by name. You should support the following functionality:
•	create <name> - creates an object with the supplied <name>
•	create <name> inherits <parentName> - creates an object with the given <name>, 
that inherits from the parent object with the <parentName>
•	set <name> <key> <value> - sets the property with key equal to <key> to <value> 
in the object with the supplied <name>.
•	print <name> - prints the object with the supplied <name> in the format 
"<key1>:<value1>,<key2>:<value2>…" - the printing should also print all inherited properties 
from parent objects. Inherited properties should come after own properties.

Input
The input will come as an array of strings - each string represents a command to be executed 
from your closure.

Output
For every print command - you should print on the console all properties of the object 
n the above-mentioned format.
Constraints
•	All commands will always be valid, there will be no nonexistent or incorrect input.

Examples
Input	                    Output
['create c1',               color:red
'create c2 inherit c1',     model:new,color:red
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
 */
/**
 * @param {string[]} input 
 */
function cars(input) {
 
    let result = {};
 
    let creation = processor();
 
    for (let line of input) {
        if (line.includes('create') && !line.includes('inherit')) {
            let [command, name] = line.split(' ');
            creation[command](name);
        }
 
        if (line.includes('create') && line.includes('inherit')) {
            let [command1, name1, command2, name2] = line.split(' ');
            creation[command2](name1, name2);
        }
 
        if (line.includes('set')) {
            let [command, name, property, string] = line.split(' ');
            creation[command](name, property, string);
        }
 
        if (line.includes('print')) {
            let [command, objectName] = line.split(' ');
            creation[command](objectName);
        }
    }
 
    function processor() {
 
        function create(name) {
            result[name] = {};
            let objCopy = result[name];
        }
 
        function inherit(name1, name2) {
            result[name1] = Object.create(result[name2]);
        }
 
        function set(name, property, string) {
 
            result[name][property] = string;
        }
 
        function print(objectName) {
            let temp = [];
            for (key in result[objectName]) {
                temp.push(`${key}:${result[objectName][key]}`);
            }
            console.log(temp.join(','));
        }
 
        return {
            create,
            inherit,
            set,
            print
        }
    }
}