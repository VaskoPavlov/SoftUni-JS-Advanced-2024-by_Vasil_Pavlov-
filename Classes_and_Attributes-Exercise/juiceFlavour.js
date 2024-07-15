/**
 * Task: You will be given different juices, as strings. You will also receive quantity as a number. 
 * If you receive a juice that you already have, you must sum the current quantity of that juice,
 *  with the given one. When a juice reaches 1000 quantity, it produces a bottle. 
 * You must store all produced bottles and you must print them at the end.
Note: 1000 quantity of juice is one bottle. If you happen to have more than 1000, 
you must make as many bottles as you can, and store what is left from the juice.
Example: You have 2643 quantity of Orange Juice – this is 2 bottles of Orange Juice and 643 quantity left.
Input
The input comes as an array of strings. Each element holds data about a juice and quantity in the following format:
"{juiceName} => {juiceQuantity}"
Output
The output is the produced bottles. The bottles are to be printed in the order of obtaining the bottles. 
Check the second example below - even though we receive the Kiwi juice first,
 we don’t form a bottle of Kiwi juice until the 4th line, at which point we have already created 
Pear and Watermelon juice bottles, thus the Kiwi bottles appear last in the output.
 */
/**
 * @param {string[]} input 
 * @returns {string} result
 */
function produceBottles(input) {
    let juices = {};
    let bottles = {};

    for (let line of input) {
        let [juiceName, juiceQuantity] = line.split(' => ');
        juiceQuantity = Number(juiceQuantity);

        if (!juices.hasOwnProperty(juiceName)) {
            juices[juiceName] = 0;
        }

        juices[juiceName] += juiceQuantity;

        while (juices[juiceName] >= 1000) {
            if (!bottles.hasOwnProperty(juiceName)) {
                bottles[juiceName] = 0;
            }

            bottles[juiceName]++;
            juices[juiceName] -= 1000;
        }
    }

    let result = '';
    for (let juice in bottles) {
        result += `${juice} => ${bottles[juice]}\n`;
    }

    return result.trim();
}

