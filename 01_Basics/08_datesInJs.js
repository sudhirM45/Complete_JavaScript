
let myDate = new Date() // Date is an object.

//console.log(myDate.toString());//Mon Sep 16 2024 07:40:35 GMT+0000 (Coordinated Universal Time)

//console.log(myDate.toDateString()) //Mon Sep 16 2024

// console.log(myDate.toISOString()) //2024-09-16T07:43:35.620Z
// console.log(myDate.toJSON()) // 2024-09-16T07:43:35.620Z
// console.log(myDate.toLocaleDateString()) // 9/16/2024
// console.log(myDate.toLocaleString()) // 9/16/2024, 7:43:35 AM
// console.log(myDate.toLocaleTimeString()) // 7:43:35 AM

//  let myCreatedDate = new Date(2024, 5, 23)
// console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()
console.log(Math.floor(Date.now()/1000))

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())




