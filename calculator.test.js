//describe() - Test plan
// it() / test() - test case
//expect() - assertion
const {add} = require("./calculator");

describe("Add feature of the calculator",()=>{
    test("Add 2 positive numbers",()=>{
        expect(add(5,10)).toBe(15);
        //expect().toEqual();
        //expect().toBeTruthy()
        //expect().toBeFalsy()
        //expect().toBeDefined()
        //expect().toBeUndefined()
    });
    test("Add 2 negative numbers",()=>{
        expect(add(-5,-10)).toBe(-15);
    });

});

//yet another manifest language-  YAML