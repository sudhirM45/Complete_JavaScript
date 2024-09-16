
const myArr = [1, 3, 4, 5, 6]
//console.log(myArr[3])

// arrays methods :

//myArr.push(1) //this method is used to add the element in the arrays.
//console.log(myArr);

// myArr.pop() // this method pop the last index element in the array.
// console.log(myArr);

const newArr = myArr.join() // this method take all the values of the old arr in new arr and convert into string.
// console.log(myArr);
// console.log(newArr);

// slice and splice

// slice:

console.log("A ",myArr);

const newArr1 = myArr.slice(1,3) //slice not include the last index/ range element.
// it gives the particular indexes in the arrays.
// it does not changes the original array.
console.log(newArr1);
console.log("B ", myArr)

// splice:
// splice include the last index/range element.
// splice manipulate the original array

const newArr2 = myArr.splice(1,3)

console.log(newArr2)
console.log("C ",myArr);







