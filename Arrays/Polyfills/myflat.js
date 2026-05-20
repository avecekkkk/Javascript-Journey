const arrays = [12,23,45, [1,2,3,4], [6,7,8], 23,54]

if(!Array.prototype.myflat){
    Array.prototype.myflat = function(value){
        let newArr = []
        for(let i=0; i<this.length; i++){
            if(Array.isArray(this[i])){
                newArr.push(...this[i]);
            }else {
                newArr.push(this[i])
            }
        }

        return newArr;
    }
}

console.log(arrays.myflat());
