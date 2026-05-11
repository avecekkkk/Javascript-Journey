/**The every method of an array instances return a false value if it find an elements in a array that does not 
 * satisfy the provided function otherwise it will return true.
 * SYNTAX: every(callbackfn, thisArgs) || callbackfn -> element,index,array
 * 
 */

const numbers = [[2,3,4,5,6,],[2,3,4,5,6],[7,6,54,3]]


const checkNestedArray = (value) => Array.isArray(value);

const check = numbers.every(checkNestedArray);

console.log(check);

//check all number are positive

const Nums = [12,43,56,32,-12,54];

const checkpositive = (num) => num > 0;

const isAllPositive = Nums.every(checkpositive)

console.log(isAllPositive);



