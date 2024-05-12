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