"use strict"

let fruits=["banana","orange","apple","mango"];
console.log( typeof(fruits.toString()));


let fruits2=["banana","orange","apple","mango"];
console.log(fruits2.at(2));


let fruits3=["banana","orange","apple","mango"];
let fruits4= fruits3.pop();
console.log("fruits3.pop() = ",fruits4, "the main array fruits3= ",fruits3);

let fruits5=["banana","orange","apple","mango"];
let fruits6= fruits5.push("Kiwi");
console.log("fruits5.push() = ",fruits6, "the main array fruits5= ",fruits5);

let fruits7=["banana","orange","apple","mango"];
let fruits8= fruits7.shift();
console.log("fruits7.shift() = ",fruits8, "the main array fruits7= ",fruits7);

let fruits9=["banana","orange","apple","mango"];
let fruits10= fruits9.unshift("graps");
console.log(fruits10);
console.log("fruits9.unshift() = ",fruits10, "the main array fruits9= ",fruits9);

let arr1 = ["red", "green"];
let arr2 = [25, 15];
let arr3 =["BMW" , "Tesla"];
let new_arr = arr1.concat(arr2,arr3);
console.log("concat result = ",new_arr);
console.log("arr1 = ",arr1);
console.log("arr2 = ",arr2);
console.log("arr3 = ",arr3);
let arr4 = ["ahmad","heba","basil"];
let arr5 = arr4;
arr4= arr4.pop()
console.log(arr5);

let x = 10;
let y = x;



