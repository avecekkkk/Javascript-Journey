if(!Array.prototype.myfindindex){
    Array.prototype.myfindindex = function(userFn){
        let value = -1;
        for(let i=0; i<this.length; i++){
            if(userFn(this[i])){
                return value = i
            }
        }

        return value;
    }
}

const arrays = [5, 12, 8, 55, 130, 44];

const isLargerNumber = arrays.myfindindex((element) => element > 120);

console.log(isLargerNumber);
