const obj = {
    name : 'bhalu',
    color: 'velvet',
    metal: 'titanium',

    isfullName: function(){
        return `Name: ${this.name} `
    }
}

const obj2 = {
    name: 'Gadha',
    color: 'black',
    metal : 'copper'
}

console.log(obj.isfullName());

obj2.__proto__ = obj; //obj2 now hold the reference of obj properties
console.log(obj2.isfullName()); // First it check it properties and then will check the __proto__ where obj2 will eventually be able to access the reference of obj that has in obj2 proto which inheritate from obj

obj.__proto__ = null;
// console.log(obj.toString());  ❎ : toString() is not a function








