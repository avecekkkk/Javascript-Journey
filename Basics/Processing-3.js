/* CONDITIONS */
/*
if() {

} else {
    
}
 */

let weather = "rainy";

if(weather === "rainy"){
    console.log("The weather is rainy");
    
} else if(weather === 'sunny'){
    console.log("The weather sunny");
    
} else {
    console.log('The weather is cloudy');
    
}

// let year = prompt('In which year was the ECMAScript-2015 specification published?', ''); //Execute in browser

// if (year < 2015) {
//   alert( 'Too early...' );
// } else if (year > 2015) {
//   alert( 'Too late' );
// } else {
//   alert( 'Exactly!' );
// }

// let isAllowed;
// let age = prompt('How old are you?', '');

// if(age >= 18){
//     isAllowed = true;
// } else {
//     isAllowed = false;
// }

// alert(isAllowed);

/** CONDITIONAL QUESTION OPERATOR */

let scorepoint = 20;

let isaccessed = (scorepoint > 18) ? true : false ;

console.log(`DID HE ABLE ACCESSED THE GATE? : ${isaccessed}`);

/** sEQUENCE QUESTION ? OPERATOR */

let jobexperienceyear = 15;

let msg = (jobexperienceyear == 0) ? 'No Experience' :
(jobexperienceyear < 1) ? 'Junior Position'  :
(jobexperienceyear < 5) ? 'mid-senior position' :
(jobexperienceyear < 10) ? 'Senior Position' :
(jobexperienceyear <= 14) ? 'CEO' : 'God'

console.log(msg);


let age = 19;

let isadult = (age > 18) ? true : false;

console.log(isadult);

