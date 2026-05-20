if(!Array.prototype.myfindindex){
    Array.prototype.myfindindex = function(userFn){
        let value = -1;
        for(let i=0; i<this.length; i++){
            if(userFn(this[i])){
                value = i
            }
        }

        return value;
    }
}

const arrays = [5, 12, 8, 130, 44];

const isLargerNumber = arrays.myfindindex((element) => element > 500);

console.log(isLargerNumber);
