class Person{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }

    //Method below
    getFullname() {
        return `Fullname ${this.fname} ${this.lname}`
    }
}

const p1 = new Person('Ram', 'Nepal');
const p2 = new Person('Shyam', 'Oli');

console.log(p1.getFullname());
console.log(p2.getFullname());



