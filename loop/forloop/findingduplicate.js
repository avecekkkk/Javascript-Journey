function findDuplicates(arr) {
  let seen = {};
  let duplicates = [];
  for (let item of arr) {
    if(seen[item]){
        if(!duplicates.includes(item)) duplicates.push(item);
    }else {
        seen[item] = true;
    }
  }
  return duplicates;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 3, 5])); // [2, 3]