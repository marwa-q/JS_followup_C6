"use strict"

function sum_inp_val(){//function declaration
    let inp_num1=34;
let inp_num2=7;

let sum_number = inp_num1 + inp_num2;
return sum_number;
// console.log("function sum_number = ", sum_number);
}
let fun_call=sum_inp_val();
// console.log(fun_call);

const func_exper= function (){};//function expretion

function math_fun(num2){//parameters
    // console.log(num1);
    let num1 =3;
    console.log(num2);
    
let operation1 = num1 +num2
return (operation1)
}

let math_result= math_fun( 15);//argument
console.log("math_result = ", math_result);

// arrow function 