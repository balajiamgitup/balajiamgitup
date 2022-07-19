
class Product{
    constructor(brand,id){
        this.name=["Redmi Note 11T 5G","Redmi Note 11 pro+5G"];
        this.brand=brand;
       this.id=id;
    }   
   print(){
    this.name=["Redmi Note 11T 5G","Redmi Note 11 pro+5G"]
       console.log("Brand ="+this.brand);
       console.log("ID ="+this.id);
       for(var  i=0;i<this.name.length;i++){
           console.log(++i +")"+this.name[--i]);
       }
      console.log("**********************************");
   }
}
exports.z=new Product("Redmi","123");
