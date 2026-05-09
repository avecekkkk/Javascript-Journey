/**The includes() method of Array instances determines whether an array includes a certain 
 * value among its entries, returning true or false as appropriate 
 * SYNTAX :  includes(searchElement)
            includes(searchElement, fromIndex)
*/

const numbers = [1,2,3,4,5,6,7,8,9]

const find = numbers.includes(7, 8);
console.log(find);


//Blocked username checker

const blockedUsers = ['admin', 'root', 'owner'];
const username = 'root';

if(blockedUsers.includes(username)){
    console.log('Access Denied');
    
}

//Mini password validator

const password = 'hello@123';

if(password.includes('@' && 123)){
    console.log('strong passowrd');
    
}else {
    console.log('weak passowrd');
    
}