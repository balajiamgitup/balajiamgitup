var t=require("prompt-sync")();
var a=require("./custommer");
var b=require("./product");
var c=require("./order");
var d=require("./custommer");
var e=require("./emp");
console.log("####   WELCOME TO ECOM APPLICATION   ###\n___________________________________________________");
console.log("1)Login  \n2)Employee login\n---------------------------");
var qq=t("Select the option : ");
if(qq=="1"){
    var q1=t("Enter name :");
     var q3=t("Enter Id :")
     a.a.checking(q1,q3); 
console.log("Available products \n**************************");
b.z.print();
c.order.order();
c.order.cancel();
var q=t("You want to search your order :");
if(q=="yes"){
 a.a.searching();
}}
 if(qq=="2"){
var q9=t("Eneter the Employee name : ");
var q8=t("Eneter the Employee Id : ");
e.w.emp(q9,q8);
 }
