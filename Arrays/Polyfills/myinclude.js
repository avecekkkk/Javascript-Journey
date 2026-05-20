


// for(i= -5; i<= number.length; i--){
//     console.log(number[i]);
    
// }

if(!Array.prototype.myincludes){
    Array.prototype.myincludes = function(value, startindex){
        let backupindex = 0;
        let result = false
        if(startindex >= 0 ){
            for(let i = startindex; i<=this.length; i++){
                if(this[i] === value){
                     result = true;
                }
            }
        }else if(!startindex){
            startindex = backupindex;
            for(let i = startindex; i<=this.length; i++){
                if(this[i] === value){
                     result = true;
                }
            }
        }else {
            for(let i = this.length + startindex; i<this.length; i++){
                if(this[i] === value){
                    result = true;
                }
        }
    }
        
        return result;
    }
}

const number = [1,2,3,4,5,6];
const isNumthere = number.myincludes(6,-4);
console.log(isNumthere);

// //Another method of includes polyfill
// if(!Array.prototype.nextincludes){
//     Array.prototype.nextincludes = function(element,firstindex) {
//         if(firstindex === undefined){
//             firstindex = 0;
//         }
//         if(firstindex < 0){
//             firstindex = this.length + firstindex;
//         }

//         for(let i=firstindex; i<= this.length; i++){
//             if(this[i] === element){
//                 return true;
//             }
//         }
//         return false;
//     }
// }

const id = {
    name: 'aveec',
    roll: 4
}

if(id == Object(id)){
    console.log(`This is an object`);
    
}


