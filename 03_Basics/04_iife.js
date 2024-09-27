// IIFE -> Immeadiately Invoked Function Expresion.

// An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is executed immediately after it's defined. It is used to create a private scope and avoid polluting the global namespace. The typical syntax involves defining an anonymous function and immediately calling it.

// normal function:

function chai(){
    console.log(`DB CONNECTED`);
  }
  chai();
  
  // decleration of iife fun:
  
  // named iife:
  (function chai(){
    console.log(`DB CONNECTED`);
  })();
  
  // syntax of iife fun:
  // () this first parentheses is the where we 
  // write the defination of the function.
  // () and this second parenthesses is excution where the
  // fun is excute.
  
  // iife fun as arrow function:
  
  // write two iife :
  ( () => {
    console.log(`DB CONNECTED TWO`);
  } )();
  
  // iife function with variable:
  
  ( (name) => {
    // argument
    console.log(`DB CONNECTED Three${name}`);
  } )("sudhir") // parameter