const user ={
    userName: "Sudhir",
    price: 899,

    welcomeMessage: function(){
        //console.log(`${this.userName},welcome to website.`);
        //console.log(this);
        
    }
    // current context is in between the curly bresses
    // outside this no connection is there.

    // curr context is like username or the price.
    // so access the variables inside this scopes at which
    // 'this' keyword is used.
}

// user.welcomeMessage() // this prints : wec,sudhir to website.

// if someone change the username
// user.userName = "suraj"
 //user.welcomeMessage() // it gives wec,suraj to web.

// console.log(this);
// this single line give the output empty scope
// because we are in the node environment.

// browser ke under globle object windows hai.

// arrow in JS : 

/* 
Arrow functions are a concise way to write functions in JavaScript, introduced in ES6 (ECMAScript 2015). They provide a shorter syntax compared to traditional function expressions and also have different behavior with respect to the this keyword.
*/

//Traditional function:

// function add(a, b) {
//   return a + b;
// }

//Arrow function:

// const add = (a, b) => a + b;

// No this Binding: Unlike regular functions, arrow functions do not have their own this context. 
//They inherit this from the surrounding scope (lexical scoping). 
//This is useful when working with methods inside objects or in callback functions.

/*
In an interview, if you're asked why arrow functions don't have their own this, here's how you can explain it:

Arrow functions are designed to be more concise, but they also behave differently when it comes to this. Unlike regular functions, arrow functions don’t have their own this context. Instead, they inherit this from the surrounding scope where they are defined. This is called lexical scoping.

In traditional functions, this refers to the object that calls the function. But in arrow functions, this is fixed and can't change, making them very useful when you want to ensure this refers to the same thing across different parts of your code, like in callbacks or event handlers.

Here's a quick example:

function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++; // `this` refers to the Person object
    console.log(this.age);
  }, 1000);
}
In this example, using an arrow function inside setInterval keeps this referring to the Person object, which wouldn't happen with a regular function.

In short, arrow functions were designed this way to simplify certain use cases where you want this to behave consistently.
*/

//how define arrow function:

// const chai = () => {
//     let userName = "sudhir";
//     console.log(this.userName);
// }
// chai() // undifined

// arrow function : 

//  const addTwo = (num1,num2) =>{
//     return num1 + num2
//  }
// console.log(addTwo(4,5));

// implicite return func : 

//const addTwo = (num1,num2) => (num1+num2)

// define objects : 
//const addTwo = (num1,num2) => {userName:"sudhir"}//o/p-undefined
const addTwo = (num1,num2) => ({userName:"sudhir"})

console.log(addTwo(34,43));




