var testmain=require("./retorentLevel1");
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