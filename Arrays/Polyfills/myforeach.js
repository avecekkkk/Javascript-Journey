if(!Array.prototype.myforeach) {
    Array.prototype.myforeach = function(userfn){
        originalArr = this;
        for(let i = 0; i < originalArr.length; i ++){
            userfn(originalArr[i], i)
        }
    }
}

const numbers = [1,2,3,4,5,6,7]

const result = numbers.myforeach(function(value, index){
    console.log(`The value of ${index} index is ${value}`);
    
})

