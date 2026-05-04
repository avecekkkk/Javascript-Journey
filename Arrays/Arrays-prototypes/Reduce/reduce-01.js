const numbers = [5, 10, 15];

const add = (acc, currentvalue) => {
    return acc + currentvalue;
}

const total = numbers.reduce(add,0);
console.log(total);

/***************************************************************************************************************************** */

const prices = [29.99, 5.00, 10.50, 15.00]

const totals = (acc,currentvalue) => {
    return acc + currentvalue;
}

const finalTotal = prices.reduce(totals,0)
console.log(finalTotal);

/*******************************************************Flatten Array**********************************************************/

const fruits = [['apple', 'banana'], ['orange'], ['pear', 'mango']];
const flatten = (acc,currentValue) => {
    return [...acc, ...currentValue]
}
const flatArray = fruits.reduce(flatten,[])
console.log(flatArray);








