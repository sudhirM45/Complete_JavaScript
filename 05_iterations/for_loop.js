// for loop:

for (let i = 1; i <= 10; i++) {
    const element = i;
    //console.log(element);
}

// printing the tables from 1 to 10 : 
for (let i = 1; i <= 10; i++) {
    //console.log(`table of : ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value : ${j}`);
        //console.log(i + " * " + j + " = " + i*j);
    }
}

// use of the break statement:

//const myArr = ["rohit","virat","dhoni"]
for (let i = 1; i < 10; i++) {
    if( i == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`the value of i : ${i}`);
}