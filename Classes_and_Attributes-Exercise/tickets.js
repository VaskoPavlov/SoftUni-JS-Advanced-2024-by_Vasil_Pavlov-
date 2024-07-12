/**
 * Task: Write a program that manages a database of tickets. A ticket has a destination, a price, 
 * and a status. Your program will receive two arguments - the first is an array of strings for ticket 
 * descriptions and the second is a string, representing a sorting criterion. 
 * The ticket descriptions have the following format:
<destinationName>|<price>|<status>
Store each ticket and at the end of execution return a sorted summary of all tickets, 
sorted by either destination, price, or status, depending on the second parameter that 
your program received. Always sort in ascending order (the default behavior for alphabetical sort). 
If two tickets compare the same, use order of appearance. See the examples for more information.
Input
Your program will receive two parameters - an array of strings and a single string.
Output
Return a sorted array of all the tickets that were registered.

 */
/**
 * @param {string[]} arrayStrings 
 * @param {string} sortCriteria 
 * @returns {string[]} result
 */
function ticketStatistic(arrayStrings, sortCriteria){
    let result = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    // V2 sort with static method
        static sort(arr, criteria){
            return arr.sort((a, b) => {
                return criteria === 'price' ?  
                    a[criteria] - b[criteria] :
                    a[criteria].localeCompare(b[criteria])}
            )
        }
    }

    for (const string of arrayStrings) {
        let [destination, price, status] = string.split('|')
        let myTicket = new Ticket(destination, price, status);
        result.push(myTicket);
    }
    // V2 return 
    return Ticket.sort(result, sortCriteria);

    // V1 sort with function

    // return sortTicket(result, sortCriteria);

    // function sortTicket(ticketArr, criteria) {
    //     return ticketArr.sort((a, b) => {
    //         return criteria === 'price' ?  
    //             a[criteria] - b[criteria] :
    //             a[criteria].localeCompare(b[criteria])}
    //     )
    // }

}