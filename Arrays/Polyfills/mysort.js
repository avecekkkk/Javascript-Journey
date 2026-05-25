/**SIGNATURE: INput : Take Function as an input
 * Return : Return an array that reference to the original array inshort no copy is made
 */

if (!Array.prototype.mySort) {
  Array.prototype.mySort = function (compareFn) {
    const arr = this; // reference to the original array

    // Default comparator: convert elements to strings and compare UTF-16 code units
    if (compareFn === undefined) {
      compareFn = (a, b) => {
        const strA = String(a);
        const strB = String(b);
        if (strA < strB) return -1;
        if (strA > strB) return 1;
        return 0;
      };
    }

    const len = arr.length;

    // Bubble sort: repeatedly swap adjacent elements if out of order
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (compareFn(arr[j], arr[j + 1]) > 0) {
          // swap
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr; // sort mutates and returns the same array
  };
}

const numbers = [40, 1, 5, 200];
numbers.mySort()
console.log(numbers);

