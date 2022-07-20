var testmain=require("./retorentLevel1");

// console.log(data)
describe("Restorent table testing ", () => {
test("Order number 401 ",()=>{
    //var result=testmain.obj.input("1a");
    expect(testmain.obj.input("1a")).toBe("YOUR ORDER NUMBER 401");
});
test("Order number 402",()=>{
    //var result=testmain.obj.input("1b");
    expect(testmain.obj.input("1b")).toBe("YOUR ORDER NUMBER 402");
});

test("Order number 409",()=>{
  //  var result=testmain.obj.input("1c");
    expect(testmain.obj.input("1c")).toBe("YOUR ORDER NUMBER 409");
});

});
describe("Checking billing ",()=>{
    var order_item={
        "Idlli":30,
        "Dosa":50,
        "Biriyani":90
    }
    var order_list=["Idlli","Biriyani"];
    var bill=0;
    test("Bill",()=>{
      var result=testmain.obj.billling(bill,order_item,order_list);
      expect(result).toBe(120);
    })
});
describe("Checking file ",()=>{
    var file=require("fs");
var filedata=file.readFileSync("order_detals.txt");
var data=JSON.parse(filedata);
    test ("file testing ",()=>{

        expect(data).toStrictEqual({
          "Ordereditems": [
            "Idlli",
            "Biriyani"
          ],
          "Amount": 200,
          "Tablenumber": "1a",
          "Ordernumber": "401",
          "OrderStatus": "Booked"
        }
    )});
})