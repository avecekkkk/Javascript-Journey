function fizzbuzz(n) {
    let number = []
    for(i = 1 ; i<=n; i++){
        if(i % 3 === 0 && i % 5 === 0) number.push("Fizzbuzz")
        else if(i%3 ===0) number.push("fizz")
        else if(i % 5 === 0) number.push("buzz")
        else number.push(i);

    }
    return number;
}

console.log(fizzbuzz(50));
