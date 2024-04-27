/**
 * Task: Create a function that returns a special object, which keeps a list of numbers, 
 * sorted in ascending order. It must support the following functionality:
•	add(element) - adds a new element to the collection
•	remove(index) - removes the element at position index
•	get(index) - returns the value of the element at position index
•	size - number of elements stored in the collection
The correct order of the elements must be kept at all times, regardless of which operation is called. 
Removing and retrieving elements shouldn’t work if the provided index points outside 
the length of the collection (either throw an error or do nothing). 
Note the size of the collection is not a function.

Input / Output
The initial function takes no arguments and must return an object.
All methods on the object that expect input will receive data as parameters. 
Methods that have validation will be tested with both valid and invalid data. 
Any result expected from a method should be returned as its result.
 */

/**
 * @returns {Object}
 */
function createSortedList() {
    return {
        nums: [],
        add: function (n) {
            (i = this.nums.findIndex(a => a >= n)) == -1
                ? this.nums.push(n)
                : this.nums.splice(i, 0, n)

            this.size++
        },
        remove: function (i) {
            this.validateIndex(i)

            this.nums.splice(i, 1)
            this.size--
        },
        get: function (i) {
            this.validateIndex(i)

            return this.nums[i]
        },
        size: 0,
        validateIndex: function (i) {
            if (i < 0 || i >= this.size)
                throw new Error('Invalid index')
        }
    }
}

var myList = createSortedList();

// Generate random list of 20 numbers
var expectedArray = [];
for (let i = 0; i < 10; i++) {
    expectedArray.push(Math.floor(Math.random() * 200) - 100);
}
// Add to collection
for (let i = 0; i < expectedArray.length; i++) {
    myList.add(expectedArray[i]);
}

myList.get(0)

expectedArray.sort((a, b) => a - b);

console.log(expectedArray);
console.log(myList.nums);