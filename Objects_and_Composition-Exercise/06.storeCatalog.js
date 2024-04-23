/**
 * Generates a catalogue of products, sorted by the first letter of each product and then by product name.
 * @param {Array} input - An array of strings containing products and their prices.
 * @returns {string} - A string containing the lowest price for each product in each town.
 */

function storeCatalogue(input) {
    if (!Array.isArray(input)) {
        throw new Error('Invalid input: Must be an array');
    }

    let result = {};
    for (let line of input) {
        let [product, price] = line.split(' : ');
        price = Number(price);
        if (isNaN(price)) {
            throw new Error(`Invalid price for ${product}`);
        }
        let firstLetter = product[0];
        if (!result[firstLetter]) {
            result[firstLetter] = [];
        }
        result[firstLetter].push({ product, price });
    }

    let output = [];
    let sortedLetters = Object.keys(result).sort();
    for (let letter of sortedLetters) {
        output.push(letter);
        let sortedProducts = result[letter].sort((a, b) => a.product.localeCompare(b.product));
        for (let { product, price } of sortedProducts) {
            output.push(`  ${product}: ${price}`);
        }
    }

    return output.join('\n');
}