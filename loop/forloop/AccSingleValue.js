function singleValue(arr){
    let seen = {}
    for(let item of arr){
        if(seen[item]){
            seen[item]++;
        }else {
            seen[item] = 1
        }
    }
    console.log(seen);
    
    let result = []
    for(let key in seen){
        if(seen[key] === 1){
            result.push(key)
        }
    }
    return result
}
let numbers = [ 23,5,5,6,78,78,21,34]
console.log(singleValue(numbers));
