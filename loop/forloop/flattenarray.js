function flattenarray(ary){
    let flatarray = []
    for(let item of ary){
        if(Array.isArray(item)){
            for(let subitem of item){
                flatarray.push(subitem)
            }        
        }else {
            flatarray.push(item)
        }
    }
    return flatarray
}

let number = [1, [4,5], [7,9,1], 6, 3, 5]
console.log(flattenarray(number));
