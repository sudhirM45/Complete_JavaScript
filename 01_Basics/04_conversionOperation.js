/*
const: Declares a block-scoped variable that cannot be reassigned after its initial assignment.
The variable's value is constant, but if it is an object or array, its contents can still be
modified.

let: Declares a block-scoped variable that can be reassigned. It's generally used for variables
that need to be updated or changed.
*/

// let score = 33

//  console.log(typeof score)
//  console.log(typeof(score));
 // "33" -> get easly convert
 //  "33abc" -> NaN(not a num)
 //  "true" -> 1; "false" -> 0;

 // in boolean 1-> true; 0-> false
 // "" -> false : "sudhir" -> true

 // ---------> OPERATIONS <--------


//  let value = 3
//  let negValue = -value
//  console.log(negValue);
 
//  let str1 = "sudhir"
//  let str2 = " mhamane"
//  let str3 = str1 + str2
//  console.log(str3);

// console.log("1" + 2); -> 12
// console.log(1 + "2"); -> 12
// console.log("1" + 2 + 2); -> 122
// console.log(1 + 2 + "3"); -> 33

// #comparison

// console.log("2" > 1); -> true
// console.log("02" > 1); -> true

// console.log(null > 0); -> false
// console.log(null == 0); -> false
// console.log(null >= 0); -> true
// -> the equality check == and the comparison '> , < ,>=, <=' both work differently.
// comparison convert null to a num, treating it as 0.
// that's why (3) null >= 0 is true and (1) null > 0 is false.

// === -> tripple equal to cheak strictly both values and datatypes

// ex-> console.log("3" === 3); yaha pe === check karga ki dono values same hai ya nahi o 
// datatype bhi check karega dono same datatype hai to hi ye conversion karega nahi to vo allow 
// nahi karega.

 
