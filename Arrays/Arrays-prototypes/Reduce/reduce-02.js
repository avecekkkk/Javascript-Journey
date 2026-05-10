/********************************************************Tallying Votes********************************************************** */

/**Task: You have a list of fruit names representing "votes." Use reduce to create an object that shows how many votes each fruit got.
Array: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
Goal: Return { apple: 3, banana: 2, orange: 1 }.
Hint: Check if the fruit exists in your accumulator; if it does, increment it; if not, set it to 1. */

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

const tallying = (acc,curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc
}

const voteResult = fruits.reduce(tallying,{})
console.log(voteResult);

/**************************************************Price Category*****************************************************/

/**Task: You have a list of items with their prices. Use reduce to create an object that tells you how many "Cheap" items and how many "Expensive" items you have.

Criteria:

If the price is less than 50, it is "cheap".

If the price is 50 or more, it is "expensive". */

const items = [
  { name: 'Pen', price: 5 },
  { name: 'Laptop', price: 1200 },
  { name: 'Notebook', price: 15 },
  { name: 'Headphones', price: 150 },
  { name: 'Paperclip', price: 2 }
];
const prices = (acc,curr) => {
    const category = curr.price >=50 ? 'Expensive' : 'Cheap';

    acc[category] = (acc[category] || 0) + 1;
    return acc
}

const result = items.reduce(prices,{})
console.log(result);

/*********************************************************GUEST RSVP******************************************************* */
/**Imagine you have an array of guests coming to a party. Some have responded "Yes", some "No", and some "Maybe". 
 * You want to count how many people fall into each category so you can order the right amount of food. */
const guests = [
  { name: 'Alice', status: 'Yes' },
  { name: 'Bob', status: 'No' },
  { name: 'Charlie', status: 'Yes' },
  { name: 'David', status: 'Maybe' },
  { name: 'Eve', status: 'Yes' },
  { name: 'Frank', status: 'Maybe' }
];

const responses = (acc,curr) => {
    const guestStatus = curr.status;
    acc[guestStatus] = (acc[guestStatus] || 0) + 1

    return acc;
}

const respondResult = guests.reduce(responses, {})
console.log(respondResult);

/*************************************************************INVENTORY LOGGER********************************************************************* */

/**Imagine you are running a small warehouse. You have an array of items, and each item has a type 
 * (like 'Electronic' or 'Furniture') and a stock count. fiND the total number of items you have for each category. */

const inventory = [
  { name: 'Laptop', type: 'Electronic', stock: 5 },
  { name: 'Chair', type: 'Furniture', stock: 20 },
  { name: 'Phone', type: 'Electronic', stock: 10 },
  { name: 'Table', type: 'Furniture', stock: 3 },
  { name: 'Mouse', type: 'Electronic', stock: 50 }
];

const CategorySum = (acc,curr) => {
    const types = curr.type;
    acc[types] = (acc[types] || 0) + 1

    return acc
}

const InventoryResult = inventory.reduce(CategorySum,{})

console.log(InventoryResult);

/**************************************************************Team Rooster******************************************************************* */
/**Imagine you are a coach. You have a list of players, and you want to organize them into teams.
 * Create an object where each key is the team name, and the value is an array of names belonging to that team.
 */

const players = [
  { name: 'LeBron', team: 'Lakers' },
  { name: 'Curry', team: 'Warriors' },
  { name: 'Davis', team: 'Lakers' },
  { name: 'Klay', team: 'Warriors' },
  { name: 'Giannis', team: 'Bucks' }
];

const teams = (acc,curr) =>{
    const team = curr.team
    // if(!acc[team]){
    //     acc[team] = []
    // }
    // acc[team].push(curr.name);
    acc[team] = (acc[team] || [])
    acc[team].push(curr.name);
    return acc;
}

const teamMember = players.reduce(teams, {})
console.log(teamMember);

/************************************************************Shopping Cart Analytics************************************************************ */

/**You have a shopping cart full of items. You want to know two things:

How much is the Total Cost of everything?

How many Total Items are in the cart? */

const cart = [
  { name: 'Apple', price: 2, quantity: 5 },
  { name: 'Milk', price: 5, quantity: 1 },
  { name: 'Bread', price: 3, quantity: 2 }
];

const cartDetails = (acc, curr) => {
   acc.totalcost = (acc.totalcost ?? 0) + (curr.price * curr.quantity);
   
   acc.totalquantity = (acc.totalquantity ?? 0) + curr.quantity;

   return acc;
}

const CartDetailsResult = cart.reduce(cartDetails,{})
console.log(CartDetailsResult);

/********************************************************AIRLINE******************************************************** */
/**Create an object that shows:

totalPassengers: The sum of all passengers on all flights.

flightCount: The total number of flight objects in the array.
Target Result: { totalPassengers: 430, flightCount: 3 } */

const flights = [
  { flightNum: 'AA123', status: 'On Time', passengers: 150 },
  { flightNum: 'DL456', status: 'Delayed', passengers: 80 },
  { flightNum: 'UA789', status: 'On Time', passengers: 200 }
];

const flightDetail = (acc,curr) => {
    acc.totalpassengers = (acc.totalpassengers || 0 ) +  curr.passengers
    acc.totalFlight = (acc.totalFlight || 0)
    if(curr.flightNum){
        acc.totalFlight += 1;
    }
    return acc
}

const flightData = flights.reduce(flightDetail,{})
console.log(flightData);

/********************************************************Nursing Shift log******************************************************** */

/**Create an object that specifically tracks the ER department:

erPatientTotal: The sum of patients handled only by ER nurses.

erStaffCount: The number of nurses working in the ER.
Target Result: { erPatientTotal: 22, erStaffCount: 2 }
Hint: Use an if statement inside your reduce to check if curr.department === 'ER' before adding. */

const nurses = [
  { name: 'Sarah', department: 'ER', patientsHandled: 12 },
  { name: 'Mike', department: 'ICU', patientsHandled: 4 },
  { name: 'Jenny', department: 'ER', patientsHandled: 10 }
];

const erdepartment = (acc,curr) => {
    if(curr.department == 'ER'){
        acc.erpatients = (acc.erpatients ?? 0) + curr.patientsHandled;
        acc.erstaff = (acc.erstaff ?? 0 ) + 1;
        
    } 
    return acc;
}

const erdetails = nurses.reduce(erdepartment,{})
console.log(erdetails);

/********************************************************Movie Ticket Sales******************************************************** */

/**Create an object that calculates:
 * revenue: The total money made (tickets $\times$ price).
 * ticketsSold: The total number of tickets sold across all movies.
 * Target Result: { revenue: 93, ticketsSold: 7 } */

const bookings = [
  { movie: 'Batman', tickets: 2, pricePerTicket: 15 },
  { movie: 'Dune', tickets: 4, pricePerTicket: 12 },
  { movie: 'Batman', tickets: 1, pricePerTicket: 15 }
];

const sales = (acc,curr) => {
    acc.revenue = (acc.revenue ?? 0) + (curr.tickets * curr.pricePerTicket);
    acc.tickersold = (acc.tickersold ?? 0) + curr.tickets;
    return acc;
}

const salesresult = bookings.reduce((acc,curr) => sales(acc,curr),{})
console.log(salesresult);
