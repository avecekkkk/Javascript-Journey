/**The foreach method of array instance execute the provided function for each array element / it return undefned but howver it iterate over data to do side effects
 * in simple term it just iterate over the data. no logic problem solving
 * syntax: foreach(callbackfn, thsargs)
 * foreach(element,index,array, thisargs)
 */

const number = [1,2,3,4,5,,6,7]
number.forEach((num)=> {
    return console.log(num);
    
})


const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 }
];

users.forEach((user)=> {
    console.log(`welcome ${user.name}! you are ${user.age} years old`);
    
})


const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Phone', price: 800 },
    { name: 'Tablet', price: 400 }
];

const expensiveproduct = products.filter((product) => product.price > 500);

expensiveproduct.forEach((product) => {
    console.log(`The expensive product is ${product.name} costing ${product.price}`);
    
})