var x=require("prompt-sync")();
var a=require("./product");
class Order {
    constructor(){
        this. ord=[];
    }
    order(){
       var  q1=x("Enter the brand : ");
       if (q1=="redmi"){
           console.log("Available Phones in Redmi ")
         //  a.z.print();
         var f=1;
         for(var  i=0;i<a.z.name.length;i++){
             console.log(f++ +")"+ a.z.name[i] );
         }
           console.log("*********************************");
       }
       var q2=x("Enter which phone you want :");
      if(q2=="1"){
        this.ord[0]=a.z.name[0];
      }
      else {
        this.ord[1]=a.z.name[1];
      }
      console.log("Your oreder = "+this.ord);
      console.log("_____________________________________");
      return this.ord
    }
    cancel(){
        var q6=x("You want to cancel order : "); 
            if(q6=="yes"){
                this.ord=null;
               console.log("***Your order canceled***")
            }
            else{
                console.log("***Your order "+this.ord+"***")
                console.log("***Your order placed THANK YOU ***\n______________________________________________")
            }
      }
    }
    
exports.order=new Order();
// order.order();
// order.cancel()