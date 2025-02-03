"use strict"

let menu_form= document.getElementById("menu_form");

let customer_arr=[];

let table_body_con= document.getElementById("body_con");

menu_form.addEventListener("submit",form_data);
// console.log(menu_form," menu form data");

function form_data(event){
    event.preventDefault();

    // console.log("inside data form",event);
    let customer_name=event.target.cus_name.value;//input
    let order_cus= event.target.type_de.value;//drop down list
    // console.log(customer_name,"customer_name");
    // console.log(order_cus,"order_cus");
    // if condition for image // order
    
    new Customer_order(customer_name,order_cus)
    render_table();

}


function Customer_order(cus_name_res, order_cus_res){
    this.customer_name=cus_name_res;
    this.order_customer =order_cus_res;
    this.path_imag =`image/${order_cus_res}.jpg`;
    this.price =price_order(1, 2);

    // console.log(this,"= data this")
    customer_arr.push(this)
    console.log(customer_arr," = customer array");
}

function price_order(min, max) {
    return Math.random() * (max - min) + min;
  }
// console.log(this,"= data this out function")

function render_table(){
    for (let index = 0; index < customer_arr.length; index++) {
      let tr_el = document.createElement('tr');
      let td_el =document.createElement( 'td');
      let td_el_img = document.createElement('img');
      td_el_img.setAttribute('src',customer_arr[index].path_imag);

        // append child
        td_el.appendChild(td_el_img);
        tr_el.appendChild(td_el);
        table_body_con.appendChild(tr_el);

        
    }
}