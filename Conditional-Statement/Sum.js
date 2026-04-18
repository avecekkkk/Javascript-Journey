let integer = [2, 9, 4, 5,7 ,2 ,4 ,5]
let sum = 0

for(i=0; i<integer.length; i++){
    sum = integer[i] + sum;  
    
}

console.log(`The total sum of interger array is ${sum}`);

/********************************************************************************************************* */

let digit = [2, 4, 6, 4, 9, 7]

function sumfac(number){
    let sum = 0;
    for(i=0;i<number.length; i++){
        sum = number[i] + sum
    }
    return sum
}

console.log(`The total sum of Array digit is ` , sumfac(digit));
