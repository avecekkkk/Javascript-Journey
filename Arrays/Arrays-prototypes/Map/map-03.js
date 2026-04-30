//1. an array of users, each with a name, age, and a scores array (representing test scores). 
// Use map() to create a new array of objects where each object has the user’s name and their average score.

const students = [
    {name : 'Ram', age : 19, score:[48,55,78,54,67,87]},
    {name : 'shyam', age : 22, score : [33,45,76,54,88,67]},
    {name : 'guras', age: 20, score :[44,67,88,45,65,77]}
]

const filter = (student) => {
    let totalscore= 0;
    
    for(i=0; i<students.length; i++){
        for(j=0; j<student.score.length; j++){
            totalscore += student.score[j];
        }
    }
    const averageScore = totalscore/student.score.length
    return {name : student.name , averageScore: averageScore}
}

const result = students.map(student => filter(student))
console.log(result);
