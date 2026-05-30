/** 'this' keyword is not bound to an object when the function is created inside an object or class instance. it act as a dynamic placeholder
 * where value is decided only at the execution 
 * WHY 'THIS' KEYWORD IS NOT BOUND IN JS?
 * Maximun code resue and flexibility
 */

function greeting(){
    return `Hello ${this.name}`;
    
}

const person = {
    name: 'Hari',
    greet: greeting
}

console.log(person.greet());


const obj1 = {
    name: 'Bob',
    age: 24,
    jobStatus: 'Unemoloyed',
    intro(){
        return `Hi my name is ${this.name}, i am ${this.age} years old and i am currently ${this.jobStatus}`;
    }
}

console.log(obj1.intro());


// A standalone, master function
function commonAttack() {
    return `${this.role} attacks dealing ${this.damage} damage!`;
}

const goblin = { role: 'Goblin', damage: 15 };
const knight = { role: 'Knight', damage: 45 };
const dragon = { role: 'Dragon', damage: 120 };

// We dynamically assign the SAME function reference to all of them
goblin.strike = commonAttack;
knight.strike = commonAttack;
dragon.strike = commonAttack;

// When executed, 'this' adapts instantly to the object on the left of the dot
console.log(goblin.strike()); // "Goblin attacks dealing 15 damage!"
console.log(knight.strike()); // "Knight attacks dealing 45 damage!"
console.log(dragon.strike()); // "Dragon attacks dealing 120 damage!"