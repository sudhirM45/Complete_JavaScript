// # javaScript Execution Context:

// 1.JEC is the is how the we created file in the js is going to run what is the process etc.

// 2. JS run the code file in the two phase.

// 3.javascript is single threded and everything in js is a process.

// ## in the js the first phase of the excution is the Globle Execution Context.
// 1.and wherever the Globle Execution Context is form it is going to reffer to a variable named as `this`.
// 2.simply the Goble EC is placed inside the this variable.

// 3.the globle excution context of the browser is diffrent to the node js environment.

// 4.in the browser the value of the `this` variable is "window object".


// ## types of Excution context:

// 1. Global Excution Context
// 2. Function Excution Context
// 3. Eval Excution Context

// how the js code execute:

// so we have our box type means our js code file and this file is excuted in the two phase.

// 1. this phase is called as the "Memory Excution Phase".

// ~ so in this excution phase whatever the variable and the function we are decleared so for them the location is allowcated.

// ~ and that decleared var are not excuted.

// 2. second phase is the "Excution phase" in which the value is excuted.

// this all process we will see by an example:

let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

/* 

##so now we see step by step how it will execute.

STEP 1: global exeuction:

-> so whatever the code is big or small will run through the global execution and it is allowcated inside the `this`. 

STEP 2: memory Execution Phase:

-> inside the Memory phase just all the variables are placed and named as undefined.
so in the memory phase first will come->

lineNum1:
"val1" -> undefined

lineNum2:
"val2" -> undefined

lineNum3 TO lineNum6:

"addNum" -> defination

~ here just the function is decleared so the value come as 'defination'.

lineNum7:
"result1" -> undefined

lineNum8:
"result2" -> undefined

STEP 3: Execution phase->

here the whatever the execution process take place.

lineNum1:
"val1" -> 10

lineNum2:
"val2" -> 5

lineNum3:
"addNum"

lineNum7:
"result1" -> 15

~ from line 3 to 6 no execution is there so this will not added in the execution phase.

lineNum7:

in the line 7 addNum function will come so it creates it's own 
execution context.

~ so here come one new box with the "new environment  + execution thread" it created all time when the function is going to execute so it is called as 'new execution context'.

so here due to new box the main two phase will come ones again.

i) memory execution context.
ii) Exection context.

so basically it will run for the addNum() function.

i) Memory Execution Context:

~ for this we will not take from the line 7 we will see from the function line 4.


"val1" -> undefined
"val2" -> undefined
"total" -> undefined

ii) Execution context:

"num1" -> 10 from val1

"num2" -> 5 from val2

"total" -> 15 

 -> this total is return to the global execution context.

 ## this new Execution context after the execution it will deleted.

 ~ after the delete we will go to the Step 3 excution phase


 so after the execution of the lineNum 7, at line Num 8 now ones again the function is comes so whatever the 
 step we followed in the line7 ones again follow for the line8.

*/

// ---------XXXXXXXXXX-------------

/*
Call Stack:

    The call stack in JavaScript is a mechanism that tracks the execution of functions. It follows the LIFO (Last In, First Out) principle.

How it Works:
When a function is called, it's added to the top of the call stack.
If that function calls another function, the new function is added to the top of the stack.
Once a function completes, it's removed from the stack, and execution resumes from the function below it.
*/