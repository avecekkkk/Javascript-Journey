/**A filter method of an array instance create a shallow copy of a portion given array, filtered down to just the 
 * elements from the give array that pass the test implemented by the given function.
 * 
 * SYNTAX : filter(callbackfn, this arg)
 * filter(element, index, array, this arg)
 */

const fruits = ['apple', 'peach', 'orange', 'bergamout']

const longfruits = (fruit) => {
    return fruit.length >= 6;
}
fruits[1] = 'Pineapple';

const longfruitsresult = fruits.filter(longfruits);

console.log(longfruitsresult);

/**************************************************************Even Number Filter******************************************************8 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNum = (num) => {
    return num % 2 == 0 ;
}

const evenNumResult = numbers.filter(evenNum);

console.log(evenNumResult);


/**************************************************************Filter Positive Number******************************************************8 */

const nums = [-5, 3, -2, 10, -8, 7];

const positive = (num) => {
    const check = num > -0 ?? num
    return check;
}

const PositiveNum  = nums.filter(positive)
console.log(PositiveNum);

/**************************************************************Filter Active User******************************************************8 */

const users = [
  { name: 'Ram', active: true },
  { name: 'Hari', active: false },
  { name: 'Sita', active: true }
];

const active = (user) => {
    return user.active;
}

const activeUsers = users.filter(active);
console.log(activeUsers);

/**************************************************************Filter Expensive Products******************************************************8 */

const products = [
  { name: 'Keyboard', price: 800 },
  { name: 'Mouse', price: 500 },
  { name: 'Monitor', price: 12000 },
  { name: 'Headphone', price: 2500 }
];

const expensive = (product) => {
    return product.price >= 1000;
}

const expensiveProd = products.filter(expensive);

console.log(expensiveProd);
