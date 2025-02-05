"use strict"

fetch('products.json')
.then(response=>{
    // console.log(response.text(),"response");
    return response.text();
    
}).then(text=>{
    // console.log(text,"data result");
try{
    console.log(JSON.parse(text));
}catch(e){
    console.log(e,"error mesage");
    
}

    
    
})

