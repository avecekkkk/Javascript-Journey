// Create an object representing a type of tea with properties for name, type, and caffeine content

const tea = {
    name : 'masala tea',
    'tea type': 'Normal Tea',
    caffeine: 'low',
    size: {
        small : 50,
        medium: 80,
        large: 120
    }
}

// Access and print the name and type properties of the tea objects

console.log(tea.name);
console.log(tea['tea type']);

//Add a new property origin to the tea objects

tea.origin = 'India';

//Change the caffeine level of the tea obejct to medium

tea.caffeine = "Medium"

// Remove the type property from the tea object

delete tea["tea type"];

//Check if the tea object has a property origin

console.log('origin' in tea);

//Use a for..in loop to print all properties of the tea objects

for(let key in tea){
    console.log(key + `:` +  tea[key]);
    
}

//Create a nested object representing different types of teas and their properties

const myTeas = {
    greentea: {
        name: "Green Tea",
        caffeine: "low",
    },
    blacktea : {
        name: 'Black tea',
        caffeine: "medium",
    }
}

// Create a copy of the tea objects

const teaCopy = {...tea} // shallow copy
teaCopy.size.medium = 75;

console.log(teaCopy);




