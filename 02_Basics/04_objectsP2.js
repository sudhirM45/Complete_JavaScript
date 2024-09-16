const tinderUser = new Object()

tinderUser.id = "Ro45"
tinderUser.name = "Rohit"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "ro45@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Rohit",
            LastName : "Sharma"
        }
    }
}

// console.log(regularUser.fullName.userFullName.LastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4);

//console.log(tinderUser);

// console.log(Object.keys(tinderUser)) // by this keys method wee can get all the keys avilable in the object in the form of arrays.
// console.log(Object.values(tinderUser)) // by this values method wee can get all the values avilable in the object in the form of arrays.

// console.log(Object.entries(tinderUser)) // all the key value pairs in the object get converted into single arr.



// de-strucuturing the object
const course = {

    courseName : "JS in Hindi",
    coursePrize : "999",
    courseInstructor : "Hitesh"
}

const {courseInstructor : instructor} = course
console.log(instructor);
