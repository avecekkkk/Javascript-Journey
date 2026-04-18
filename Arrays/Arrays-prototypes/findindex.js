/** the findindex() method of array instances return the index of the first element in an array
 * that satisfies the provided arguments, if it satisfied the given argguement it return 1 as an output or negative 1/-1
 * 
 * syntax : findindex(callbackfn) || findindex(callbackfn, arguments)
 */

const number = [1,2,4,5,3,76,43,32]

const islargNum = (element) => element > 40; //here we are finding the index of large number

console.log(number.findIndex(islargNum));

const names = ['john', 'will', 'ram', 'shyam']

const nameresult = (element) => element.length > 2;
console.log(names.findIndex(nameresult));


/** You have an array of book objects, each with a title and a pages property.
 *  Find the index of the first book that has more than 300 pages. */


const bookdetails = [
    {name: "alchemist", page: 200},
    {name: "kafka on the shore", page: 550},
    {name: "shiddhartha", page: 250},
    {name: "Dune", page: 600}
]

let bookpage = 300;
const fatbook = (book) => book.page > bookpage;
console.log(bookdetails.findIndex(fatbook, bookpage));


/**You have an array of students, each with a name and a list of scores. 
 * Find the index of the first student whose average score is greater than 70. */

const students = [
    {name: "alice", scores: [23,65,76]},
    {name: "wilson", scores: [80,65,46]},
    {name: "max", scores: [43,95,76]}
]

const averagescore = (student) => {
    const sum = student.scores.reduce((acc,score) => acc + score, 0);
    return sum / student.scores.length;
};

const index = students.findIndex((student) => averagescore(student) > 70);

console.log(index);

//Alternative Mehtod

const employees = [
    {name: "apex", scores: [23,65,76]},
    {name: "wil", scores: [80,65,46]},
    {name: "maxi", scores: [43,95,76]}
]

const empaveragescore = (employee) => {
    let sum = 0;
    for(let i=0; i<employee.scores.length; i++){
        sum += employee.scores[i];
    }
    return sum/employee.scores.length;
};

const employeescore = employees.findIndex((employee) => empaveragescore(employee) > 70);

console.log(employeescore);

