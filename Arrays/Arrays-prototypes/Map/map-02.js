// 1.Given an array of objects representing products, each with a name and a price, use map() to create a new array that only 
// contains the product names

const products = [
    {
        name : 'Headphone',
        price : 12000
    },
    {
        name : 'Earbuds',
        price : 5000
    },
    {
        name : 'phone',
        price : 30000
    }
]

const onlyProductName = products.map(product => {
    return product.name
})

console.log(onlyProductName);


