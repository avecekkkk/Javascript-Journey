const person = {
    fname: 'ram',
    lname: 'nepal',
    age: 24,
    gender: 'male',
    getFullname: function () {
        return `Fullname : ${this.fname} ${this.lname}`;
    }
}
const person2 = {
    fname: 'shyam',
    lname: 'oli'
}
console.log(person);
//console.log(person2.getFullname()); ❎

/**
 * PROBLEM: Object Literal Pattern has no reusability.
 * CODE PRINCIPLE VIOLATED : DRY (DO NOT REPEAT YOURSELF)
 * Each object above is created manually, one by one.
 * There is no shared blueprint — so every new person object
 * must redefine its own properties and methods from scratch.
 *
 * This causes two problems:
 *  1. CODE DUPLICATION — same properties and methods repeated every time
 *  2. NO CONSISTENCY  — person2 is missing getFullname(), 
 *                       nothing enforces a shared structure
 *
 *   ALTERNATIVE SOLUTION: FACTORY FUNCTION OR CLASS
 */


