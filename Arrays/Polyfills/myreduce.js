if(!Array.prototype.myreduce) {
    Array.prototype.myreduce = function(callbackfn, currentvalue){
        const arr = this;
        let accumulator;
        let currentindex;
        if(currentvalue){
            accumulator = currentvalue;
            currentindex = 0
        }else {
            accumulator = this[0]
            currentindex = 1
        }
        
        for(let i=0; i<this.length; i++){
            accumulator = callbackfn(accumulator,this[i], i, this)
        }

        return accumulator;

    }
}

const numbers = [1,2,3,4,5]

const result = numbers.myreduce((acc,currentvalue) => acc + currentvalue, 0)

console.log(result);


