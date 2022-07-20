// var q1=prompt("Enter which techonolgy ypu want edit :");
// if(q1=="front"){
// var rawdata = file.readFileSync('fontend.txt');
// let file_data = JSON.parse(rawdata);
// console.log("<<<<<<<<<<<<<<Frontend Technologies>>>>>>>>>> ");
// main.disp(file_data);
// var front_save={};
// front_save=file_data;
// var qq1=prompt("Enter  the new key to  : ");
// var qq2=prompt("Enter the new value : ");
// front_save[qq1]=qq2;
// main.disp(front_save);
//  file.truncateSync('fontend.txt', 0, function() {
// });
// var data = JSON.stringify(front_save, null, 2);
// file.appendFileSync('fontend.txt', data);


// var data={
// "idli":50,
// "dosa":1000
// }
// var arr=["idli","dosa"];
// //var bill=[50,40,1000,55,777];
// var sum=0;
// for (var i = 0; i < arr.length; i++) {
// for (var key in data) {
//   for(var j=0;j<arr.length;j++){
//         if (arr[i] == key) {
//             sum+=data[key];
        
      
//     }
 
// }
//   }
// }
// console.log(sum)
// // var s;
// // for(var i=0;i<bill.length;i++){
// //          s=bill[i--]+bill[i];
// //          sum+=s;
// // }
//const r1= require('prompt-sync')();

// let ord=[{name:"bottle",price:500},{name:"bag",price:1000},{name:"box",price:390},{name:"mobile",price:35000}]

// function search(){

//     let input=r1("enter product")

//    // for(let a=0;a<ord.length;a++){

//     ord.forEach(value => {
  
//   if(value.name==input){
//     console.log(value)
//   }



//     })};

// search();

function billling(bill,order_item,ordered_list) {
    bill=0;
    for (var key in order_item) {
        ordered_list.forEach((value)=>{
            if (value == key) {
               bill+=order_item[key];
            }
            else {
                console.log("")
            }
        });
    }
  return  bill;
}
var order_item={
    "Idlli":30,
    "Dosa":50,
    "Biriyani":90
}
var order_list=["Idlli","Biriyani"];
var bill=0;
var x=billling(bill,order_item,order_list);
console.log(x)