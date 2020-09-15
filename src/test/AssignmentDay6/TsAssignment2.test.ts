import{FactorialOfNumber} from "../../main/Day5Assignments/TsAssignment2"
var factorial:any
beforeEach(()=>{
     factorial=new FactorialOfNumber();
})

afterEach(()=>{
    factorial=null;
})

test('Test Factorial of 5 is 120 with logic method',()=>{
   expect(factorial.factorialWithLogic(5)).toBe(120);
})

test('Test Factorial of 5 is 120 with recurssive method',()=>{
    expect(factorial.factorialWithRecurssion(5)).toBe(120);
 })

 test('Test Factorial of 5 is not 125 with logic method',()=>{
     expect(factorial.factorialWithLogic(5)).not.toBe(125);
 })
 
 test('Test Factorial of 5 is 120 with recurssive method',()=>{
    expect(factorial.factorialWithRecurssion(5)).not.toBe(125);
 })
