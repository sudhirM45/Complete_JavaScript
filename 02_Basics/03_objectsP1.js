// In JavaScript, an object is a collection of properties, where each property has a key (or name) and a value. 
// Objects allow you to group related data and functionality together.


// object literals:

const mySym = Symbol("key1")
const Jsuser = {
    name : "sudhir",
    age : "20",
    location : "solapur",
    [mySym] : "mykey1", // using brackets we can use the symbol
    email : "sudhir@google.com",
    isLoggedIn : true,
    lastLoginDays : ["monday","sunday"]
}

// if we have to access the element in the object we access as follows : 

// console.log(Jsuser["name"])
// console.log(Jsuser["lastLoginDays"]);


Jsuser.greeting = function(){
    console.log("hello JS User");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

