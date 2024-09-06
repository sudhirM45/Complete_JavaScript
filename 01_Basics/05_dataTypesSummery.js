// primitive :
// 7 types:
// Number,String,null,undefined,    BigInt,Boolean,Symbol

const score = 1 // number

const isLoggedIn = true // boolean

const outsideTemp = null // null

let userEmail; // undefined

const id = Symbol('1234') // symbol
const anotherId = Symbol('1234') // both are not equal.

const bigNumber = 324456768765433n //BigInt


// non-primitive (reference) :  this are the those value jinka reference memory directly allowcate kiya ja sakta hai.

// ex - Arrays, Objects, Functions

// Arr ->
const cricketers = [rohit, virat, dhoni];

let myObj = {
    name: "sudhir",
    age: 20,
}
console.log(myObj)