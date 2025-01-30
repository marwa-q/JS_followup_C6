"use strict"
// let student={
//     name_std:"John",
//     age_std:20,
//     Major_std:"CS"
// }

function Std_func_inf1 (st_name, st_age, st_mjor){
    this.student_name=`our student ${st_name}`;
    this.student_age= st_age;
    this.student_maj= st_mjor;
}

    let Joud1=new Std_func_inf1("Joud", 15, "BIT");
    console.log(Joud1,"result");
    
    // let Osama =new Std_func_inf("Osama", 20, "MIS")

    // console.log(Osama);
    
    function Std_func_inf (st_name, st_age, st_mjor){
        let student_name=`our student ${st_name}`;
        let student_age= st_age;
        let student_maj= st_mjor;
        let new_arr=[];
        new_arr.push(student_name);
        new_arr.push(student_age);
        new_arr.push(student_maj);

        return new_arr;
    }
    
        let Joud= Std_func_inf("Joud", 15, "BIT");
        console.log(Joud);
    

