/** 
 * 90 >= A
 * 80 >= B
 * 70 >= C
 * 60 >=D
 * 
 */

function calculateGrade(marks) {
    if(marks >= 90){
        return 'A'
    } else if(marks >= 80){
        return 'B'
    } else if(marks >=70){
        return 'C'
    } else if(marks >= 60){
        return 'D'
    } else {
        return 'fail'
    }
}

let result = calculateGrade(87);
console.log(result); // B

//OR
console.log(calculateGrade(78)); // C

