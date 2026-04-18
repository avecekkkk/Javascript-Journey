function largestnum(arg){
    let Largest = arg[0];
    for(i=1; i<=arg.length; i++){
        if(arg[i] > Largest) Largest = arg[i];
    }
    return Largest;
}

let number = [1,2,4,5,3,45,65]

console.log(largestnum(number));
