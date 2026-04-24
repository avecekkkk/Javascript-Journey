let mysocialname = "avecek";

let myanothername = mysocialname; // the myanothername copied the value of mysocialname value.

myanothername = "bob"; // in the line myanothername variable overwrite the value and assign new value "bob", mysocialname value doesn't get altered cause 
//myanothername copied the value of mysocialname

console.log(mysocialname); 

let count = 10; //Origanl value
let newcount = count; // Copied Value

newcount = newcount + 5; //overwrite the copied value

console.log(count); //same original value

console.log(newcount); // new value

