/**
 * Task: Write a JS program which takes first & last names as parameters and returns an object 
 * with firstName, lastName and fullName ( "{firstName} {lastName}" ) 
 * properties which should be all accessible, we discovered that "accessible" also means "mutable". 
 * This means that:
•	If firstName or lastName have changed, then fullName should also be changed.
•	If fullName is changed, then firstName and lastName should also be changed.
•	If fullName is invalid, you should not change the other properties.
•	 A valid full name is in the format: "{firstName} {lastName}".
 */

function createPerson(firstName, lastName) {
    let _firstName = firstName;
    let _lastName = lastName;

    return {
        get firstName() {
            return _firstName;
        },
        set firstName(newFirstName) {
            _firstName = newFirstName;
        },
        get lastName() {
            return _lastName;
        },
        set lastName(newLastName) {
            _lastName = newLastName;
        },
        get fullName() {
            return `${_firstName} ${_lastName}`;
        },
        set fullName(newFullName) {
            const parts = newFullName.split(' ');
            if (parts.length === 2) {
                _firstName = parts[0];
                _lastName = parts[1];
            }
        }
    };
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
console.log(person.firstName);
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
