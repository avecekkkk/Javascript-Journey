let person1 = {
    firstname: "ram"
}

let person2 = person1; // person2 has the memory reference of person1, it doesn't copy the value

person2.firstname = "shyam" // since bother variable share the same memory reference, if any variable overwrite the value, its value get changed too

console.log(person1.firstname);
console.log(person2.firstname);

