var restorentmain=require("./retorentLevel1");
//restorentmain.main();
var prompt=require("prompt-sync")();
var file=require("fs");
var condition;
function save(){
restorentmain.obj.final_list["Ordereditems"]=restorentmain.obj.ordered_list;
restorentmain.obj.final_list["Amount"]=restorentmain.obj.bill;
restorentmain.obj.final_list["Tablenumber"]=restorentmain.obj.table;
restorentmain.obj.final_list["Ordernumber"]=restorentmain.obj.order_number;
restorentmain.obj.final_list["OrderStatus"]=restorentmain.obj.order_status ;
var data=JSON.stringify(restorentmain.obj.final_list,null,2)
file.writeFileSync("order_detals.txt",data);
}
//restorentmain.obj.input("1a")
function main(){
    var condition="true";
while(condition!="false"){
console.log("\4 1)User \n \2 2)Waiter \n \3 3)Exist  \n \1 5)Kitchen \n \4 6)Saved data ")
var input2=prompt("enter the option :")
if(input2=="1"){
    restorentmain.obj.iItemList();
   // restorentmain.obj.billling();
console.log("Available tables ")
console.log(restorentmain.obj.table_number);
restorentmain.obj.table = prompt("Enter the table number ")
restorentmain.obj.input(restorentmain.obj.table);
var input4=prompt("Enter the order status : ");
if(input4=="Booked"){
restorentmain.obj.order_status=input4;
restorentmain.obj.billling(restorentmain.obj.bill,restorentmain.obj.order_item,restorentmain.obj.ordered_list);
restorentmain.obj.diply();
var input=prompt("1)Save : ");
if(input=="1"){
save();
}
else{
    console.log("wroung option ");
}
}
else{
    console.log("Your order canceled ")
}
}
//******************************************************* */
else if(input2=="2"){
   console.log("\1 1)View \2 2)add \3 3)update ");
   var input3=prompt("Enter the option :");
   if(input3=="1"){
    restorentmain.obj.diply();
   }
//    *********************  addd
   else if(input3=="2"){
       console.log(restorentmain.obj.order_item)
       restorentmain.obj.waiterAdd();
   }
   //*************update  */
   else if(input3=="3"){
       console.log(" \7 1)Update price \1 2)Update table :");
       var input4=prompt("Enter the option :");
       if(input4=="1"){
           console.log(obj.order_item);
           var key=prompt("Enter the food name to update price :");
           var value=prompt("enter the new price ;");
           restorentmain.obj.order_item[key]=value;
       }
       else if(input4=="2"){
           console.log(restorentmain.obj.table_number);
           var table=prompt("Enter the table number ");
           restorentmain.obj.input(table);
           console.log(restorentmain.obj.table);
           save();
       }
   }
   else{
       console.log("Wroung option  ")
   }

}
else if (input2=="3"){
    condition="false";
}
else if (input2=="5"){
    var input1=prompt("Update the  the order status : ");
   restorentmain.obj.order_status=input1;
    if(restorentmain.obj.order_status=="Cancel"){
        file.truncateSync("order_detals.txt");
    }
}
else if(input2=="6"){
    var fdata=file.readFileSync("order_detals.txt");
    console.log(JSON.parse(fdata));
}
else {
    console.log("wroung input ")
}
}
}
 try{
main();
}
catch(e){
    console.log(e.message);
}