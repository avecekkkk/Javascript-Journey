/**Given an array of objects and a specific "key name" as a string, use map() to return a new array of objects 
 * where that specific key's value is converted to uppercase, while all other keys remain unchanged.

Input: [{ name: "apple", color: "red" }, { name: "banana", color: "yellow" }]

Task: Convert only the name property to uppercase dynamically. */

const datas = [
    { name: "apple", color: "red" },
    { name: "banana", color: "yellow" }

]

const upperCasefunc = (data) => {
    let updatedName = data.name.toUpperCase();

    return {
        name: updatedName,
        color : data.color
    };
}

const newData = datas.map(data => upperCasefunc(data))
console.log(newData);


/********************************************************************************************************************* */
//Given the array of objects, find the objects whose price is greater then 100 and `isPremium : true`

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 }
];

const checkpremiun = (item) => {
    let ispremiun;
    if(item.price > 100){
        ispremiun = true;
    }else {
        ispremiun = false;
    }
    
    return {
        ...item,
        ispremiun
    }
}

const updatedProducts = products.map(item => checkpremiun(item))
console.log(updatedProducts);

/************************************************************************************************************************************** */
//Given the array of an objects use the map() method to ouput only the name properties of an object

const orders = [
  { id: 1, customer: { name: "Alice" } },
  { id: 2, customer: { name: "Bob" } }
];

const getName = (order) => {
    return order.customer.name
}

const customerNames = orders.map(order => getName(order));
console.log(customerNames);

/********************************************************************************************************** */

//Take an array of strings and turn it into an array of objects where each object has a 
// property called word and a property called length

const fruits = ['mango', 'pineapple', 'grapes', 'papaya']

const wrapInObject = (fruit) => {
    return {
        word : fruit,
        lengthofruit : fruit.length
    }
}

const newObject = fruits.map(fruit => wrapInObject(fruit))
console.log(newObject);

/************************************************************************* */

//ID MATCHER

const names = ["Ram", "Shyam", "Hari"];

const Createprofile = (name, index) => {
    let id = index + 100; 
    return {
        id: id,
        name : name
    }
}

const profiles = names.map((name, index) => Createprofile(name, index))
console.log(profiles);

/*********************************************************************************************8 */

//You have an array of tasks. Use map() to find the task with the name "Clean" and change its status to "Done".

const tasks = [
  { work: "Eat", status: "Pending" },
  { work: "Clean", status: "Pending" },
  { work: "Code", status: "Pending" }
];

const updateTask = (task) => {
    let newstatus;
    if(task.work === 'Clean'){
        newstatus = 'Done'
    }else{
        newstatus = task.status;
    }
    return {
        work: task.work,
        status: newstatus
    }
}

const tasklist = tasks.map(task => updateTask(task))
console.log(tasklist);

/*************************************************************************************************************8 */
//You have a shopping cart.If the item is "Electronics", apply a 10% discount.If the item is "Food", it is tax-free (add a property tax: 0).
//Otherwise, add a property tax: 5.

const carts = [
  { item: "Laptop", category: "Electronics", price: 10000 },
  { item: "Apple", category: "Food", price: 2000 },
  { item: "Shirt", category: "Clothing", price: 4000 }
];


const updateCart = (cart) => {
    let propertyTax = null;
    let updateprice;
    if(cart.category === 'Electronics'){
        updateprice = cart.price - 10/100*cart.price;
        propertyTax = 5;
    }else if(cart.category === 'Food'){
        updateprice = cart.price;
        propertyTax = 0;
    }else {
        updateprice = cart.price;
        propertyTax = 5
    }

    return {
        item: cart.item,
        category: cart.category,
        price: updateprice,
        propertyTax : propertyTax
    }
}

const newCart = carts.map(cart => updateCart(cart))
console.log(newCart);


