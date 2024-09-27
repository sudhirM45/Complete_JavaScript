/* 
In JavaScript, truthy and falsy values refer to how values are
interpreted in a boolean context, such as in an if statement.

Falsy Values:
    These values evaluate to false when converted to a boolean:

1. false
2. 0
3. "" (empty string)
4. null
5. undefined
6. NaN (Not-a-Number)

Example:

if (0) {
    console.log("Won't run, 0 is falsy.");
}


Truthy Values:

    All other values are considered truthy (they evaluate to true), including:

1. Non-zero numbers (e.g., 1, -5)
2. Non-empty strings (e.g., "hello")
3. Objects and arrays (even if empty: {}, [])
4. true

Example:

if (1) {
    console.log("Will run, 1 is truthy.");
}

In Summary:

    Falsy values are those that evaluate to false.
    Truthy values are everything else that evaluates to true.

*/

/* 
Ternary Operator in JavaScript:
    The ternary operator is a shorthand way to write an if-else statement. It has the 
    
syntax:

condition ? expressionIfTrue : expressionIfFalse;

condition: 
    This is the condition to evaluate (it should return a boolean).

expressionIfTrue: 
    This is the result if the condition is true.
expressionIfFalse: 
    This is the result if the condition is false.

    ex:
    let age = 18;
    let canVote = age >= 18 ? "Yes, you can vote." : "No, you're too young.";
    console.log(canVote);  // Output: Yes, you can vote.

*/