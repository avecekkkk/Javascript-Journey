if(!Array.prototype.myfind){
    Array.prototype.myfind = function(userFn){
        for(let i=0; i<this.length; i++){
            if(userFn(this[i])){
                return this[i]
            }
        }
    }
}

const array = [5, 12, 8, 130, 44];

const found = array.myfind((Element) => Element > 10);
console.log(found);
