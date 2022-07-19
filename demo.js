var file=require("fs");
var fdata=file.readFileSync("customer.txt")
var data=JSON.parse(fdata);
var arr=[];
arr.push(data);
//console.log(arr);
arr.forEach((value)=>{
    if(value.name=="Balaji"){
    console.log(value.number);
    }
})