var t=require("prompt-sync")();
var b=require("./product")

class Emp {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.add;
        this.delete;
    }
    add(){
        var q1 = t("enter the brand you want to add : ")
        if (q1 == "redmi") {
            b.z.name;
            var q2 = t("Enter the mobile name :");
            b.z.name.push(q2);
            console.log(b.z.name);
        }

    }
    delete(){
        b.z.name;
        for (var i = 0; i < b.z.name.length; i++) {
            console.log(++i + ")" + b.z.name[--i]);
        }
        var q1 = t("Enter the which mobile you want to remove :")
        if (q1 == "1") {
            b.z.name.splice(0, 1);
            console.log(b.z.name)
        }
        if (q1 == "2") {
                b.z.name.splice(1, 1);   
                console.log(b.z.name)
        }
    }
    emp(n, i) {
        var s = true;
        var result;
        if (n == this.name && i == this.id) {
            console.log("******LOgin is success*****");
            console.log("1)Add \n2)Delete");
            var q2 = t("Enter the option : ");
            if (q2 == "1") {  
             this.add();
            }
            if (q2 == "2") {
                this.delete();
            }
            result = "login success";
            s = "false";
        }
        else {
            console.log("login failed pls try agin ")
            result = "Login fail";
        }
        return result;
    }
}
exports.w=new Emp("dinga","234");