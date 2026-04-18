//Create an array of names. Loop through them and print how many characters are in each name (e.g., "Alice" → 5).

let names = ['aditi', 'abhishek', 'rana', 'piyush', 'flacko']
function nameLength(naam){
    for(i=0; i<names.length; i++){
        let count = naam[i].length
        console.log(`${naam[i]} => ${count}`);
        
    }
}
nameLength(names)


