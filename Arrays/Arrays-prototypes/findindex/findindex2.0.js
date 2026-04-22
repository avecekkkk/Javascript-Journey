/** Imagine you have an array of products, each with a name and a price. 
 * Use findIndex to locate the first product that costs more than $50. */

const products = [
  { name: "Book", price: 15 },
  { name: "Laptop", price: 999 },
  { name: "Pen", price: 2 }
];

const result = products.findIndex((product) => product.price > 50);
console.log(result);


/**you have an array of students, each with a name and a list of test scores. 
 * Use findIndex to find the first student whose highest score is greater than 90.
 */

const students = [
    { name: "Sara", scores: [88, 25, 85] },
    { name: "Tom", scores: [70, 75, 56] },
    { name: "ram", scores: [77, 68, 98]}
]
// in findscore function it go thorough every object and check for the highest score in the array
const findscore = (student) => {
    let marks = 0; 
    for(let i = 0; i < student.scores.length; i ++){
        if(student.scores[i] > marks){
            marks = student.scores[i]
        }
    }
    return marks;
}

const highestscore = students.findIndex((student) => findscore(student) > 90);
console.log(highestscore);

