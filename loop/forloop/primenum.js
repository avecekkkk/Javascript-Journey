function primenum(number){
    if(number<2) return false;
    for(i=2; i<=Math.sqrt(number); i++){
        if(number%2 === 0) return false;
    }
    return true;
}

console.log(primenum(37));
