/********************************************************Verified Users**************************************************************8 */
/**Task

Return only users who are:

verified
AND older than 18 */
const users = [
  { name: 'Ram', age: 20, verified: true },
  { name: 'Hari', age: 17, verified: true },
  { name: 'Sita', age: 25, verified: false },
  { name: 'Gita', age: 30, verified: true }
];

const verification = (user) => {
    const adult = user.age;
    return user.verified && adult;
}

const verifiedUsers = users.filter(verification);
console.log(verifiedUsers);

/***********************************************************Filter Available Products**********************************************************88 */
/**
 * Task

Return products that:

are in stock
AND price is less than 5000
 */
const products = [
  { name: 'Keyboard', price: 3000, inStock: true },
  { name: 'Monitor', price: 12000, inStock: true },
  { name: 'Mouse', price: 1500, inStock: false },
  { name: 'Headphone', price: 4000, inStock: true }
];
const availabilityCheck = (product) => {
    return product.price < 5000 && product.inStock;
}
const availableProd = products.filter(availabilityCheck);
console.log(availableProd);

/**************************************************************Filter Incomplete Tasks******************************************************8 */

const tasks = [
  { title: 'Study JS', completed: true },
  { title: 'Go Gym', completed: false },
  { title: 'Read Book', completed: false }
];

const taskcheck = (task) => {
    return !task.completed;
}

const failedtask = tasks.filter(taskcheck);

console.log(failedtask);


