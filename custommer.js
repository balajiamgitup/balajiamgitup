var x=require("prompt-sync")();
var file=require("fs");
//var z=require("./order");
var arr=[];
var dummy=[];
class Customer{
    constructor(){
        this.name;
        this.number;
        this.username;
        this.password;
    }
    newUser(taking){
        if(taking=="yes"){
          var filedata=file.readFileSync("customer.txt");
          var data=JSON.parse(filedata);
          dummy.push(data);
          this.name=x("Enter the neame :");
          this.number=x("Enter the mobile number :");
         dummy.forEach((value)=>{
            if(value.name==this.name && value.number==this.number){
            console.log("User all ready exist give another name and number ")
          }
          else {
            this.username=x("Enter the user name :");
            this.password=x("enter the password :");
          }
        });

        }
        dummy.pop;
    }
    loging(input,name,pswd){
      if(input=="no"){
        var result;
        var fdata=file.readFileSync("customer.txt")
        var data=JSON.parse(fdata);
        arr.push(data);
   arr.forEach((value)=>{
        if(value.password==pswd && value.username==name){
        // console.log("******LOgin is success*****");
        result="login success"; 
      }
      else{
        // console.log("login failed pls try agin ")
        result="Login fail"
    }
  })
}
 return result;
//}

}
}

// searching(){
//    var q1=x("Enter the ordered brand to search : ");
//      if(q1=="redmi"){
//        console.log("***Your order = "+z.order.ord+"***");
//        return z.order.ord;   
//    }
// }
var a=new Customer();
var input=x("New user ")
if(input=="yes"){
var fdata=file.readFileSync("customer.txt");
var rawdata=JSON.parse(fdata);
arr.push(rawdata);
a.newUser(input);
arr.push(a);
var data=JSON.stringify(arr,null,2);
file.writeFileSync("customer.txt",data);
}
else if(input=="no"){
var input1=x("Enter the usrname :");
var input2=x("Enter the pswd");
var checkoutput= a.loging(input,input1,input2);
console.log(checkoutput)
}