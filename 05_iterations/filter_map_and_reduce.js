/* 

JavaScript Filters:

    The filter() method in JavaScript is used to create 
    a new array with all elements that pass a certain condition 
    or test implemented by a provided function. 
    It does not change the original array but returns a new one based on the condition.

    A callback function in JavaScript is a function that is passed as an argument to another function and is executed after a certain event occurs or when a particular condition is met. It allows you to customize the behavior of functions and handle asynchronous operations.

Characteristics of Callback Functions

Passed as Arguments: 
    You can pass a function as an argument to another function. This allows for dynamic behavior.

Executed Later: 
    The callback function is executed after the main function completes its task. This can be synchronous (immediately) 
    or asynchronous (after some time).

Commonly Used in Events and Asynchronous Programming: 
    Callbacks are frequently used in event handling, asynchronous operations (like AJAX requests), and array methods.

*/


//    forEach loop does not returns the value.
// when we try to store the value in variable
const coding = ["java", "python", "js", "spring boot"]

const newCoding = coding.forEach( (item) => {
    // console.log(item);
    // return item
})

// console.log(item);

// filter code:

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newArr = myArr.filter( (num) => { // if we open the scope we have to give return statement otherwise error will occurs.
//     return num > 4
// })

const newArr = []

// myArr.forEach( (num) => {
//     if (num > 4) {
//         newArr.push(num)
//     }
// });
// console.log(newArr);


// filter using example:

const books = [
    {title: "Book One", genre: "Friction", publish: "1995", addition: 2000},

    {title: "Book Two", genre: "History", publish: "2002", addition: 2008},

    {title: "Book Three", genre: "Non-Friction", publish: "1988", addition: 1999},

    {title: "Book Four", genre: "Science", publish: "1993", addition: 2006},

    {title: "Book Five", genre: "Geographical", publish: "2004", addition: 2009},

    {title: "Book Six", genre: "Comedy", publish: "1990", addition: 2001},

    {title: "Book Seven", genre: "Drama", publish: "2006", addition: 2010},

    {title: "Book Eight", genre: "Horrer", publish: "1992", addition: 2006},

    {title: "Book Nine", genre: "Friction", publish: "2015", addition: 2020},

    {title: "Book Ten", genre: "History", publish: "2019", addition: 2023},

]

let userBooks = books.filter( (book) => book.genre === "History")

userBooks = books.filter( (book) => {
    return book.publish > 2000 && book.genre === "History"
})
// console.log(userBooks);


// maps in javaScript:

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumArr = numArray.map( (num) => num + 10 )

const newNumArr = numArray
                .map( (num) => num * 10 ) 
                .map( (num) => num + 10 )
// o/p -  [
//   20, 30, 40,  50,  60,
//   70, 80, 90, 100, 110
// ]
// console.log(newNumArr);


// reduce method in javascript:

const myNum = [1, 2, 3]

// const myTotal = myNum.reduce( function (acc, currVal){
//     console.log(`acc: ${acc} , currVal: ${currVal}`)
//     return acc + currVal
// },35)

// const myTotal = myNum.reduce( (acc,curr) => acc+curr)
// console.log(myTotal);


const courseCart = [
    {
        courseName: "javaScript",
        coursePrice: 9
    },

    {
        courseName: "Java Dev",
        coursePrice: 3
    },

    {
        courseName: "DSA in JAVA",
        coursePrice: 1
    },

    {
        courseName: "MERN Dev",
        coursePrice: 2
    },
]


const totalPay = courseCart.reduce((acc, item) =>
    acc + item.coursePrice,0 )

console.log(`The total couser Prise is : ${totalPay} Ruppes.`);