var cust=require("./custommer");
var emp=require("./emp");
test("Login checking ",()=>{
    var result=cust.a.checking("balaji",123);
    expect(result).toBe("login success");
})
test("Searching checking ",()=>{
    var result=emp.w.emp("dinga","234");
    expect(result).toBe("login success");
})

//Mocking using jest.fn()
// test("Login checking ",()=>{
//     cust.a.checking=jest.fn((a,b)=>"login success");
//     expect(cust.a.checking("balaji","123")).toBe("login success");
// })
// test("Searching checking ",()=>{
//     emp.w.emp=jest.fn((a,b)=>"login success")
//     //"dinga","234");
//     expect( emp.w.emp("dinga","234")).toBe("login success");
// })

