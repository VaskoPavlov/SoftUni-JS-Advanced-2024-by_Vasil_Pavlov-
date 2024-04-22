/**
 * @param {string[]} input - An array of strings containing products and their prices.
 * @returns {string} - A string containing the lowest price for each product in each town.
 */

function lowestPricesInCities(input) {
    if (!Array.isArray(input)) {
        throw new Error('Invalid input: Must be an array');
    }

    let result = {};
    for (let line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (isNaN(price)) {
            throw new Error(`Invalid price for ${product}`);
        }
        if (!result[product]) {
            result[product] = { town, price };
        } else if (result[product].price > price) {
            result[product] = { town, price };
        }
    }

    let output = [];
    for (let product in result) {
        output.push(`${product} -> ${result[product].price} (${result[product].town})`);
    }
    return output.join('\n');
}