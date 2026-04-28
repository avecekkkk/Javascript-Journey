let person1 = {
    firstname: "ram"
}

let person2 = person1; // person2 has the memory reference of person1, it doesn't copy the value

person2.firstname = "shyam" // since bother variable share the same memory reference, if any variable overwrite the value, its value get changed too

console.log(person1.firstname);
console.log(person2.firstname);

//These two object will share the same memory address in heap

/***************************************************************************************************************************** */

//More Refined alternate way to copy an object

let e1 = {
    fname : 'bob',
    lname : 'sev'
}

let e2 = {
    fname : e1.fname,
    mname : 'big',
    lname : e1.lname
}
e2.fname = 'marley'
console.log(e1);
console.log(e2);

/** In the above given situation we can copy the value of an object by having the different memory address of e2 and hence copied the value.
 * Although it is not feasible if an object has hundreds of key. In short we use spread operator. 
 * There two object e1, e2 have complete difference memory address in heap
 */
/**************************************************************************************************************************** */
let q1 = {
    fname: 'bob',
    lname: 'sev',
    address: {
        city: 'Kathmandu'
    }
};

let q3 = {
    ...q1
};

q3.address.city = 'Pokhara';
q3.fname = 'Rakesh'

console.log(q3);
console.log(q1)

/**In the above example the q1 and q3 has the different memory address in heap, but since q1 has the nested object, using the spread operator
 * q3 only copied the top level data into brand new object where q1 and q3 will share the same memory address of nested object address
*/


/*******************************************************Deep Copy********************************************************************** */

let earbudsProducts = {
    proID : 12345,
    proName: 'Earbuds',
    modelNo: '1ZAS234',
    color: 'blue',
    Totalsales : {
        onlinesale : 34532,
        refundReq: 24,
        Damanged : 12
    }
}

const product = JSON.stringify(earbudsProducts);
let salesproduct = JSON.parse(product);


console.log(earbudsProducts);

salesproduct.Totalsales.Damanged = 233;
salesproduct.color = 'black'

console.log(salesproduct);



