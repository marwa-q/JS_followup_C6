"use strict"
// if 
let grade = 56;
if (grade > 50){ //inside if is block scope
    let x=55
    console.log("you pass the exam");
    
}

// console.log(x); //will show on console script.js:10 Uncaught ReferenceError: x is not defined
// if else
if (grade == 50 && 4/3 ==2){
    console.log("the logical operation is T");
    
}else{
    console.log("the logical operation is not T");

}

// nested if (grade = 56;)
if (age <24 && age<12 ){
    console.log("the color for them red");
    
}else if (age >12 && age<7) {
    console.log("the color is blue");
    
} else {
    console.log("the color is green");
    
}

// switch
let number = 7;

switch (number) {
    case 1:
        console.log("the number is 1");
        break;
    case 2:
        console.log("the number is 2");
        break;

    case 3:
        console.log("the number is 3");
        break;

    case 4:
        console.log("the is correct number ");
        break;
    default:
        console.log("your number not found please try again");
        
        break;
}
