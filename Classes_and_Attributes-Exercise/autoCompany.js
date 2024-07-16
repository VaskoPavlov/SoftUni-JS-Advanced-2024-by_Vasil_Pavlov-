/**
 * Task: You are tasked to create a register for a company that produces cars. You need to store how many
 *  cars have been produced from a specific model of a specific brand.
Input
The input comes as array of strings. Each element holds information in the following format:
"{carBrand} | {carModel} | {producedCars}"
The carBrand and carModel are strings, the producedCars are numbers. If the carBrand you’ve received 
already exists, just add the new carModel to it with the produced cars as its value. 
If even the carModel exists, just add the given value to the current one.
Output
As output, you need to print - for every car brand, the car models, and a number of cars produced 
from that model. The output format is:
`{carBrand}
  ###{carModel} -> {producedCars}
  ###{carModel2} -> {producedCars}
  ...`
The order of printing is the order in which the brands and models first appear in the input. 
The first brand in the input should be the first printed and so on. For each brand, the first model 
received from that brand, should be the first printed and so on.
 */
/**
 * @param {string[]} input 
 */
function carRegister(input) {
    let register = {};

    for (let i = 0; i < input.length; i++) {
        let [brand, model, quantity] = input[i].split(' | ');
        quantity = Number(quantity);

        if (!register[brand]) {
            register[brand] = {};
        }

        if (!register[brand][model]) {
            register[brand][model] = 0;
        }

        register[brand][model] += quantity;
    }

    for (let brand in register) {
        console.log(brand);
        for (let model in register[brand]) {
            console.log(`###${model} -> ${register[brand][model]}`);
        }
    }
}