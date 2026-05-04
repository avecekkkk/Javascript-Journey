/********************************************************Tallying Votes********************************************************** */

/**Task: You have a list of fruit names representing "votes." Use reduce to create an object that shows how many votes each fruit got.
Array: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
Goal: Return { apple: 3, banana: 2, orange: 1 }.
Hint: Check if the fruit exists in your accumulator; if it does, increment it; if not, set it to 1. */

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

const tallying = (acc,curr) => {
    if(acc[curr]){  //acc  is object / [curr] set as key for object which means object.apple = 1
        acc[curr] += 1;

    }else {
        acc[curr] = 1;
    }

    return acc
}

const voteResult = fruits.reduce(tallying,{})
console.log(voteResult);

/**************************************************Price Category*****************************************************/

/**Task: You have a list of items with their prices. Use reduce to create an object that tells you how many "Cheap" items and how many "Expensive" items you have.

Criteria:

If the price is less than 50, it is "cheap".

If the price is 50 or more, it is "expensive". */

const items = [
  { name: 'Pen', price: 5 },
  { name: 'Laptop', price: 1200 },
  { name: 'Notebook', price: 15 },
  { name: 'Headphones', price: 150 },
  { name: 'Paperclip', price: 2 }
];
const prices = (acc,curr) => {
    const category = curr.price >=50 ? 'Expensive' : 'Cheap';

    if(acc[category]){
        acc[category] = acc[category] + 1;
    }else {
        acc[category] = 1
    }

    return acc
}

const result = items.reduce(prices,{})
console.log(result);
