/**
 * Task:You have been tasked to create a registry for different towns and their population.
 * 
 * Input
 * The input comes as array of strings. Each element will contain data for a town and 
 * its population in the following format: "{townName} <-> {townPopulation}"
 * If you receive the same town twice, you should add the given population to the current one.
 * Output
 * As output, you must print all the towns and their population.
*/

/**
 * @param {string[]} townsArr 
 */
function townPopulation(townsArr) {
    const towns = {};
    for (let townAsString of townsArr) {
        // Split each string into 'name' and 'population' using ' <-> ' as the separator
        let [name, population] = townAsString.split(' <-> ');
        population = Number(population);
        // Check if the town 'name' already exists in the 'towns' object
        if (towns[name] != undefined) {
        // If the town exists, add the 'population' to the existing value in 'towns'
        population += towns[name];
        }
        // Update the 'towns' object with the new 'population' value for the 'name'
        towns[name] = population;
    }
    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}