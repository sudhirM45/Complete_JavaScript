// for of loop

// for...of Loop in JavaScript
// Purpose: Iterates over iterable objects 
// (like arrays, strings, maps, sets, etc.) 
// and provides direct access to each element of the iterable.

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(`values of arr is : ${num}`);
}
const greeting = "Hello world"
for (const greet of greeting) {

    if(greet == " "){
        // continue
        // break
    }
    //console.log(`Each char is : ${greet}`);
}

/*
Map in JavaScript:

Purpose: 
    A Map is a collection of key-value pairs where both keys and values can be of any type (primitive or object). Unlike regular JavaScript objects, a Map maintains the order of its entries and allows for keys of any type.

Key Features:

Insertion Order: 
    Maps maintain the order of insertion, so you can rely on the order of iteration.

Any Type of Key: 
    Keys in a Map can be any value (including objects, functions, etc.), not just strings or symbols.

Size Property: 
    Maps have a size property to count the number of entries.

*/
const map = new Map() // in js map is the object.

map.set("Rohit Sharma","MI")
map.set("virat kohali","RCB")
map.set("MS Dhoni","CSK")
map.set("Shikhar Dhawan","PBKS")

// console.log(map);
// In maps key value pairs are unique and double entry is not allowed.

for (const [key,value] of map) {
    //console.log(key , ':-', value);
}

const myObject = {
    js: 'javaScript',
    cpp: 'c++',
    html:'hyper text markup language',
    css:'cascade style sheet'
}

// we can't iterate object through the for of loop so thay why for
// iterating on the objects we use 'for in loop'

for (const key in myObject) {
    //console.log(key)
}
//to print both key value pair:
for (const key in myObject) {
    //console.log(`${key}, is shortCut for : ${myObject[key]}`)
}

// diff between the for in & for of:
// for of loops gives the direct values. 
// for in loops gives the key values.


// for in loops can work in array?

const proLanguages = ["js", "java", "python", "c++"]

for (const key in proLanguages) {
    //console.log(key) // for in loops don't give the values directly it gives the kyes values. like by default -> 1,2,3,4,5,6

    // for printing the values ;
    //console.log(proLanguages[key]);
}


// forEach in JavaScript
// Purpose: The forEach method is used to execute a 
// provided function once for each element in an array.

const coding = ["js", "java", "c++", "python"]

coding.forEach( function (item){
    //console.log(item);
})

// variation 2nd: using arrow functions

coding.forEach( (item) => {
    //console.log(item);
})

// variation 3 : by declaring the function

function printMe(item){
    //console.log(item)
}

coding.forEach(printMe)

// forEach loop does not consists only one parameter it also
// has the item,index and whole arr.

coding.forEach( (item,index,arr) => {
    //console.log(item,index,arr);
})

// single arrays consiting multipal arrays.

const codingLanguage = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    },

]

codingLanguage.forEach( (item) => {
    console.log(item.languageFileName);
    console.log(item.languageName,"\n");
})
