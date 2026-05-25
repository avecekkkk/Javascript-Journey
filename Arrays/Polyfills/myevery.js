/**
 * SIGNATURE : INPUT : Take function as an input
 * Return : Return truthy value by default, if any of the condtion is failed from the array element it would return falsy value
 */

if(!Array.prototype.myevery){
    Array.prototype.myevery =  function(userfn){
        for(let i=0; i<this.length; i++){
            if(!userfn(this[i])){
                return false
            }
        }
        return true;
    }
}

const numbers = [2, 4, 6, 9];
const result = numbers.myevery((num) => num%2 === 0);
console.log(result);
