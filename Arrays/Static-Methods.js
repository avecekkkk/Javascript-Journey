/* Array Static methods are methods that belong to the array class itself,  not to an individaul array instances.
list of array static methods are : from(), fromAsync(), isArray(), of() */

//isArray()
let Names = ['ram', 'shyam', 'ghanshyam']
console.log(Array.isArray(Names));


//from()

let villian = 'Thanos';
console.log(Array.from(villian, char => char.toUpperCase()));

let number = [1, 2, 3, 4 ,5]
let newNum = Array.from(number, x => x + 1);
console.log(newNum);

//fromAsync()


//of()

// Array.of() is a static method that create a new array instance from the value you give it .


console.log(Array.of('there', 'is', 2, 'dog'));
