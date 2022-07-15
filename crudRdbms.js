var mysql=require("mysql");
var main=require("./retorentLevel1");
const Connection = require("mysql/lib/Connection");
var prompt=require("prompt-sync")();
 var connection=mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database:"myNewDb"

})
// connection.connect(function(error){
//     if(error) throw Error("Server failed ") ;
//     connection.query("SELECT * FROM restorent", function (error, result) {
//         if (error) throw new Error("Data fetching from table failed  ");
//         console.log(result);
//       });

// });
 function view (){
connection.query("SELECT * FROM restorent", function (error, result) {
    if (error) throw new Error("Data fetching from table failed  ");
    console.log(result);
  });
}
function add(item,bill,table_number,order_number,order_status){
    var sql = `INSERT INTO restorent (order_items,bill, table_number ,order_number,order_status) VALUES ("${item}","${bill}","${table_number}","${order_number}","${order_status}")`;
    connection.query(sql, function (error) {
        if(error)  throw error
             console.log("Data inserted success ")
    
    });
}
function cancel(input){
    var sql=`DELETE FROM restorent WHERE order_number="${input}"`;
    connection.query(sql,function(error){
        if(error) throw error;
        console.log("Order is canceled ");
    })

}
function update(order_number,update,what){
   var sql=`UPDATE restorent SET ${what}="${update}" WHERE order_number=${order_number}`;
   connection.query(sql,function(error){
       if(error ) throw error;

       console.log("Updated successfully ");
   })
}
//*********************************************************** */
try{
var condition;
while(condition!="false"){
console.log("1)View\n2)Add\n3)Cancel\n4)Update\n5Exit");
var input11=prompt("Enter the option : ");
if(input11=="1"){
    console.log("Saved order ");
    view();
}
else if(input11=="2"){
    var input21=prompt("Enter the Items you want to add :");
    var input22=prompt("Enter the total bill :");
    var input23=prompt("Enter the table number :");
    var input24=prompt("Enter the order number : ");
    var input25=prompt("Enter the order status : ");
    add(input21,input22,input23,input24,input25);

}
else if(input11=="3"){
    var input31=prompt("Enter the order number to delete:")
    cancel(input31);
}
else if(input11=="4"){
    var input41=prompt("Enter the column name to update :");
    var input42=prompt("Enter the orer number to update :");
    var input43=prompt("Enter the new value to update :");
    update(input42,input43,input41);

}
else if(input11=="5"){
    condition="false";
}
else
{
console.log("Wroung option :")
}
};

}
catch(e){
    console.log(e.message);
}