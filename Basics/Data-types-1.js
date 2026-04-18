/* PRIMITIVE DATA TYPES */

let studentName="nano";

console.log(typeof studentName); // String

 let isPaid = false

console.log(typeof isPaid); // boolean

let phoneNum = 9876543210

console.log( typeof phoneNum); // int

let address = "ktm";

let secondaryadd = null // null

console.log(secondaryadd);


let course;

console.log(typeof course); // undefined

let studentID = 98765432123456888888888n; // for bigint declaration use "n" as sufflix

console.log(typeof studentID); // bigint


/* NON-PRIMITIVE */

/* ARRAY */

let fruits = ['mango', 'apple', 'pineapple', 'guava']

console.log(typeof fruits);

let inner = [ 'xyzsdr', 'jnifhts', 'kpolsjfty',]

let outer = ['skjfnd', 'kdjdsksk', inner, 'insdnr'] // array inside array which doesn't hold the data but the reference address of inner array

console.log(outer[2]); // output : [ 'xyzsdr', 'jnifhts', 'kpolsjfty' ]


console.log(typeof inner); // object : it store based on index-value pair where it index start from 0


/* OBJECTS */

let  employee = {
    name : 'avecek',
    address: 'ktm',
    empID: 789456,
    department: 'data accquisition',
    yearExperience: '3'
}

console.log(typeof employee); // object




