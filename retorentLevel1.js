var prompt = require("prompt-sync")();
var file = require("fs");
const { parse } = require("path");
class Restorent {
    constructor() {
        this.order_number;
        this.table_number;
        this.order_status="";
        this.bill=0 ;
        this.order_item ;
        this.ordered_list = [];
       this.final_list = {};
        this.table="";

    }
    iItemList() {
        console.log("Available foods\n**********************");
        console.log(this.order_item);
        var condition;
        while (condition != "false") {
            var input1 = prompt("Enter the food :");
            this.ordered_list.push(input1);
            var input2 = prompt("You want add more foods(yes/no) : ");
            if (input2 == "yes") {
                condition = "true";
            }
            else {
                console.log(this.ordered_list+"\n*******************************")
                condition = "false";
            }
        }
    }
    billling() {
        this.bill=0;
        for (var key in this.order_item) {
            for (var i = 0; i < this.ordered_list.length; i++) {
                if (this.ordered_list[i] == key) {
                   // this.bill.push(this.order_item[key]);
                   this.bill+=this.order_item[key];
                }
                else {
                    console.log("")
                }
            }
        }
      return  this.bill;
    }
    input(input1) {
        this.table=input1;
        if (input1 == "1a") {
            this.order_number = "401";
            return "YOUR ORDER NUMBER " + this.order_number;
        }
        else if (input1 == "1b") {
            this.order_number = "402";
            return "YOUR ORDER NUMBER " + this.order_number;
        }
        else if (input1 == "1c") {
            this.order_number = "409";
            return "YOUR ORDER NUMBER " + this.order_number;
        }
    }
    diply() {
        console.log('Ordered items ' + this.ordered_list);
        console.log("TABLE NUMBER  " + this.table);
        console.log("Order number  " + this.order_number);
        console.log(" Bill           "+this.bill);
    }
    waiterAdd() {
        var input1 = prompt("Enter the food name to add :");
        var input2 = prompt("Enter the price :");
        
        this.order_item[input1] = parseInt( input2);
        console.log(this.order_item)
    }

}

var obj = new Restorent();
obj.table_number=["1a", "1b", "1c"];
obj.order_item={
    "Idlli": 50,
    "Biriyani": 150,
    "Chapathi": 40
};
module.exports = { obj }
