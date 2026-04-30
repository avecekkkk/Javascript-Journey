//Use map() to create a new array where each object also includes its position.


const users = [
  { id: 101, name: "Ram" },
  { id: 102, name: "Shyam" },
  { id: 103, name: "Hari" }
];

const updatedData = users.map((user,index) => {
    return {
        ...user,
        position: index
    };
});

console.log(updatedData);

    
