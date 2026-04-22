/**You have an array of books. Each book has a title, an author, and a rating. Use findIndex to locate
 *  the first book with a rating higher than 4.5. Then, after finding it, increase its rating by 0.5, 
 * and log the updated array. */

const books = [
    { title: "Book A", author: "Author X", rating: 4.2 },
    { title: "Book B", author: "Author Y", rating: 4.8 },
    { title: "Book C", author: "Author Z", rating: 3.9 }
];

const highratingbook = books.findIndex((book) => book.rating > 4.5);

if(highratingbook !== -1){
    books[highratingbook].rating += 0.5;
}

console.log(books);


/**Imagine you have an array of students. Each student has a name, a class, and a list of scores. 
 * Use findIndex to find the first student in class "Math" whose average score is greater than 85. 
 * After you find that student, increase their average score by 5 points (just for practice) and log the updated array.
 */

const students = [
    { name: "Sara", class: "Math", scores: [98, 92, 95] },
    { name: "Tom", class: "Science", scores: [70, 75, 56] },
    { name: "Ram", class: "Math", scores: [77, 68, 88] }
];

const mathscore = (student) => {
    let totalscores = 0
    let averages = 0
    for(let i = 0; i< students.length; i++){
        if(student.class == "Math"){
            for(let j =0; j<student.scores.length; j++){
                totalscores += student.scores[j]
                
            }
        }
    }
    return averages = totalscores/student.scores.length;
    
}

const studentindex = students.findIndex((student) => mathscore(student) > 85);
console.log(studentindex);

/**You have an array of employees. Each employee has a name, a department, and a list of hoursWorked. 
 * Use findIndex to find the first employee in the "Sales" department whose total hours worked is greater than 100. 
 * After you find that employee, give them a bonus by adding 10 hours to their total, and then log the updated array. */

const employees = [
    {name: "alice", department: 'Networking' , hourworked: [12, 17.5, 23, 48, 65]},
    {name: "maxi", department: 'Sales' , hourworked: [32, 17.5, 23, 48, 6.5]},
    {name: "dope", department: 'Sales' , hourworked:  [22, 7.5, 23, 4.8, 60]}
]

const salesemployee = (employee) => {
    let totalworked = 0
    for(let i=0; i<employees.length; i++){
        if(employee.department == "Sales"){
            for(let j=0; j<employee.hourworked.length; j++){
                totalworked += employee.hourworked[j]
            }
        }
    }
    return totalworked;
}

const superemployee = employees.findIndex((employee) => salesemployee(employee) > 100)
if(superemployee != -1){
    employees[superemployee].hourworked.push('10')
}
console.log(employees);

