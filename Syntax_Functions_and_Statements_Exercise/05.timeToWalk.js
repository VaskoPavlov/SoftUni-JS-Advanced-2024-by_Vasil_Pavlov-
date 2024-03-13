/**
 * Task: Write a function that calculates how long it takes a student to get to university. 
 * The function takes three numbers:
•	The first is the number of steps the student takes from their home to the university
•	The second number is the length of the student's footprint in meters
•	Тhe third number is the student speed in km/h
 * Every 500 meters the student rests and takes a 1-minute break.
 * Calculate how long the student walks from home to university 
 * and print on the console the result in the following format: `hours:minutes:seconds`.
 * 
 * The input comes as three numbers.
 * The output should be printed on the console.
 */

/**
 * @param {number} steps 
 * @param {number} footPrintInMeters 
 * @param {number} kmPerHour 
 */
function timeToWalk (steps, footPrintInMeters, kmPerHour) {

    let meters = footPrintInMeters * steps;
    let breakTime = Math.floor((meters) / 500);
    let metersPerSecond = (kmPerHour * 1000) / 3600;
    
    let secondsToComplete = (meters / metersPerSecond) + breakTime * 60;
    let minutesToComplete = Math.floor(secondsToComplete / 60);
    let hoursToComplete = Math.floor(minutesToComplete / 60)
    let secondsAsResult = Math.round(secondsToComplete % 60);

    console.log(`${hoursToComplete < 10 ? '0' : ''}${hoursToComplete}:${minutesToComplete < 10 ? '0' : ''}${minutesToComplete}:${secondsAsResult < 10 ? '0' : ''}${secondsAsResult}`);
    
}