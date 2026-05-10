/** The find method of array instance return the first element of an array that satifies the proivided testing function
 * syntax :  find(callbackfn, thisArgs) || callbackfn -> index,element,array
 */

//find the first element that is greater then 50
const numbers = [21,4,56,44,76,23,50];

const finding = (num) => {
    return num >= 50
}

const found  = numbers.find(finding);
console.log(found);

//find the fist object in the array that has price greater then 600

const products = [
    { name: 'Laptop', price: 500 },
    { name: 'Phone', price: 800 },
    { name: 'Tablet', price: 400 }
];

const expensiveItem = (product) => {
    const expensive = product.price > 500;
    return expensive;
}

const result = products.find(expensiveItem);
console.log(result);


//find the first student across all classrooms who has a grade above, say, 90.

const classrooms = [
    {
        name: 'Class A',
        students: [
            { name: 'Alice', grade: 85 },
            { name: 'Bob', grade: 92 },
            { name: 'pob', grade: 90 }
        ]
    },
    {
        name: 'Class B',
        students: [
            { name: 'Charlie', grade: 78 },
            { name: 'David', grade: 95 }
        ]
    }
];
/**let topstudent = null;
for(const classroom of classrooms){
    const student = classroom.students.find((student) => student.grade >= 90);
    if(student) {
        topstudent = student;
        break;
    }
}

console.log(topstudent);

*/


const topStudents = classrooms
    .map(classroom => {
        const student = classroom.students.find(student => student.grade > 90);
        if (student) {
            return { name: student.name, grade: student.grade };
        }
        return null; // If no student, return null
    })

console.log(topStudents);

