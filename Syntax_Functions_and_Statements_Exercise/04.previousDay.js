/**
 * Task: Write a JS function that calculates the date of the previous day by a given year, month, and day.

 * The input comes as three numeric parameters. 
 * The first element is the year, the second is the month and the third is the day.
 * The output must be the return date of the previous day in the format: `{year}-{month}-{day}`
 */

/**
 * @param {number} year 
 * @param {number} month 
 * @param {number} date 
 */
function previousDay(year, month, date) {
    const today = new Date(year, month - 1, date);

    today.setDate(today.getDate() - 1);
    console.log(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);
}

// Solution without using new Date 
/**
 * @param {number} year 
 * @param {number} month 
 * @param {number} day 
 */
function preDay(year, month, day){
    switch(day) {
        case 1:
            switch(month){
                case 1:
                    year -= 1;
                    month = 12;
                    day = 31;
                    break;
                case 3:
                    month -= 1;
                    if (year % 4 === 0){
                        day = 29;
                    } else {
                        day = 28;
                    }
                    break;
                case 2:
                case 4:
                case 6:
                case 8:
                case 9:
                case 11:
                    month -= 1;
                    day = 31;
                    break;
                default: 
                    month -= 1;
                    day = 30;
                    break;
            }
            break;
        default:
            day -= 1;
    }
    console.log(`${year}-${month}-${day}`);
}