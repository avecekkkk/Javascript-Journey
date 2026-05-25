/**
 * Signature :  Input : Take Function as an input
 * Return : Return a shallow copy of an array that match an argument, if not return empty array.
 * 
 */

if(!Array.prototype.myfilters){
    Array.prototype.myfilters =  function(userfn){
        let newarray = []
        for(let i = 0; i<this.length; i++){
            if(userfn(this[i])){
                newarray.push(this[i])
            }
        }
        return newarray;
    }
}

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.myfilters((word) => word.length > 6);
console.log(result);
