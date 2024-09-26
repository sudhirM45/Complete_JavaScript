// console.log("Sudhir")

// 1.undefined in JS : 
// in JavaScript means a variable has been declared but has not been assigned a value yet. 
// It represents the "absence of a value."

// 2.null in JS :
//  in JavaScript is an intentional assignment representing "no value" or "empty value." 
//  It is explicitly set to indicate that a variable has no object or value.

/* 3.Object in JS :
   An Object in JavaScript is a collection of key-value pairs, where each key is a string 
   (or symbol) and each value can be of any data type (like a number, string, array, or 
    another object). Objects are used to store and organize data and functionality.

For example:

javascript
Copy code
const person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log("Hello!");
  }
};
Here, person is an object with properties name and age, and a method greet().
*/

/*

// 4.symbol in JS : 
// A Symbol in JavaScript is a unique and immutable primitive value used to create unique property
// keys for objects. Symbols are often used to avoid property name collisions in objects, 
//  especially when building libraries or frameworks.

/* 
we can create a symbol using the Symbol() function:

javascript
Copy code
const id = Symbol("id");
Each call to Symbol() creates a new, unique symbol, even if the descriptions are the same:

javascript
Copy code
const sym1 = Symbol("example");
const sym2 = Symbol("example");

console.log(sym1 === sym2); // false

Symbols are typically used for defining private properties or methods on objects, 
ensuring they don't conflict with other property keys.
*/


JSON Notes:
Data Types:

   Strings (must be in double quotes)
   Numbers
   Booleans (true/false)
   Arrays
   Objects
   Null (null)

   
Syntax Rules:

Data is represented as key-value pairs (key and value are separated by a colon :).
Keys must be strings enclosed in double quotes (").
Values can be any valid JSON data type.
   
 Common Uses:

APIs: Used to exchange data between server and client.
LocalStorage: Can be used to store structured data in browsers.
Configuration Files: Commonly used for application settings.

*/
