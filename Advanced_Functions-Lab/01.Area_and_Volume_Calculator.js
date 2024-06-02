/**
 * Task: Write a function that calculates the area and the volume of a figure, 
 * which is defined by its coordinates 
(x, y, z).
area()
function area() {
    return Math.abs(this.x * this.y);
};

vol()
function vol() {
    return Math.abs(this.x * this.y * this.z);
};

solve()
function solve(area, vol, input) {
    //ToDo....
}
Input
You will receive 3 parameters -  the functions area and vol and a string, which contains the figures' 
coordinates. 
For more information check the examples.
Output
The output should be returned as an array of objects. Each object has two properties: 
the figure's area and volume.
[
  { area: ${area1}, volume: ${volume1} },
  { area: ${area2}, volume: ${volume2} },
  . . .
]
 */
/**
 * @param {Function} areaFn 
 * @param {Function} volFn 
 * @param {JSON} input 
 * @returns {[]}result
 */
function solve (areaFn, volFn, input) {
    const data = JSON.parse(input);
    const result = [];
    
    for (const fig of data) {
        result.push({
            area: areaFn.call(fig),
            volume: volFn.call(fig)
        });
    }
    return result;
}