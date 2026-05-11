/**The some method of an array instances return a true if it find an element in the array that satisfies the provided testing function.
 * SYNTAX: some(callbackfn, thisArgs) || callbackfn -> element,index,array
 */

const num = [12,42,54,67,90]

const checkeven = (num) => num % 2 === 0;
const isBiggerthen50 = (num) =>  num > 50;
const even = num.some(checkeven);
console.log(even);
const isbigger = num.some(isBiggerthen50)
console.log(isbigger); 
// it will falsy value until the given argument in function is met.


const fruits = ['apple', 'mango', 'pineapple', 'grapefruits'];
//checking length greater then 5
const checkLength = (element) => element.length  > 5;

const length = fruits.some(checkLength);

console.log(length);


