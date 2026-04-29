/**Introduction : The map() method of Array instances creates a new array populated with the results of calling 
 * a provided function on every element in the calling array. 
 * SYNTAX : map(callbackfn, thisarg)
 * inside callback function it takes three argument 1.element, 2.index, 3. array
 * Example: array.map((element,index, array) => {})
 * */

//1. Given an array of numbers [1, 3, 4, 5, 7], use map() to create a new array where each number is doubled
const nums1 = [1, 3, 4, 5, 7];

const doubled = nums1.map(num => num * 2);

console.log(doubled);

//2. Given an array of strings ['apple', 'banana', 'cherry'], use map() to create a new array with each string converted to uppercase.

const fruits = ['apple', 'banana', 'cherry']

const uppercase = fruits.map(fruit => {
    return fruit.toLocaleUpperCase();
})

console.log(uppercase);


//3.Given an array of numbers [10, 20, 30], use map() to subtract 5 from each number.

const num3 = [10, 20, 30]

const subNum = num3.map(number => {
    return number-5;
})

console.log(subNum);


//4.Given an array of objects like [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }],
//  use map() to create a new array of just the names.

const biodata = [
    {
        name: 'Alice',
        age: 25
    },
    {
        name: 'Bob',
        age: 30
    }
]

const nameArray = biodata.map((data) =>{
    return data.name
})

console.log(nameArray);


//5.Given an array of numbers [5, 10, 15], use map() to create a new array that 
// represents each number as a string with a prefix, for example "Value: 5".

const num5 = [5,10, 15]

const labeled = num5.map(num => {
    return `Value: ${num}`;
});

console.log(labeled);



