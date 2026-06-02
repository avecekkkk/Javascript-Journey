
//Reference Assignment Example
const user = {
    firstname: 'ram',
    lastname: 'nepal',
    age: 24,
    address: "jhapa"
}

const userdetails = user;

console.log(userdetails);

userdetails.firstname = "shyam"

console.log(userdetails);

console.log(user === userdetails); //true



//Shallow Copy

const car = {
    carname : 'hyundai',
    origin : 'S.KOREA',
    branch : ['usa', 'canada', 'japan', 'india'],
    contact : {
        phone: 1234567880,
        email : "hyundai@gmail.com",
        address : 'jansao street 12B'
    }
}

const cardetails = {...car}

console.log(car === cardetails); //false because cardetails only copied the top layer but not the nested object, it only hold the reference on nested object

cardetails.carname = 'audi'




