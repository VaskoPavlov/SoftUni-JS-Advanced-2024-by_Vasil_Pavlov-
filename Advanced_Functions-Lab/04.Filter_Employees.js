/**
 * Task: Write a program that filters the employees of your company. 
 * You should print the result in a specific format. You will receive 2 parameters (data, criteria). 
 * You should parse the input, find all employees that fulfill the criteria, and print them.
Input
You will receive a string with all the employees, and criteria by which you should sort the employees. 
If the criteria are "all" print all the employees in the given format.
Output
The output should be printed on the console. 
For more information check the examples.

Examples
Sample Input	                     Output
`[{
    "id": "1",                      0. Ardine Bassam - abassam0@cnn.com
    "first_name": "Ardine",         1. Kizzee Jost - kjost1@forbes.com
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
 */
/**
 * @param {Object[]} data 
 * @param {string} criteria 
 */
function filterEmployee(data, criteria) {
    const employees = JSON.parse(data);
    const [filterKey, filterValue] = criteria.split('-');
    let filteredEmployees = [];

    if (criteria === 'all') {
        filteredEmployees = employees.map((employee, index) => `${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
    } else {
        filteredEmployees = employees.filter(employee => employee[filterKey] === filterValue)
                                     .map((employee, index) => `${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
    }

    console.log(filteredEmployees.join('\n'));
}