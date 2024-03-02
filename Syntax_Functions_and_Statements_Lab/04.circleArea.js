/**
 * Task: Write a function that takes a single argument as an input. 
 *       Check the type of input argument. If it is a number, 
 *       assume it is the radius of a circle and calculate the circle area. 
 *       Print the area rounded to two decimal places.
 * 
 *       If the argument type is NOT a number, 
 *       print the following text on the console: 
 *       `We can not calculate the circle area, 
 *       because we receive a {type of argument}.`
 *
 *       The input comes as a single argument passed to your function.
 * 
 * This task won't have set type with JS doc for arg,
 * because we need to show what the fn does with non-number arg!
 */
function circleArea(arg){
    if (typeof(arg) === 'number'){
        let area = Math.PI * Math.pow(arg, 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (arg)}.`)
    }
}