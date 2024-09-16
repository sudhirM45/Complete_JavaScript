cricket_heroes = ["Rohit", "Virat", "Dhoni"]
kabaddi_heroes = ["Rahul", "Pradeep", "Pawan"]

// if we try to merge both the arrays so it create arrays inside array

// kabaddi_heroes.push(cricket_heroes)
// console.log(kabaddi_heroes);
// o/p->[ 'Rahul','Pradeep','Pawan',['Rohit','Virat','Dhoni']]

// so adding both the arrays we use concat method

const allHeroes = kabaddi_heroes.concat(cricket_heroes)
// console.log(allHeroes);

// we also use the sperade method

const allNewHeroes = [...cricket_heroes,...kabaddi_heroes]
// console.log(allNewHeroes);

const newArr = [1, 3, 5, [4, 7, 8],2, 3, 4, [4, 5, 2]]

const newArray1 = newArr.flat(Infinity)

// console.log(newArray1);



// in this sutuation we can use the flat method which convert all the subarrays and concat all the array and give a new array.

console.log(Array.isArray("sudhir")); // it cheaks the given element is array of not and return the boolean values.

console.log(Array.from("sudhir")); // it convert the given element into the array format

let s1 = 10
let s2 = 20 
let s3 = 30

console.log(Array.of(s1,s2,s3)) // it take all the single element and convert it into the single arr


