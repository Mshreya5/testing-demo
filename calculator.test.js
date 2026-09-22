const {add} = require("./calculator");

describe("Add feature of the calculator",()=>{
    test("Add 2 positive numbers",()=>{
        expect(add(5,10)).toBe(15);
    });
    test("Add 2 negative numbers",()=>{
        expect(add(-5,-10)).toBe(-15);
    });

});
