function calculator(a, b, operator){
    switch(operator){
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/":
            if(b===0) return "Cannot divisible by zero";
            return a / b;
        default: return "unknown operator";
    }
}

console.log(calculator(23, 12, "+"));


