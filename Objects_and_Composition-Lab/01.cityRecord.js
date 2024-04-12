/**
 * Task: You will receive a city’s name (string), population (number), 
 * and treasury (number) as arguments, which you will need to set as properties of an object and 
 * return it.
 */

/**
 * @param {string} city 
 * @param {number} population 
 * @param {number} treasury 
 * @returns {object} record
 */
function cityRecord (city, population, treasury) {
    let record = {
        name: city,
        population: population,
        treasury: treasury
    }

    return record
}