/**
 * SIGNATURE: INPUT : Take a function as an input,
 * Return : Iterate on each element of an array and if condition met it return boolean True ortherwise False
 */

if(!Array.prototype.mysome){
    Array.prototype.mysome = function(userfn){
        for(let i=0; i<this.length; i++){
            if(userfn(this[i])){
                return true;
            }
        }
        return false;
    }
}

const array = [1, 9, 3, 7, 6];

const even = array.mysome((num) => num % 2 === 0);

console.log(even);
