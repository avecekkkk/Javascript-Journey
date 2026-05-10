/**The foreach method of array instance execute the provided function for each array element / it return undefned but howver it iterate over data to do side effects
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
