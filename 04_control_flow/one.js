/*
Control Flow in JS:

    In JavaScript, control flow refers to the order in which 
    the computer executes statements in a script. 
    It controls how the code moves from one statement to the next
    based on conditions, loops, and function calls.

    Basic Control Flow Elements:
    Sequential Execution: 
    By default, JavaScript runs code line by line from top to bottom.

    console.log("Start");
    console.log("Middle");
    console.log("End");

1) Conditional Statements (if, else if, else): 
    Used to perform different actions based on different conditions.

let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

2) Switch Statement: 
    Provides a way to handle multiple conditions more clearly than chained if-else statements.

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Unknown day");
}

3) Loops: 
    Used for repeating a block of code.

4) for Loop: 
    Runs a block of code a specified number of times.

for (let i = 0; i < 5; i++) {
    console.log(i);
}

5)while Loop: 
    Runs as long as a specified condition is true.

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
do...while Loop: 
    Similar to while but guarantees the loop runs at least once.

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

6) Function Calls: 
    Functions change control flow by pausing the execution at the current point and shifting to another function.

function greet() {
    console.log("Hello, World!");
}

greet();  // Control moves to the greet function


Error Handling (try...catch): Allows you to handle errors and prevent program crashes.


try {
    let result = x / y;
} catch (error) {
    console.log("An error occurred: " + error.message);
}


Summary of Basic Control Flow:

Sequential: 
    Code runs from top to bottom.

Conditional: 
    Uses if-else or switch to branch code based on conditions.

Loops: 
    Repeat code blocks with for, while, and do...while.

Functions: 
    Temporarily redirect control flow to reusable blocks of code.

Error Handling: 
    Prevent crashes and handle exceptions with try...cat
Error Handling: 
    Prevent crashes and handle exceptions with try...cat

*/

