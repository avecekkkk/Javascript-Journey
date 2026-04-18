/** At method of array instance take an integer and return the value of that index from an array, also allowing the 
 negative integer to count back from the last item in the array.
 syntax : array.at(integer-value);
  */
const array = [ 12, 34, 54, 65, 23, 64 , 32, 56]

let index = 4;
let index2 = -2
console.log(`The index of ${index} return ${array.at(index)}`); //output: 23

console.log(`The index of ${index} return ${array.at(index2)}`); //output : 32




