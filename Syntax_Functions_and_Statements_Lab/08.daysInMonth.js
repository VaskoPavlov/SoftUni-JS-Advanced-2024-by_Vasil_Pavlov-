/**
 * Task: Write a JavaScript function to get the number of days in a month.
 * The input comes as two numeric parameters. 
 * The first element is the month, the second is the year.
 * The output must return the number of days in a month for a given year.
 */

/** This is a solution with Date Object */
/**
 * @param {number} month 
 * @param {number} year 
 */
function daysInMonth(month, year){
    const days = new Date(year, month, 0).getDate();
    console.log(days)
}
/*------------------------------------------------------------------*/
/** This is a solution without using the build in Date Object in JS */
/**
 * @param {number} month 
 * @param {number} year 
 */
function daysInMonth(month, year){
    switch (month){
        case 2:
            if (Number(year) % 4 === 0){
                console.log(29);
            } else {
                console.log(28);
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log(30);
            break;
        default:
            console.log(31);
            break;
    }
}