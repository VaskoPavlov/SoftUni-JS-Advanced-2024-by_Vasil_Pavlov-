/**
 * Task: You will be given an array of strings, which represents a list of all the restaurants 
 * with their workers.
 
When the [Send] button is clicked:
•	Display the best restaurant of all the added restaurants with its average salary and best salary. 
•	If there is a restaurant in the input array that is added more than once, 
you need to add new workers to the old ones and update the values of the average salary 
and the best salary.
•	The best restaurant is the restaurant with the highest average salary. 
If two restaurants have the same average salary the best restaurant is the first one added.
•	Display all workers in the best restaurant with their salaries.
The best restaurant's workers should be sorted by their salaries in descending order.
 
Input
The input will be received from the given textarea in the form of an array of strings. 
Each string represents a restaurant with its workers: 
["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"] 
 

Output
•	The output contains two strings
o	The first one is the best restaurant in the format:
`Name: {restaurant name} Average Salary: {restaurant avgSalary} Best Salary: {restaurant bestSalary}`
avgSalary and bestSalary must be formatted to the second decimal point.
o	The second one is all the workers in that restaurant in the following format:
`Name: {worker name} With Salary: {worker salary} 
Name: {worker2 name} With Salary: {worker2 salary} 
Name: {worker3 name} With Salary: {worker3 salary}…`

FOR THE BEST RESTAURANT
!!!<div id=bestRestaurant>
      <p>OUT THE OUTPUT HERE</p>
   </div>

!!! FOR THE WORKERS of the best restaurant
!!!<div id=workers>
      <p>OUT THE OUTPUT HERE</p>
   </div>
 */
function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   //* WE USE `>` inside {querySelector('#something>h1')} TO ACCESS DIRECT CHILD
   const input = document.querySelector('#inputs>textarea');
   const bestRestaurantsP = document.querySelector('#bestRestaurant>p');
   const workersP = document.querySelector('#outputs #workers p')

   function onClick () {
   //* making ARRAY from input
       let arr = JSON.parse(input.value);
       let restaurants = {};

       //*getting Individual Restaurants
       arr.forEach((line) => {
         const tokens = line.split(' - ');
         //* RESTAURANT NAME
         const name = tokens[0];
         //* WORKERS FOR THIS RESTAURANT
         const workersArray = tokens[1].split(', ');
         let workers = [];

         for (const worker of workersArray) {
            //* Splitting NAME & SALARY
            let workerTokens = worker.split(' ');
            //* SALARY
            const salary = Number(workerTokens[1])
            //* POPULATING => workers Array to OBJECT
            workers.push({name: workerTokens[0], salary});
         }

         //* CHECKING IF RESTAURANT EXIST
         //*   - YES - ADDING THE NEW NAMES
         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         }

         //* Sorting WORKERS by SALARY
         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
         let bestSalary = workers[0].salary;
         let averageSalary = 
            workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary,
         };
       });

       let bestRestaurantSalary = 0;
       let best = undefined;

       //* ACCESSING BIGGEST AVERAGE SALARY FROM THE RESTAURANTS
       for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestRestaurantSalary) {
            bestRestaurantSalary = restaurants[name].averageSalary;
            best = {name, ...restaurants[name]};
         }
       }

       //* POPULATING {bestRestaurantsP}
       bestRestaurantsP.textContent = `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;

        let workersResult = [];
        best.workers.forEach((worker) => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
        });

        workersP.textContent = workersResult.join(' ');
   }
}