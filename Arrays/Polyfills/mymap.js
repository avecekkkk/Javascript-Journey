/**Signatue: 
 * Iteration ? -> Iterate on each element of array
 * Return ? -> New Array 
 * Input ? -> Take function(), element, index, array
*/



if(!Array.prototype.mymap) {
    Array.prototype.myMap = function (userFn){
        originalArr = this;
        const valueAcc = [];
        for(let i = 0; i < originalArr.length; i++){
            const value = userFn(this[i], i)
            valueAcc.push(value);
        }
        return values;
    };
}
// const numbers = [2,3,4,5,6,7]

// const finalresult = numbers.myMap((x) => x*2);

// console.log(finalresult);

// if (!Array.prototype.mymap) {
//     Array.prototype.mymap = function(userfn){
//         const returnArr = []
//         originalArr = this;
//         for(let i = 0; i < originalArr.length; i++){
//             const value = userfn(originalArr[i], i, originalArr)
//             returnArr.push(value);
//         }

//         return returnArr;
//     }
// }

// if (!Array.prototype.mymap) {
//     Array.prototype.mymap = function(userfn) {
//         const returnArr = [];
//         const originalArr = this;          // ✅ declared with const
//         for (let i = 0; i < originalArr.length; i++) {
//             const value = userfn(originalArr[i], i, originalArr); // ✅ 3 args
//             returnArr.push(value);
//         }
//         return returnArr;
//     }
// }

const id = [1,2,3,4,5,6];

const updatedId = id.mymap((x) => x*2)

console.log(updatedId);

