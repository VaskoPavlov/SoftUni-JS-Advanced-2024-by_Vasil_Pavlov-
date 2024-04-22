/**
 * Creates an inventory of heroes from the given input.
 * @param {Array} input - An array of strings containing hero information.
 */

function heroicInventory(input) {
    if (!Array.isArray(input)) {
        throw new Error('Invalid input: Must be an array');
    }

    let result = [];
    for (let line of input) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        if (isNaN(level)) {
            throw new Error(`Invalid level for ${name}`);
        }
        items = items ? items.split(', ') : [];
        result.push({ name, level, items });
    }
    console.log(JSON.stringify(result));
}