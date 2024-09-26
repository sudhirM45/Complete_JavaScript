/*
 In JavaScript, scope refers to the visibility or accessibility of variables, functions, and objects in different parts of the code. There are mainly three types of scopes:
 1. Global Scope
 2. Function Scope
 3. Block Scope
 */

 if(true){
    let a = 10
    const b = 20
    var c = 30
    //here the above three var are decleard in this block 
    // the first two let and const are give error if we print
    // these value in the outside this block and this a right
    // method.But the var is print the val 30 if console the 
    // it so this is the problem thats why we are not use the 
    // var variable.

    // whatever we written in this block this is called as block scope .
    
    // # whatever we give the values in globle scope this val is avilable for the block scope.

    // # but the block scope values are not avilable for the globle scope.

 }


// var is not act as block scope due to which the let and 
// const are used.

// '{}'-> in every lang this is known as scope and it seen in the function and if-else.

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
   const firstName = "Sudhir"

   function two(){
      const SecondName = "Subhash"
      //console.log(firstName)
   }
   //two()
}
//one()

if(true){
   const userName = "sudhir"
   if(userName === "sudhir"){
      const lastName = "Mhamane"
      // console.log(userName);
      
   }
   // console.log(lastName);
   
}
// console.log(userName);


// 

function addone(num){
   return num + 1;
}
//console.log(addone(2))
// this is a noramal basic function
// if we call the fun above the fun it will not give the error 
// it will run. 

const addTwo = function(num){
   return num + 2;
}

console.log(addTwo(3))
// this is also called as fun but it is also called as 
// expression.
// this fun is cannot access the call if we call the function
// above the function it will give the error so it is called
// hoisting