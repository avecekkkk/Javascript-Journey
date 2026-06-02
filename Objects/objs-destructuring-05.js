
const user = {
    name: 'ghanshayam',
    username: 'gendu',
    age: 24,
    email: "gendu@gmail.com",
    phoneno:  +12344567788
}

const {name, age, ...others} = user;
console.log(name, age);
console.log(others);


const demouser = {
    userid : 23,
    department: 'xyz',
    contact : {
        Telphone : 203543222,
        mobile: 9876543210,
    },
    address: 'Nepal'

}

const {userid, department, contact : {Telphone, mobile}} = demouser

console.log(Telphone);
console.log(mobile);



const book = {
    bookname : 'the alchemist',
    page: 200,
    author : "Paolo coelho",
    publisher : 'Penguine publisher'
}

function bookdetails({bookname, page}){
    return `This ${bookname} book consist of ${page} page`
}

//passing the object in function parameters
console.log(bookdetails(book));




 







